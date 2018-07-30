import './configure-rl';
import { createWorker } from '@bit/rl-js.apps.react.workers';
import standard from '@bit/rl-js.apps.react.workers/workers/standard';
import log from '@bit/rl-js.apps.react.workers/workers/log';
import echo from '@bit/rl-js.apps.react.workers/workers/echo';

const worker = createWorker({
  standard,
  log,
  echo,
});

export const dispatch = task => worker(task);
