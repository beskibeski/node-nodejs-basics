import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const dir = dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'fileToRead.txt';
const filePath = join(dir, dirName, fileName);
const rs = createReadStream(filePath);
const print = stdout;

const read = async () => {
   pipeline(rs, print, (err) => {
        console.log(err);
   });
};

await read();