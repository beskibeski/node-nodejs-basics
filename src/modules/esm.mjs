import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFile } from 'fs/promises';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const dir = dirname(fileURLToPath(import.meta.url));
const file = fileURLToPath(import.meta.url);
const files = 'files';

const random = Math.random();

let unknownObject;

const a = JSON.parse(
    await readFile(join(dir, files, 'a.json'))
);

const b = JSON.parse(
    await readFile(join(dir, files, 'b.json'))
);


if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${file}`);
console.log(`Path to current directory is ${dir}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
