import React from 'react'

import { WrapItem ,   Wrap , ChakraProvider , Stack , Box , Center , Button, ButtonGroup , Flex} from '@chakra-ui/react'
const FirstPage = () => {
  return (
    <div>
<Box    borderBottom={'1px solid black'}    bg='white' w='100%' p={7} color='white'>
<Stack direction='row'  justifyContent={'space-between'} spacing={4} align='center'>
<Box  color = 'blue.700' fontSize={'2xl'}>
    Home  
</Box>

  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  
</Stack>
</Box>



<Box>
<Flex      direction='column'  >
    <Box    fontSize={'3xl'}   fontWeight={'extrabold'}   paddingBottom={'10px'}    color='blue.700' as='h1' >Agent Bulletins</Box>
    <Box  fontSize={'2xl'}   paddingBottom={'20px'}  >Lorem ipsum dolor sit amet consectetur adipisicing.</Box>
  </Flex>
    <Button      marginBottom={'10px'} size='lg' colorScheme='linkedin'>home</Button>

</Box>



<Box   alignItems={'center'} flexDirection={'column'}  display={'flex'}  justifyContent={'center'}    padding={' 40px 40px '}  borderRadius={'20px'}  bgColor={'blackAlpha.300'}   margin='auto'  maxW={'60%'} >
<Box        fontWeight={'extrabold'}  fontSize={'5xl'}     paddingBottom='30px'  as='h1'  w={'100%'}  bg={'whiteAlpha.500'} >Click Advantages:
</Box>


<Flex     justifyContent={'center'} >
<Wrap spacing='30px' align='center'>
  <WrapItem>
  <Button   display={'flex'}  colorScheme='linkedin'   size='lg'>
    Lorem ipsum dolor sit  
  </Button>
  </WrapItem>
  <Button  colorScheme='linkedin' marginRight={'10px'}  size='lg'>
Lorem ipsum dolor sit 
  </Button>
  <WrapItem>
  <Button colorScheme='linkedin' size='lg'>
Lorem ipsum dolor sit 
  </Button>
  </WrapItem>
  </Wrap>

</Flex>
<Flex     marginTop={'10px'}   justifyContent={'center'} >
<Wrap spacing='30px' align='center'>
  <WrapItem>
  <Button   display={'flex'}  colorScheme='linkedin'   size='lg'>
    Lorem ipsum dolor sit  
  </Button>
  </WrapItem>
  <Button  colorScheme='linkedin' marginRight={'10px'}  size='lg'>
Lorem ipsum dolor sit 
  </Button>
  </Wrap>

</Flex>

<Wrap spacing='30px' align='center'>
  <WrapItem>
  <Button    marginTop={'20px'}  colorScheme='linkedin'   size='lg'>
    Lorem ipsum dolor sit  
  </Button>
  </WrapItem>
  </Wrap>
</Box>

<Box>
    <Box   fontWeight={'extrabold'}   marginTop='30px' fontSize={'4xl'}    >Than For Your Understanding</Box>
    <Box  fontWeight={'extrabold'}  fontSize={'3xl'}    >Ahmed Hope you have happy and healthy Year</Box>
</Box>

    </div>
  )
}

export default FirstPage