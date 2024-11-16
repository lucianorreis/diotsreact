
import { 
  Box,
  Button,
  Center,
  ChakraProvider,
  defaultSystem,
  Input
} from '@chakra-ui/react'

function App() {
  return (
     <ChakraProvider value={defaultSystem}>
      <Box minHeight='100vh' backgroundColor='#7132ee' padding='10px'>
        <Box bg='#f0f0f0' borderRadius='15px' padding='15px'>
          <Center><h1>Faça Login</h1></Center>
          <Input placeholder='email'/>
          <Input placeholder='password'/>
          <Center>
            <Button colorPalette='teal' size='lg' variant='surface' width='100%'>
            Login
          </Button>
          </Center>
        </Box>        
      </Box>
     </ChakraProvider>
  );
}

export default App;
