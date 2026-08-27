import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, X, Maximize2, Move } from 'lucide-react';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  alt: string;
}

export const ImageLightbox: React.FC = () => {
  const [state, setState] = useState<LightboxState>({
    isOpen: false,
    src: '',
    title: '',
    alt: '',
  });

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Touch tracking for pinch-to-zoom & double tap
  const touchDistanceRef = useRef<number | null>(null);
  const initialScaleRef = useRef<number>(1);
  const lastTapRef = useRef<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Listen for global open-lightbox events from any component (Astro or React)
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ src: string; title?: string; alt?: string }>;
      if (customEvent.detail?.src) {
        setState({
          isOpen: true,
          src: customEvent.detail.src,
          title: customEvent.detail.title || 'Xem ảnh thực tế',
          alt: customEvent.detail.alt || 'Chi tiết giao diện ZTKS',
        });
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('open-lightbox', handleOpen);
    return () => window.removeEventListener('open-lightbox', handleOpen);
  }, []);

  const handleClose = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!state.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === '+' || e.key === '=') {
        setScale((s) => Math.min(s + 0.25, 3));
      } else if (e.key === '-' || e.key === '_') {
        setScale((s) => Math.max(s - 0.25, 0.5));
      } else if (e.key === '0') {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [state.isOpen, handleClose]);

  // Zoom handlers
  const handleZoomIn = () => setScale((s) => Math.min(s + 0.25, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((s) => Math.min(s + 0.15, 3));
    } else {
      setScale((s) => Math.max(s - 0.15, 0.5));
    }
  };

  // Mouse drag pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Mobile Touch Gestures: Pan, Pinch-to-zoom, Double-tap
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Check double tap
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        // Double tap toggle zoom
        if (scale > 1) {
          handleReset();
        } else {
          setScale(2);
        }
      }
      lastTapRef.current = now;

      if (scale > 1) {
        setIsDragging(true);
        setDragStart({
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y,
        });
      }
    } else if (e.touches.length === 2) {
      // Pinch start
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
      touchDistanceRef.current = distance;
      initialScaleRef.current = scale;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    } else if (e.touches.length === 2 && touchDistanceRef.current !== null) {
      // Pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
      const ratio = currentDistance / touchDistanceRef.current;
      const newScale = Math.min(Math.max(initialScaleRef.current * ratio, 0.75), 3.5);
      setScale(newScale);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchDistanceRef.current = null;
  };

  if (!state.isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md animate-in fade-in duration-200 select-none touch-none"
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0d0f17]/95 border-b border-[#232734] flex items-center justify-between z-10">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
          <div className="p-1.5 rounded-md bg-[#171a23] border border-[#282d3d] text-slate-400 shrink-0">
            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">{state.title}</h4>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block">Cuộn chuột hoặc chạm 2 lần để zoom</p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="flex items-center bg-[#171a23] border border-[#282d3d] rounded-lg p-0.5 text-xs text-slate-300">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
              className="p-2 sm:p-1.5 hover:text-white hover:bg-[#232734] active:bg-[#2e3446] rounded transition-colors disabled:opacity-40 disabled:hover:bg-transparent"
              title="Thu nhỏ (-)"
              aria-label="Thu nhỏ"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-1.5 sm:px-2.5 font-mono font-medium text-[11px] min-w-[42px] sm:min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="p-2 sm:p-1.5 hover:text-white hover:bg-[#232734] active:bg-[#2e3446] rounded transition-colors disabled:opacity-40 disabled:hover:bg-transparent"
              title="Phóng to (+)"
              aria-label="Phóng to"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-2 sm:p-1.5 hover:text-white hover:bg-[#232734] active:bg-[#2e3446] rounded transition-colors border-l border-[#282d3d]"
              title="Đặt lại kích thước (0)"
              aria-label="Đặt lại kích thước"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleClose}
            className="p-2 sm:p-2 text-slate-300 hover:text-white bg-[#171a23] hover:bg-red-500/20 active:bg-red-500/30 hover:border-red-500/40 border border-[#282d3d] rounded-lg transition-all"
            title="Đóng (Esc)"
            aria-label="Đóng xem ảnh"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Image Stage - Clicking outside the image closes modal */}
      <div
        className={`flex-1 w-full flex items-center justify-center p-2 sm:p-6 overflow-hidden ${
          scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-out'
        }`}
        onMouseDown={handleMouseDown}
        onClick={(e) => {
          // If clicking anywhere on the stage backdrop (not the image itself)
          if ((e.target as HTMLElement).tagName !== 'IMG' && !isDragging) {
            handleClose();
          }
        }}
      >
        <div
          className="transition-transform duration-75 ease-out relative"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={state.src}
            alt={state.alt}
            className="max-h-[75vh] max-w-[94vw] sm:max-w-[90vw] object-contain rounded-lg border border-[#232734] shadow-2xl pointer-events-auto cursor-default"
            draggable={false}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>

      {/* Bottom Hint Bar */}
      <div className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#090a0f]/90 border-t border-[#232734] flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Move className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span className="truncate">
            {scale > 1 ? 'Kéo ngón tay để di chuyển ảnh' : 'Chạm 2 lần để phóng to • Kéo 2 ngón tay để zoom'}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleClose}
            className="px-3 py-1.5 bg-[#171a23] hover:bg-[#232734] active:bg-[#2e3446] border border-[#282d3d] text-white rounded-md text-xs font-medium transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
