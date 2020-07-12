const fs = require('fs'); //libreria de node


let listarTabla = (base, limite = 10) => { //valores por defecto en los parametros
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base (${base}) introducida no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite (${limite}) introducido no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ base *i} \n`);
        }
        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} introducido no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ base *i} \n`);
        }

        fs.writeFile(`tablas_multiplicar/tabla-del-${base}-al-${ limite}`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-del-${base}-al-${ limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};