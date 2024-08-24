import Layout from '@/components/Layout.tsx';
import VerticalSlider from '@/components/Slide';
import { SEARCH } from '@/constants/temp.ts';

import SlideItem from './SlideItem.tsx';

const ShowPangPage = () => {
  const slides = SEARCH.map(item => (
    <SlideItem
      key={item.id}
      title={item.title}
      videoUrl={`/videos/${item.id}.mp4`}
      productUrl={item.url}
    />
  ));

  return (
    <Layout inlinePadding={false} showHeader={false}>
      <VerticalSlider slides={slides} />
    </Layout>
  );
};

export default ShowPangPage;
