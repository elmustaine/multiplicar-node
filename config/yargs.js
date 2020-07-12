const opts = {
    base: {
        demand: true, //obligatorio true
        alias: 'b' // node app listar -b 6
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    /** 1er comando listar - 2o param explicación - 3er param configuracion de flags  */
    // Ejecutar        node app listar --base 5
    // Ejecutar alias  node app listar -b 6
    // Ejecutar        node app listar --help
    // Ejecutar        node app --help
    // Ejecutar        node app listar --limite 20 -b 2
    // Ejecutar        node app listar --limite -b 2
    // Ejecutar        node app listar -b 2

.command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
};