//requires
const fs = require('fs');
const colors = require('colors');

const { resolve } = require('path');
const { rejects } = require('assert');

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor base introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        resolve(` ${data} `)
    });

}
crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)

            //console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}