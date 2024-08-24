import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

type SlideItemProps = {
  videoUrl: string;
  title: string;
  productUrl: string;
};

const SlideItem = ({ videoUrl, title, productUrl }: SlideItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const updateProgress = () => {
      if (video && video.duration) {
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(currentProgress);
      }
    };

    if (video) video.addEventListener('timeupdate', updateProgress);

    return () => {
      if (video) video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  return (
    <Flex
      direction="column"
      h="100vh"
      w="100vw"
      overflow="hidden"
      pos="relative"
    >
      <Box
        as="video"
        ref={videoRef}
        src={videoUrl}
        autoPlay
        loop
        muted
        objectFit="cover"
        h="100%"
        w="100%"
      />

      <Box
        position="absolute"
        bottom="60px"
        left="0"
        height="2px"
        width="100%"
        bg="rgba(255,255,255,0.3)"
        zIndex={9}
      />

      <Box
        position="absolute"
        bottom="60px"
        left="0"
        height="2px"
        width={`${progress}%`}
        bg="white"
        transition="width 0.1s ease-in-out"
        zIndex={10}
      />

      <Box
        position="absolute"
        bottom="60px"
        left="0"
        height="2px"
        width="100%"
        bg="linear-gradient(90deg, #FF00A0 0%, #FFC700 100%)"
      />

      <Text
        display="flex"
        gap="4px"
        as="a"
        pos="absolute"
        left="16px"
        bottom="72px"
        color="white"
        fontSize="16px"
        fontWeight="500"
        href={productUrl}
        target="_blank"
        textShadow="2px 2px 2px rgba(0,0,0,0.1)"
        alignItems="center"
      >
        <span className="material-symbols-outlined fill">play_arrow</span>
        <Box as="span">{title}</Box>
      </Text>

      <Flex
        pos="absolute"
        right="16px"
        bottom="88px"
        flexDir="column"
        gap="32px"
      >
        <Flex flexDir="column" gap="2px" alignItems="center">
          <span
            className="material-symbols-outlined"
            style={{
              color: 'white',
              textShadow: '2px 2px 2px rgba(0,0,0,0.1)',
            }}
          >
            thumb_up
          </span>
          <Text
            color="white"
            fontSize="12px"
            fontWeight="500"
            textShadow="2px 2px 2px rgba(0,0,0,0.1)"
          >
            Likes
          </Text>
        </Flex>

        <Flex flexDir="column" gap="2px" alignItems="center">
          <span
            className="material-symbols-outlined"
            style={{
              color: 'white',
              textShadow: '2px 2px 2px rgba(0,0,0,0.1)',
            }}
          >
            chat_bubble
          </span>
          <Text
            color="white"
            fontSize="12px"
            fontWeight="500"
            textShadow="2px 2px 2px rgba(0,0,0,0.1)"
          >
            Comment
          </Text>
        </Flex>

        <Flex flexDir="column" gap="2px" alignItems="center">
          <span
            className="material-symbols-outlined"
            style={{
              color: 'white',
              textShadow: '2px 2px 2px rgba(0,0,0,0.1)',
            }}
          >
            ios_share
          </span>
          <Text
            color="white"
            fontSize="12px"
            fontWeight="500"
            textShadow="2px 2px 2px rgba(0,0,0,0.1)"
          >
            Share
          </Text>
        </Flex>

        <Flex flexDir="column" gap="2px" alignItems="center">
          <span
            className="material-symbols-outlined"
            style={{ color: 'white' }}
          >
            more_horiz
          </span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SlideItem;
