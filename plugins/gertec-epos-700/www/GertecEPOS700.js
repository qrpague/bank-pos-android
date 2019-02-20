var exec = require('cordova/exec');

exports.imprimir = function (args, successCallback, errorCallback) {
    exec(
        successCallback,
        errorCallback,
        'GertecEPOS700', /* Nome da Classe Java */
        'imprimir', /* Nome do método a ser executado*/
        [args]); /* Argumentos a serem enviados */
};


exports.iniciarContexto = function (args, successCallback, errorCallback) {
    exec(
        successCallback,
        errorCallback,
        'GertecEPOS700',
        'iniciarContexto',
        [args]);
};

