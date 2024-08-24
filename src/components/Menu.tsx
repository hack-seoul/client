import { Box, Flex, Text } from '@chakra-ui/react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Box pos="fixed" w="100%" left={0} bottom={0}>
      <Flex
        w="100%"
        maxW="560px"
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
          as="button"
          flexDir="column"
          alignItems="center"
          userSelect="none"
        >
          <span
            className={clsx(
              'material-symbols-outlined',
              pathname === '/search' && 'fill',
            )}
          >
            search
          </span>
          <Text fontSize="11px">Search</Text>
        </Flex>

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

        <Flex
          as="button"
          flexDir="column"
          alignItems="center"
          userSelect="none"
        >
          <span className="material-symbols-outlined">rocket</span>
          <Text fontSize="11px">Coupang</Text>
        </Flex>

        <Flex
          as={Link}
          to="/profile"
          flexDir="column"
          alignItems="center"
          userSelect="none"
        >
          <span
            className={clsx(
              'material-symbols-outlined',
              pathname === '/profile' && 'fill',
            )}
          >
            account_circle
          </span>
          <Text fontSize="11px">Me</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;
