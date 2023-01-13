import logo from './logo.svg';
import './App.css';
import { Container } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Stack, HStack, VStack } from '@chakra-ui/react'
import FirstPage from './Components/firstPage.';
function App() {
  return (
    <div className="App">
      <FirstPage/>
    </div>
  );
}

export default App;
