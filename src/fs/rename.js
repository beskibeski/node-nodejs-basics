import { rename as newname, access } from 'fs/promises';
import { sep, dirname } from 'path';
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const path = `${dir}${sep}files${sep}`;
const filename = `${path}wrongFilename.txt`;
const newFilename = `${path}properFilename.md`;
const errorNotExist = 'ENOENT';
const errorExist = 'EEXIST';
const errorMessage = 'FS operation failed';

const rename = async () => {
    access(filename)
        .then(() => {
            newname(filename, newFilename)
                .catch((err) => {
                    if (err.code === errorExist) {
                        throw new Error(errorMessage);
                    }
                })
        })
        .catch((err) => {
            if (err.code === errorNotExist) {
                throw new Error(errorMessage);
            }
        });
};

await rename();