import VerticalSlider from '@/components/Slide';

const slides = [
  <div key="1">슬라이드 1</div>,
  <div key="2">슬라이드 2</div>,
  <div key="3">슬라이드 3</div>,
];

export const ShortPangPage = () => {
  return <VerticalSlider slides={slides} />;
};
