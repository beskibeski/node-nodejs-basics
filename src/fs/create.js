import { writeFile } from 'fs/promises';
import { dirname, sep } from 'path';
import { fileURLToPath } from 'url';

const content = 'I am fresh and young';
const dir = dirname(fileURLToPath(import.meta.url));
const filesFolder = 'files';
const file = 'fresh.txt';
const errorExist = 'EEXIST';
const errorMessage = 'FS operation failed';

const create = async () => {
    writeFile(`${dir}${sep}${filesFolder}${sep}${file}`, content, { flag: 'ax' })
        .catch((err) => { if (err.code === errorExist) {
            throw new Error(errorMessage);
        }});
};

await create();