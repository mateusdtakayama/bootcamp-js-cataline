"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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

// rest pegar o resto

var numeros = [1, 2, 3, 4, 5];
var first = numeros[0],
  second = numeros[1],
  rest = numeros.slice(2);
console.log(first, second, rest);
var carro = {
  marca: "bmw",
  ano: 2013,
  dono: "José"
};
var ano = carro.ano,
  resto = _objectWithoutProperties(carro, ["ano"]);
console.log(ano, resto);
var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return params.reduce(function (total, next) {
    return total + next;
  });
};
console.log(sum(5, 10, 15, 20));

// Spread despejar em algum lugar

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [6, 7, 8, 9, 10];
var numbers3 = [].concat(numbers1, numbers2);
console.log(numbers3);
var carro2 = _objectSpread(_objectSpread({}, carro), {}, {
  marca: "palio"
});
console.log(carro2);
