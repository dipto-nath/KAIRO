import React from 'react';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export const Logo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="var(--color-signal)" />
    <path d="M10 22L16 10L22 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const KairoMark = ({ size = 40, color = 'white' }: { size?: number, color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 28L20 12L28 28" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 23H25" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StatusDot = ({ status = 'online', size = 6 }: { status?: 'online' | 'offline' | 'warning', size?: number }) => {
  const color = status === 'online' ? 'var(--color-success)' : status === 'warning' ? 'var(--color-warning)' : 'var(--color-kairo-muted)';
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow: status === 'online' ? `0 0 6px ${color}` : 'none'
    }} />
  );
};

export const PulseRing = ({ size = 8 }: { size?: number }) => {
  return (
    <div className="pulse-ring" style={{ width: size, height: size }} />
  );
};

export const ArrowRightIcon = ({ size = 20, style }: { size?: number, style?: React.CSSProperties }) => <ArrowRight size={size} style={style} />;
export const ShieldIcon = ({ size = 14, style }: { size?: number, style?: React.CSSProperties }) => <Shield size={size} style={style} />;
export const ZapIcon = ({ size = 14, style }: { size?: number, style?: React.CSSProperties }) => <Zap size={size} style={style} />;
