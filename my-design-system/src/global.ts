import '@ionic/core';
import { setMode } from '@stencil/core';

setMode((elm: HTMLElement) => {
  if (elm && isIonicComponent(elm)) {
    return 'md'
  }

  // just look for the mode on body for now to keep this super simple as an example
  const bodyMode = document.body.getAttribute('mode');
  if (bodyMode) {
    return bodyMode;
  }

  // just fall back to our design systems default mode if a mode isn't provided
  return 'msb';
});

const isIonicComponent = (elm: HTMLElement) => elm.tagName.toLowerCase().startsWith('ion');
