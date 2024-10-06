import { access, cp, mkdir } from 'fs/promises';
import { dirname, sep } from 'path';
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const filesFolder = `${dir}${sep}files`;
const filesFolderToCopy = `${dir}${sep}files_copy`;
const errorExist = 'EEXIST';
const errorNotExist = 'ENOENT';
const errorMessage = 'FS operation failed';

const copy = async () => {
    access(filesFolder)
        .then(() => {
            mkdir(filesFolderToCopy)
                .then(() => {
                    cp(filesFolder, filesFolderToCopy, { recursive: true});
                })
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

await copy();
