import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type ItemProps = {
  id: string;
  title: string;
};

const VideoItem = ({ id, title }: ItemProps) => {
  return (
    <Flex
      as={Link}
      to={`/showpang?id=${id}`}
      cursor="pointer"
      pos="relative"
      w="100%"
      h="238px"
      borderRadius="16px"
      bg={`url(/images/${id}.png)`}
      bgSize="cover"
      bgPosition="center"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bg: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '16px',
      }}
    >
      <Text
        pos="absolute"
        width="calc(100% - 16px)"
        left="8px"
        bottom="8px"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        textShadow={`0 0 8px rgba(0, 0, 0, 0.5)`}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default VideoItem;
