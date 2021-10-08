import { render } from 'react-dom';
import WebFont from 'webfontloader';

import App from './App';

WebFont.load({
  google: {
    families: ['Poppins', 'Droid Serif'],
  },
});

document.body.style.margin = '0';
document.body.style.overflowX = 'hidden';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
