const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //libreria de node
const argv = require('./config/yargs').argv;
// const argv = require('yargs')
//     /** 1er comando listar - 2o param explicación - 3er param configuracion de flags  */
//     // Ejecutar        node app listar --base 5
//     // Ejecutar alias  node app listar -b 6
//     // Ejecutar        node app listar --help
//     // Ejecutar        node app --help
//     // Ejecutar        node app listar --limite 20 -b 2
//     // Ejecutar        node app listar --limite -b 2
//     // Ejecutar        node app listar -b 2

// .command('listar', 'imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true, //obligatorio true
//             alias: 'b' // node app listar -b 6
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true, //obligatorio true
//             alias: 'b' // node app listar -b 6
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;


let comando = argv._[0];

console.log(comando);

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log(`argv.base ${argv.base}`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv);  // imprime los argumentos pasados por consola

/** Primera forma */
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

/** Con yargs */
// console.log(argv);
// console.log(argv.base);
// console.log(argv.limite);