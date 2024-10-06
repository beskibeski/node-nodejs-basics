import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const pathToDir = join(dir, dirName);
const errorNotExist = 'ENOENT';
const errorMessage = 'FS operation failed';

const list = async () => {
   readdir(pathToDir)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            if (err.code === errorNotExist) {
                throw new Error(errorMessage);
            }
        });
};

await list();