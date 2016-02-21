import {on, map, stream} from 'flyd';

const events$ = stream();
const transform$ = map((e) => `Hello, ${e.data}`, events$)

self.onmessage = events$;
on(self.postMessage.bind(self), transform$);
