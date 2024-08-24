import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Header from '@/components/Header.tsx';
import Menu from '@/components/Menu.tsx';

type LayoutProps = {
  children: ReactNode;
  inlinePadding?: boolean;
  showHeader?: boolean;
};

const Layout = ({
  children,
  inlinePadding = true,
  showHeader = true,
}: LayoutProps) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      maxW="460px"
      mx="auto"
      pt={showHeader ? '56px' : 0}
      px={inlinePadding ? '24px' : 0}
      pb="60px"
    >
      {showHeader && <Header />}
      {children}
      <Menu />
    </Flex>
  );
};

export default Layout;
