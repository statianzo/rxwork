import {on, map, stream} from 'flyd';

const worker$ = stream();
const worker = new Worker('/out/worker.js');
const events$ = stream();
const messages$ = map((e) => e.data, events$);

on(worker.postMessage.bind(worker), worker$);
worker.onmessage = events$;
on(console.log.bind(console), messages$);

worker$('World');
worker$('Everybody');
worker$('Anybody?');
