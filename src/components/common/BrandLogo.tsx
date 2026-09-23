import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'dark' = for light backgrounds (dark navy text), 'light' = for dark backgrounds (white text)
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Sizing mapping for height
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const logoSrc = isLight 
    ? '/careerverse-logo-white.svg' 
    : '/careerverse-logo.svg';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="CareerVerse India - Guiding Careers. Building Futures."
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};
