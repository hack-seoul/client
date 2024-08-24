import React, { useState, useRef, useEffect, ReactNode } from 'react';
import './vertical.css';

interface VerticalSliderProps {
  slides: ReactNode[];
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (slideRef.current) {
      const { scrollTop, clientHeight } = slideRef.current;
      const newIndex = Math.round(scrollTop / clientHeight);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const slideElement = slideRef.current;
    if (slideElement) {
      slideElement.addEventListener('scroll', handleScroll);
      return () => slideElement.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]); // currentIndex를 의존성 배열에 추가

  return (
    <div className="vertical-slider" ref={slideRef}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          {slide}
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
