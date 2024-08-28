import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponent } from './src/concepts/environments';
import { callbacksComponent } from './src/concepts/callbacks';
import { promiseComponent } from './src/concepts/promises';
import { promiseRaceComponent } from './src/concepts/promise-race';
import { asyncComponent } from './src/concepts/async';
import { asyncAwaitComponent } from './src/concepts/async-await';
import { asyncAwaitNoSecComponent } from './src/concepts/async-await-no-sec';
import { forAwaitComponent } from './src/concepts/for-await';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>
  </div>
`
;

const element = document.querySelector('.card');

// environmentsComponent(element );
// callbacksComponent( element );
// promiseComponent( element );
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwaitNoSecComponent(element);
forAwaitComponent(element);