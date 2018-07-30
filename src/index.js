// Babel is a transpiler that allows fancy JavaScript features to
// run in any browser. This polyfill MUST be included to support
// certain features used by imported components.
import 'babel-polyfill';

// React dependencies. You need these!
import React from 'react';
import ReactDOM from 'react-dom';

// Used by create-react-app. See the file for more info.
import registerServiceWorker from './register-service-worker';

// The webapp container. This allows you to run multiple experiments in parallel,
// and manages web-worker/thread creation for you.
import Container from '@bit/rl-js.apps.react.container';

// The default apps provided by rl-js:
// Hyperparameter Search, Learning Curve, and Sensitivity Analysis.
// You can replace these with your own, add additions apps, or not use these at all!
import * as apps from '@bit/rl-js.apps.react.apps';


// workerize-loader tells webpack to load the worker as a special type of web worker.
// worker is a factory/constructor that the app calls to generate as many threads as desired.
// configure-worker.js is a file that sets up the standard worker used by the default rl-js apps.
// Similar to the apps, you can add custom tasks to the worker, to support all kinds of behavior.
import worker from 'workerize-loader!./configure-worker'; // eslint-disable-line 

// configure-rj.js loads the configured Agent and Environment suites into the global @rl-js/config scope.
// This allows different components to access loaded Agents and Environments.
// The file is external because it must be required by the Worker as well,
// so that the UI and the Worker threads will agree which suites are loaded.
import './configure-rl';


// Render the Container React component into the page.
// This is the only place where ReactDOM.render should be called:
// everthing else should be inside of Container.
ReactDOM.render(
  <Container apps={Object.values(apps)} worker={worker} />, document.getElementById('root'),
);

// Used by create-react-app.
registerServiceWorker();
