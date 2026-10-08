import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import type { Review } from '../types/restaurant';

interface ReviewItemProps {
  review: Review;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className="py-2.5 border-b border-rose-50 last:border-none">
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-900 tracking-tight">
            {review.author}
          </span>
          <span className="flex items-center text-[10px] text-gray-400 font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-0.5" />
            Verificado
          </span>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex text-[#E63946]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < review.rating ? 'fill-[#E63946]' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400">{review.date}</span>
        </div>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed font-normal">
        "{review.comment}"
      </p>
    </div>
  );
};
