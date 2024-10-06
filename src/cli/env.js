const envObject = process.env;
let envString = '';
const prefix = 'RSS_';

const parseEnv = () => {
    Object.entries(envObject).forEach(([key, value]) => {
        if (key.slice(0, 4) === prefix) {
            envString = `${envString}${key}=${value}; `;
        }
    });
    console.log(envString.slice(0, -2));
};

parseEnv();