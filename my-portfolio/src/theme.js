import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
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
