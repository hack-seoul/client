import { Box, Flex, Text } from '@chakra-ui/react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import UploadDrawer from '@/components/UploadDrawer.tsx';

const Menu = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const handleClick = () => {
    // 새 탭에서 쿠팡 홈페이지 열기
    window.open('https://www.coupang.com', '_blank', 'noopener,noreferrer');

    // 또는 현재 페이지에서 쿠팡 홈페이지로 이동
    // window.location.href = "https://www.coupang.com";
  };

  return (
    <Box pos="fixed" w="100%" left={0} bottom={0} bgColor="background">
      <Flex
        w="100%"
        maxW="460px"
        h="60px"
        px="42px"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          as={Link}
          to="/"
          flexDir="column"
          alignItems="center"
          userSelect="none"
        >
          <span
            className={clsx(
              'material-symbols-outlined',
              pathname === '/' && 'fill',
            )}
          >
            home
          </span>
          <Text fontSize="11px">Home</Text>
        </Flex>

        <Flex
          as={Link}
          to={isSearchPage ? '/' : '/search'}
          flexDir="column"
          alignItems="center"
          userSelect="none"
        >
          <span
            className={clsx(
              'material-symbols-outlined',
              isSearchPage && 'fill',
            )}
          >
            search
          </span>
          <Text fontSize="11px">Search</Text>
        </Flex>

        <UploadDrawer>
          <Flex
            as="button"
            flexDir="column"
            alignItems="center"
            userSelect="none"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '28px' }}
            >
              add_circle
            </span>
          </Flex>
        </UploadDrawer>

        <Flex
          as="button"
          flexDir="column"
          alignItems="center"
          userSelect="none"
          onClick={handleClick}
        >
          <span className="material-symbols-outlined">rocket</span>
          <Text fontSize="11px">Coupang</Text>
        </Flex>

        <Flex
          as={Link}
          flexDir="column"
          alignItems="center"
          userSelect="none"
          onClick={handleClick}
        >
          <span className={clsx('material-symbols-outlined')}>
            account_circle
          </span>
          <Text fontSize="11px">Me</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;
