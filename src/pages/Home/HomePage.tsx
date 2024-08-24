import { Box, Flex, Input } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout.tsx';

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (search.trim() !== '') navigate(`/search?query=${search}`);
  };

  return (
    <Layout>
      <Flex
        w="100%"
        h="100dvh"
        mb="-70px"
        mt="-56px"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="form" position="relative" onSubmit={handleSearch}>
          <Input
            w="264px"
            h="70px"
            pl="48px"
            borderRadius="16px"
            bgColor="gray"
            borderColor="border !important"
            border="1px solid"
            outline="none"
            _focus={{
              borderColor: 'grayLight !important',
              outline: 'none',
              boxShadow: 'none',
            }}
            placeholder="Search"
            _placeholder={{ color: 'grayLight' }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Box
            as="span"
            pos="absolute"
            top="50%"
            left="0"
            ml="16px"
            zIndex={1}
            color="grayLight"
            transform="translateY(-50%)"
            className="material-symbols-outlined"
          >
            search
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default HomePage;
