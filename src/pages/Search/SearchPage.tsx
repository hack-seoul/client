import { Box, Flex, Grid, Input, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FormEvent, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout.tsx';
import { SEARCH } from '@/constants/temp.ts';
import VideoItem from '@/pages/Search/VideoItem.tsx';

const SearchPage = () => {
  const { search: searchParams } = useLocation();
  const navigate = useNavigate();
  const queryParams: URLSearchParams = new URLSearchParams(searchParams);

  const queryValue: string | null = queryParams.get('query');

  const [search, setSearch] = useState<string>(queryValue || '');
  const [loading, setLoading] = useState<boolean>(true);

  const handleSearch = (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (search.trim() !== '') navigate(`/search?query=${search}`);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Box
        as="form"
        w="100%"
        h="60px"
        position="relative"
        onSubmit={handleSearch}
      >
        <Input
          w="100%"
          h="100%"
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

      {loading ? (
        <Flex w="100%" justifyContent="center" mt="24px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Grid gap="24px" mt="24px" gridTemplateColumns="1fr 1fr">
          {SEARCH.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VideoItem id={item.id} title={item.title} />
            </motion.div>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default SearchPage;
