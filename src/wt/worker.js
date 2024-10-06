import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';

const WORKER_DATA_NUMBER = 10;
const filePath = fileURLToPath(import.meta.url);
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (isMainThread) {
        const worker = new Worker(filePath, {workerData: WORKER_DATA_NUMBER});
        worker.on('message', (msg) => {
        console.log(msg);
        })
    } else {
        const number = workerData;
        parentPort.postMessage((nthFibonacci(number)));
    }
}

sendResult();