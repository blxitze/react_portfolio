import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  styles: {
    global: {
      html: {
        margin: 0,
        padding: 0,
      },
      body: {
        margin: 0,
        padding: 0,
        bg: 'black',
        color: 'whiteAlpha.900',
      },
    },
  },
});


export default customTheme;
