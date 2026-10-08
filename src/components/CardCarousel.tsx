import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardCarouselProps {
  images: string[];
  altTitle: string;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({ images, altTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());
  const [loadedUrls, setLoadedUrls] = useState<Set<string>>(new Set());

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Filter out any image URL that failed to load
  const validImages = (images || []).filter((url) => url && !failedUrls.has(url));

  if (validImages.length === 0) {
    return (
      <div className="w-full h-52 sm:h-60 bg-gradient-to-tr from-rose-100/80 via-rose-50 to-pink-100 flex flex-col items-center justify-center text-rose-800/80 text-xs gap-2 rounded-t-2xl border-b border-rose-100 select-none p-4 text-center">
        <div className="w-10 h-10 rounded-full bg-white/80 shadow-xs flex items-center justify-center text-[#E63946]">
          <ImageIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-800">{altTitle}</span>
        <span className="text-[11px] text-gray-500">Fotografías verificadas del local</span>
      </div>
    );
  }

  const safeIndex = currentIndex >= validImages.length ? 0 : currentIndex;
  const currentImageUrl = validImages[safeIndex];
  const isCurrentLoaded = loadedUrls.has(currentImageUrl);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (url: string) => {
    setFailedUrls((prev) => {
      const next = new Set(prev);
      next.add(url);
      return next;
    });
  };

  const handleImageLoad = (url: string) => {
    setLoadedUrls((prev) => {
      const next = new Set(prev);
      next.add(url);
      return next;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      // Swiped left -> Next photo
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev photo
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full h-52 sm:h-60 overflow-hidden rounded-t-2xl bg-neutral-900 group select-none cursor-pointer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Loading Skeleton Indicator */}
      {!isCurrentLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100 animate-pulse flex items-center justify-center z-0">
          <ImageIcon className="w-7 h-7 text-rose-300" />
        </div>
      )}

      {/* Main Image with Animated Crossfade */}
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={currentImageUrl}
          src={currentImageUrl}
          alt={`${altTitle} - Foto ${safeIndex + 1}`}
          initial={{ opacity: 0.7, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onLoad={() => handleImageLoad(currentImageUrl)}
          onError={() => handleImageError(currentImageUrl)}
          className={`w-full h-full object-cover object-center relative z-1 transition-opacity duration-300 ${
            isCurrentLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
        />
      </AnimatePresence>

      {/* Subtle Dark Gradient Overlay for Badges readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none z-2" />

      {/* Photo Counter Badge */}
      <div className="absolute top-2.5 right-2.5 z-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/20 tracking-wider">
        {safeIndex + 1} / {validImages.length}
      </div>

      {/* Navigation Arrows for desktop/touch */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-3 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-gray-800 shadow-md backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-3 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-gray-800 shadow-md backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-3 flex items-center gap-1.5">
            {validImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Ver foto ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === safeIndex
                    ? 'w-4 bg-white shadow-sm'
                    : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
