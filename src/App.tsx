import { Box, Center, Input, Button, Text } from '@chakra-ui/react'
import Layout from './components/Layout/Layout'
import { login } from './services/login';


function App() {
  return (
    <>
      <Layout>
        <Box boxShadow={'Dark lg'} backgroundColor={'#ffff'} borderRadius={'10'} flex={'grid'}>
          <Center>
            <Text fontSize='30px' color='#9413dc'>
              Faça o Login
            </Text>

          </Center>
          <Center flexDirection={"column"} width={'md'}>
            <Input type='email' placeholder='Email' size='md' w={'80%'} />
            <Input type='password' placeholder='Senha' size='md' w={'80%'} mt={'15'} />
          </Center>
          <Center>
            <Button onClick={login} colorScheme='teal' size='md' width={'80%'} mt='10' mb='5'  >
              Button
            </Button>
          </Center>

        </Box>

      </Layout>



    </>

  );
}

export default App;
