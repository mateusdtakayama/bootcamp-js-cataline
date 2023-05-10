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
