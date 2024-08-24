import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      w="100%"
      h="56px"
      as="header"
      bgColor="background"
      zIndex={10}
      userSelect="none"
    >
      <Flex
        as={Link}
        to="/"
        w="100%"
        maxW="460px"
        h="100%"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Image src="/images/logo.png" alt="logo" h="24px" />
      </Flex>
    </Flex>
  );
};

export default Header;
