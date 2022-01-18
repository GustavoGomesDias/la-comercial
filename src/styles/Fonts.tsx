import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Nexa';
      src: @import('../../assets/fonts/NexaRegular.otf') format("opentype");
      font-style: normal;
      font-weight: normal;
    }
    
    @font-face {
      font-family: 'Nexa';
      src: url('../../assets/fonts/Nexa-Bold.otf') format("opentype");
      font-style: normal;
      font-weight: bold;
    }
    
    @font-face {
      font-family: 'Nexa';
      src: url('../../assets/fonts/Nexa-Bold-Italic.otf') format("opentype");
      font-style: italic;
      font-weight: bold;
    }
    
    @font-face {
      font-family: 'Nexa';
      src: url('../../assets/fonts/Nexa-Ligth.otf') format("opentype");
      font-style: normal;
      font-weight: lighter;
    }
    @font-face {
      font-family: 'Nexa';
      src: url('../../assets/fonts/Nexa-Ligth-Italic.otf') format("opentype");
      font-style: italic;
      font-weight: lighter;
    }
      `}
  />
);

export default Fonts;