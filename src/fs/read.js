import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const dir = dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'fileToRead.txt';
const pathToFile = join(dir, dirName, fileName);
const errorNotExist = 'ENOENT';
const errorMessage = 'FS operation failed';

const read = async () => {
    readFile(pathToFile,  'utf-8')
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            if (err.code === errorNotExist) {
                throw new Error(errorMessage);
            }
        });
};

await read();