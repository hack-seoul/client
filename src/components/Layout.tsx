import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex w="100%" maxW="560px" mx="auto">
      {children}
    </Flex>
  );
};

export default Layout;
