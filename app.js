const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
// console.log(argv.base);
// return;
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log(`La tabla es: \n ${data}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: `, colors.green(archivo));
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        break;
}

// let base = '5';
// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];