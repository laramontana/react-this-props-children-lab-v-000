import React from 'react';
import ReactDOM from 'react-dom';

import Invitation from './components/Invitation';
import ThemedTParty from './components/ThemedDecorations';

ReactDOM.render(
  <div>
    <Invitation>"Hey, you should totally come to this awesome party I'm throwing!"</Invitation>
    <ThemedParty theme="stars">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedParty>
  </div>,
  document.getElementById('global')
);
