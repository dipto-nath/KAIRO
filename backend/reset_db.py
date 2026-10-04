import asyncio
from app.core.config import settings
from app.db.database import Base
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text

# Need to import all models so Base.metadata knows about them
from app.db.models import *

async def main():
    engine = create_async_engine(settings.DATABASE_URL)
    async with engine.begin() as conn:
        print("Dropping all tables and types...")
        await conn.run_sync(Base.metadata.drop_all)
        await conn.execute(text("DROP TYPE IF EXISTS reservation_status CASCADE"))
        await conn.execute(text("DROP TYPE IF EXISTS session_status CASCADE"))
        await conn.execute(text("DROP TYPE IF EXISTS message_role CASCADE"))
        await conn.execute(text("DROP TYPE IF EXISTS event_type CASCADE"))
        print("Dropped all.")

if __name__ == "__main__":
    asyncio.run(main())
