import { rm } from 'fs/promises';
import { dirname, join } from  'path';
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const fileName = 'fileToRemove.txt';
const dirName = 'files';
const fullPathToFile = join(dir, dirName, fileName);
const errorNotExist = 'ENOENT';
const errorMessage = 'FS operation failed';

const remove = async () => {
    rm(fullPathToFile)
        .catch((err) => {
            if (err.code === errorNotExist) {
                throw new Error(errorMessage);
            }
    });
};

await remove();