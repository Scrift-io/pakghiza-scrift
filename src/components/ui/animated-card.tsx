
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverScale?: boolean;
  hoverShadow?: boolean;
  hoverTranslate?: boolean;
  className?: string;
}

export const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ 
    children, 
    className, 
    hoverScale = true, 
    hoverShadow = true, 
    hoverTranslate = true,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-300 ease-out",
          hoverScale && "hover:scale-105",
          hoverShadow && "hover:shadow-xl",
          hoverTranslate && "hover:-translate-y-2",
          "cursor-pointer group",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";
