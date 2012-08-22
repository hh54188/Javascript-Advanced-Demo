var worker1 = new Worker('js/process.js');
var worker2 = new Worker('js/process.js');

worker1.addEventListener('message', function (e) {
    console.log('post message 1 in main: ', e.data);
}, false);

worker2.addEventListener('message', function (e) {
    console.log('post message 2 in main: ', e.data);
}, false);

worker1.postMessage('hello world 01');
worker2.postMessage('hello world 02');