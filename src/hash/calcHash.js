import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import { createHash } from 'crypto';

const dir = dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const filePath = join(dir, dirName, fileName);

const rs = createReadStream(filePath);
const hash = createHash('sha256').digest('hex');
const print = process.stdout;

const calculateHash = async () => {
    pipeline(rs, hash, print, (err) => {
        console.log(err);
    })
};

await calculateHash();