import re
import os
from pathlib import Path

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    
    # First, handle simple cases: X | None -> Optional[X]
    # Pattern: (\w+(?:\[[^\]]+\])?) \| None
    content = re.sub(r'(\w+(?:\[[^\]]+\])?)\s*\|\s*None', r'Optional[\1]', content)
    
    # Handle Optional[X] where X might already be a generic
    content = re.sub(r'Optional\[Optional\[(.*?)\]\]', r'Optional[\1]', content)
    
    # Handle Union cases: X | Y -> Union[X, Y]
    # This is more complex, let's handle common patterns
    content = re.sub(r'(\w+(?:\[[^\]]+\])?)\s*\|\s*(\w+(?:\[[^\]]+\])?)', r'Union[\1, \2]', content)
    
    # Fix dict[str, Any] | None -> Optional[dict[str, Any]]
    content = re.sub(r'Optional\[dict\[(.*?)\]\]', r'Optional[Dict[\1]]', content)
    content = re.sub(r'Optional\[list\[(.*?)\]\]', r'Optional[List[\1]]', content)
    
    # Fix Union[dict[...]] -> Union[Dict[...]]
    content = re.sub(r'Union\[dict\[(.*?)\]\]', r'Union[Dict[\1]]', content)
    content = re.sub(r'Union\[list\[(.*?)\]\]', r'Union[List[\1]]', content)
    
    # Fix built-in types - already correct
    
    # Fix Union types - already correct
    
    # Check if typing imports are needed
    needs_typing = False
    if 'Optional[' in content and 'from typing import' not in content and 'import typing' not in content:
        needs_typing = True
    if 'Union[' in content and 'from typing import' not in content and 'import typing' not in content:
        needs_typing = True
    if 'Dict[' in content and 'from typing import' not in content and 'import typing' not in content:
        needs_typing = True
    if 'List[' in content and 'from typing import' not in content and 'import typing' not in content:
        needs_typing = True
    if 'Any' in content and 'from typing import' not in content and 'import typing' not in content:
        # Check if Any is used as type annotation
        if re.search(r':\s*Any\b', content) or re.search(r'Any\s*[,=\]]', content):
            needs_typing = True
    
    if needs_typing:
        # Add typing imports at the top after other imports
        lines = content.split('\n')
        import_idx = 0
        for i, line in enumerate(lines):
            if line.startswith('from typing import') or line.startswith('import typing'):
                import_idx = i
                break
            if line.startswith('from ') or line.startswith('import '):
                import_idx = i + 1
        
        # Find what's already imported
        existing_imports = set()
        for line in lines[:import_idx+5]:
            if line.startswith('from typing import'):
                parts = line.replace('from typing import', '').strip()
                for p in parts.split(','):
                    existing_imports.add(p.strip())
        
        needed = []
        if 'Optional[' in content and 'Optional' not in existing_imports:
            needed.append('Optional')
        if 'Union[' in content and 'Union' not in existing_imports:
            needed.append('Union')
        if 'Dict[' in content and 'Dict' not in existing_imports:
            needed.append('Dict')
        if 'List[' in content and 'List' not in existing_imports:
            needed.append('List')
        if ('Any' in content or 'any' in content.lower()) and 'Any' not in existing_imports:
            # Check if Any is used as type
            if re.search(r':\s*Any\b', content) or re.search(r'Any\s*[,=\]]', content):
                needed.append('Any')
        
        if needed:
            import_line = f'from typing import {", ".join(needed)}'
            lines.insert(import_idx, import_line)
            content = '\n'.join(lines)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed: {filepath}")
        return True
    return False

# Process all Python files in app/
backend_path = Path('/Users/diptonath/Documents/GitHub/KAIRO/backend/app')
fixed_count = 0
for py_file in backend_path.rglob('*.py'):
    if '__pycache__' not in str(py_file):
        if fix_file(py_file):
            fixed_count += 1

print(f"\nFixed {fixed_count} files")