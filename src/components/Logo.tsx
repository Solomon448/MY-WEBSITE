import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-9 h-9 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-4xl sm:text-5xl',
  };

  const subtitleSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-[11px]',
  };

  return (
    <div className={`group inline-flex items-center gap-2.5 leading-none transition-all ${className}`}>
      {/* Icon Badge: SD Monogram matching attached brand asset */}
      <div
        className={`${iconSizes[size]} bg-[#043a35] border border-[#0eb0a4]/40 group-hover:border-[#0eb0a4] group-hover:shadow-[0_0_15px_rgba(14,176,164,0.3)] transition-all flex items-center justify-center shrink-0 p-1 relative overflow-hidden`}
      >
        <svg viewBox="0 0 256 256" className="w-full h-full drop-shadow-sm">
          {/* Interlocking S (Solid White) */}
          <path
            d="M115 72 C80 72, 60 88, 60 112 C60 134, 80 144, 108 150 C128 154, 140 159, 140 170 C140 182, 124 190, 102 190 C80 190, 62 180, 52 168 L36 188 C52 206, 78 218, 106 218 C150 218, 172 198, 172 168 C172 142, 150 132, 118 126 C100 122, 90 117, 90 108 C90 99, 102 94, 118 94 C136 94, 152 102, 162 112 L178 90 C162 78, 142 72, 115 72 Z"
            fill="#ffffff"
          />
          {/* Overlapping D (Outlined Mint/Sage) */}
          <path
            d="M115 95 C145 95, 185 108, 185 142 C185 176, 145 188, 115 188 C105 188, 102 180, 102 172 C102 164, 105 158, 115 158 C138 158, 158 152, 158 142 C158 132, 138 125, 115 125 C105 125, 102 118, 102 110 C102 102, 105 95, 115 95 Z"
            fill="none"
            stroke="#a4ddc7"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Top Right White Dot */}
          <circle cx="200" cy="66" r="14" fill="#ffffff" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center">
        <div className={`font-bebas font-extrabold ${textSizes[size]} text-white tracking-wider flex items-center gap-0.5`}>
          <span>ELIJ</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0eb0a4] to-[#25D366] group-hover:brightness-125 transition-all">
            DEV
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0eb0a4] ml-0.5 group-hover:scale-125 transition-transform" />
        </div>
      </div>
    </div>
  );
};
