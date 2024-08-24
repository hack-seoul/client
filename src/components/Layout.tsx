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
      flexDir="column"
      w="100%"
      maxW="460px"
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
