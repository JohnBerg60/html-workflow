import {Calculator} from './module/calculator.js'

function log(s: string): void {
    console.log(s);
}

log('testje');

let calculator = new Calculator();
calculator.add(6);

console.log(calculator.value);