var Person = function (name) {  
    this.name = name;
    this.hello = function () {
        return "Hello, My name is " + this.name + "!";
    }
}


var saltfactory = new Person('Lee');  
console.log(saltfactory.hello()); 