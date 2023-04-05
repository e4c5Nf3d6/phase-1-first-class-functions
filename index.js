function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const checkmate = function () {
        console.log('There is no way out');
    }
    return checkmate
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('I have no name')
    }
}