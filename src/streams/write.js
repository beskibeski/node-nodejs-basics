import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream';
import { createWriteStream } from 'fs';
import { stdin } from 'process';

const dir = dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'fileToWrite.txt';
const filePath = join(dir, dirName, fileName);
const ws = createWriteStream(filePath);
const rs = stdin;

const write = async () => {
    pipeline(rs, ws, (err) => {
        console.log(err);
    });
};

await write();