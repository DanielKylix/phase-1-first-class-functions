function receivesAFunction(cb) {
    return cb ();
}

function returnsANamedFunction() {
    
    return function helloWorld() {
        return "Hello world"
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return "Hey there"
    }
}