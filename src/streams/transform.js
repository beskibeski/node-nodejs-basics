import { pipeline, Transform } from 'node:stream';
import { stdin, stdout } from 'process';

const ws = stdout;
const rs = stdin;
const reverse = new Transform({
    transform(chunk, __, callback) {
        const reversed = chunk.toString().split('').reverse().join('');
        callback(null, `${reversed}\n`);
    }
});

const transform = async () => {
    pipeline(rs, reverse, ws, (err) => {
        console.log(err);
    });
};

await transform();