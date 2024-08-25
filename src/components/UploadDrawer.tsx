import { Button, Divider, Flex, Input, Select, Text } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'vaul';

type UploadDrawerProps = {
  children: ReactNode;
};

const UploadDrawer = ({ children }: UploadDrawerProps) => {
  const [name, setName] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [platform, setPlatform] = useState<string>('');

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Flex
          as={Drawer.Overlay}
          pos="fixed"
          left={0}
          top={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={10}
        />
        <Flex
          as={Drawer.Content}
          flexDir="column"
          pos="fixed"
          bottom={0}
          left={0}
          right={0}
          zIndex={15}
          bgColor="gray"
          borderTopLeftRadius="16px"
          borderTopRightRadius="16px"
          height="auto"
        >
          <Flex as={Drawer.Handle} bgColor="grayLight" mt="10px" />
          <Flex
            flexDir="column"
            w="100%"
            maxW="460px"
            mx="auto"
            px="24px"
            mt="24px"
          >
            <Text
              as={Drawer.Title}
              color="white"
              fontSize="24px"
              fontWeight={600}
            >
              Add New Video
            </Text>

            <Text
              as={Drawer.Description}
              color="grayLight"
              mt="4px"
              fontWeight="500"
              fontSize="14px"
            >
              Let's add a new shopping video
            </Text>

            <Divider h="1px" border="none" bgColor="border" mt="16px" />

            <Input
              mt="26px"
              w="100%"
              h="60px"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              bgColor="gray"
              borderColor="border !important"
              border="1px solid"
              borderRadius="8px"
              outline="none"
              _focus={{
                borderColor: 'grayLight !important',
                outline: 'none',
                boxShadow: 'none',
              }}
              _placeholder={{ color: 'grayLight' }}
            />
            <Input
              mt="26px"
              w="100%"
              h="60px"
              placeholder="Link"
              value={link}
              onChange={e => setLink(e.target.value)}
              bgColor="gray"
              borderColor="border !important"
              border="1px solid"
              borderRadius="8px"
              outline="none"
              _focus={{
                borderColor: 'grayLight !important',
                outline: 'none',
                boxShadow: 'none',
              }}
              _placeholder={{ color: 'grayLight' }}
            />
            <Select
              mt="26px"
              w="100%"
              h="60px"
              value={platform}
              onChange={e => setPlatform(e.target.value)}
              bgColor="gray"
              borderColor="border !important"
              border="1px solid"
              borderRadius="8px"
              outline="none"
              _focus={{
                borderColor: 'grayLight !important',
                outline: 'none',
                boxShadow: 'none',
              }}
              _invalid={{ color: 'grayLight' }}
              _disabled={{ color: 'grayLight' }}
            >
              <option
                value=""
                disabled
                style={{ color: 'red', fontWeight: 'bold' }}
              >
                Platform
              </option>
              <option value="instagram" style={{ color: 'black' }}>
                Instagram
              </option>
              <option value="youtube" style={{ color: 'black' }}>
                Youtube
              </option>
              <option value="tiktok" style={{ color: 'black' }}>
                Tiktok
              </option>
              <option value="xiaohongshu" style={{ color: 'black' }}>
                小紅書
              </option>
            </Select>

            <Drawer.Close asChild>
              <Button
                as={Link}
                to="/showpang?id=1"
                mt="26px"
                w="100%"
                h="56px"
                bgColor="button"
                border="none"
                borderRadius="8px"
                outline="none"
                mb="24px"
              >
                Upload Video
              </Button>
            </Drawer.Close>
          </Flex>
        </Flex>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default UploadDrawer;
