import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Menu from '@/components/Menu.tsx';

type LayoutProps = {
  children: ReactNode;
  inlinePadding?: boolean;
};

const Layout = ({ children, inlinePadding = true }: LayoutProps) => {
  return (
    <Flex
      w="100%"
      maxW="560px"
      h="100dvh"
      mx="auto"
      px={inlinePadding ? '24px' : 0}
      pb="60px"
    >
      {children}
      <Menu />
    </Flex>
  );
};

export default Layout;
