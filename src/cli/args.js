import { argv } from 'process';

let newString = '';

const parseArgs = () => {
    argv.forEach((element, index) => {
        if (index > 1 && index % 2 === 0 && index < argv.length - 1) {
            newString = `${newString}${element} is ${argv[index + 1]}, `;
        }
    });
    console.log(newString.slice(0, -2));
};

parseArgs();