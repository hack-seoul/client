import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Menu from '@/components/Menu.tsx';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex w="100%" maxW="560px" h="100dvh" mx="auto" px="24px" pb="60px">
      {children}
      <Menu />
    </Flex>
  );
};

export default Layout;
