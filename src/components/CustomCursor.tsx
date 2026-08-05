import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'view' | 'click'>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const interactiveTarget = target.closest('button, a, [role="button"], input, textarea, select, .cursor-pointer');

      if (cursorTarget) {
        const customState = cursorTarget.getAttribute('data-cursor');
        const customText = cursorTarget.getAttribute('data-cursor-text');
        
        if (customState === 'view') {
          setCursorState('view');
          setCursorText(customText || 'VIEW');
        } else if (customState === 'explore') {
          setCursorState('view');
          setCursorText(customText || 'EXPLORE');
        } else {
          setCursorState('hover');
          setCursorText('');
        }
      } else if (interactiveTarget) {
        setCursorState('hover');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseDown = () => setCursorState((prev) => (prev === 'view' ? 'view' : 'click'));
    const handleMouseUp = () => setCursorState('default');
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp trailing dot
  useEffect(() => {
    let animationFrameId: number;

    const followMouse = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        };
      });
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Central Precision Pointer Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-[#034A46] border border-white/60 transition-transform duration-75 shadow-[0_0_12px_rgba(3,74,70,0.8)]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
          opacity: cursorState === 'view' ? 0 : 1,
        }}
      />

      {/* Larger Smooth Outer Follower Ring / Interactive Badge */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full flex items-center justify-center font-bold tracking-wider text-xs uppercase font-mono transition-all duration-300 ease-out ${
          cursorState === 'view'
            ? 'bg-[#034A46] text-white border-2 border-emerald-400 shadow-[0_0_25px_rgba(3,74,70,0.8)] scale-100 opacity-100'
            : cursorState === 'hover'
            ? 'bg-[#034A46]/20 border border-[#034A46] shadow-[0_0_20px_rgba(3,74,70,0.4)] backdrop-blur-[2px] scale-125'
            : cursorState === 'click'
            ? 'bg-[#034A46]/40 border border-[#034A46] scale-75'
            : 'border border-[#034A46]/60 bg-[#034A46]/5 scale-100'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: cursorState === 'view' ? '68px' : '36px',
          height: cursorState === 'view' ? '68px' : '36px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {cursorState === 'view' && (
          <span className="text-[11px] font-extrabold tracking-widest animate-pulse">
            {cursorText || 'VIEW'}
          </span>
        )}
      </div>
    </>
  );
};
