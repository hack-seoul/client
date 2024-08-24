import React from 'react';

import Layout from '@/components/Layout.tsx';
// import Menu from '@/components/Menu.tsx';
import VerticalSlider from '@/components/Slide';
import SlideItem from '@/components/SlideItem';

export const ShowPangPage: React.FC = () => {
  // 원하는 슬라이드 아이템의 개수를 정의합니다.
  const numberOfSlides = 5;

  // SlideItem 컴포넌트를 여러 개 포함하는 배열을 생성합니다.
  const slides = Array(numberOfSlides)
    .fill(null)
    .map((_, index) => <SlideItem key={index} />);

  return (
    <Layout>
      <VerticalSlider slides={slides} />
      {/* <Menu /> */}
    </Layout>
  );
};
