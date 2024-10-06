import { availableParallelism } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const cpusCount = availableParallelism();
const dir = dirname(fileURLToPath(import.meta.url));
const fileName = 'worker.js';
const filePath = join(dir, fileName);

const performCalculations = async () => {
    const createWorker = (j) => {
        return new Promise((resolve) => {
        const worker = new Worker(filePath, { workerData: j });
        worker.on('message', (msg) => {
            resolve({ status: 'resolved', data: `${msg}` });
        });
        worker.on('error', () => {
            resolve({ status: 'error', data: null });
        })
        });
    };
    const workers = [];
    for (let i = 0, j = 10; i < cpusCount; i += 1, j += 1) {
        workers.push(createWorker(j));
    };
    console.log(await Promise.all(workers));
}

await performCalculations();