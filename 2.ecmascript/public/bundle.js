"use strict";

// var, const e let

// operacoes em array

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (item, index) {
  numbers[index] = item * 2;
});
console.log(numbers);
var newNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log(newNumbers);
var otherNumbers = [1, 2, 3, 4, 5];
var total = otherNumbers.reduce(function (total, item) {
  return total + item;
});
console.log(total);
var todos = [{
  text: "lavar a louça",
  done: true
}, {
  text: "limpar a casa",
  done: false
}, {
  text: "lavar a roupa",
  done: true
}, {
  text: "ajuntar coco do cachorro",
  done: true
}, {
  text: "limpar o banheiro",
  done: false
}];
var doneTodos = todos.filter(function (todo) {
  return todo.done == true;
});
console.log(doneTodos);
var oneTodo = todos.find(function (todo) {
  return todo.text == "limpar o banheiro";
});
console.log(oneTodo);
var index = todos.findIndex(function (todo) {
  return todo.text == "limpar o banheiro";
});
console.log(index);
var cars = ["saveiro", "fiat", "bmw", "celta"];
var hasFusca = cars.some(function (car) {
  return car == 'fusca';
});
console.log(hasFusca);
var hasFusca2 = cars.some(function (car) {
  return car == 'fusca';
});
console.log(hasFusca2);
var anything = function anything() {
  return [1, 2, 3, 4, 5];
};
console.log(anything());

// parametro padrao

var SayHello = function SayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Denis";
  return console.log("ola " + name);
};
SayHello();

// template string

var showProduct = function showProduct(product, price) {
  console.log("O valor da ".concat(product, ", custa R$ ").concat(price));
};
showProduct("Camisa", 15);

// objetct short syntax

var name = "Pedro";
var age = 15;
var person = {
  name: name,
  age: age,
  alive: true
};
console.log(person);

// desestruturacao

var fruits = ['maça', 'banana', 'pera', 'abacate'];
var a = fruits[0],
  b = fruits[1],
  c = fruits[3];
console.log(a, b, c);
var city = {
  cidade: "Toledo",
  state: "Paraná",
  uf: "PR",
  adress: {
    street: "Rua da faculdade",
    number: "1113"
  }
};
var cidade = city.cidade,
  state = city.state,
  street = city.adress.street;
console.log(cidade, state, street);
var showState = function showState(_ref) {
  var cidade = _ref.cidade,
    state = _ref.state;
  console.log("A cidade ".concat(cidade, " \xE9 do estado ").concat(state));
};
showState(city);
