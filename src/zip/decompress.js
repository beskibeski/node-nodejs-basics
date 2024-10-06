import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const dirPath = dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'fileToCompress.txt';
const fileArchivedName = 'archive.gz';
const filePath = join(dirPath, dirName, fileName);
const fileArchivedPath = join(dirPath, dirName, fileArchivedName);

const rs = createReadStream(fileArchivedPath);
const gunzip = createGunzip();
const ws = createWriteStream(filePath);

const decompress = async () => {
    pipeline(rs, gunzip, ws, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
          }
    })
};

await decompress();