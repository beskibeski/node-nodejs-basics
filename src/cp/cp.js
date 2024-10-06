import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const dir = dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'script.js';
const filePath = join(dir, dirName, fileName);

const spawnChildProcess = async (args) => {
    fork(filePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--hostname', '--asd', '--ffffff']);
