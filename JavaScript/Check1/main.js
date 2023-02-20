let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(value) {
    return value % 2 === 0;
}
let filtered = numbers.filter(isEven);
console.log(filtered+ `は偶数です`);



class Car{
    constructor(gas,num){
        this.gas = gas;
        this.num = num;
    }
    //「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数
    getNumGas(){
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です。`);
    }
}
let kuruma= new Car( '1','5');
kuruma.getNumGas();
