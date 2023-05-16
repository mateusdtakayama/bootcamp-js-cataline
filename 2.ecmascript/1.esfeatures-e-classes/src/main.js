// var, const e let

// operacoes em array

const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(item, index){
    numbers[index] = item * 2
})

console.log(numbers)

const newNumbers = numbers.map(function(number){
    return number + 1
})

console.log(newNumbers)

const otherNumbers = [1, 2, 3, 4, 5]

const total = otherNumbers.reduce(function(total, item){
    return total + item
})

console.log(total)

const todos = [
    {text: "lavar a louça", done: true},
    {text: "limpar a casa", done: false},
    {text: "lavar a roupa", done: true},
    {text: "ajuntar coco do cachorro", done: true},
    {text: "limpar o banheiro", done: false},
]

const doneTodos = todos.filter(function(todo){
    return todo.done == true
})

console.log(doneTodos)

const oneTodo = todos.find(function(todo) {
    return todo.text == "limpar o banheiro"
})

console.log(oneTodo)

const index = todos.findIndex(function(todo){
    return todo.text == "limpar o banheiro"
})

console.log(index)

const cars = ["saveiro", "fiat", "bmw", "celta"]

const hasFusca = cars.some(function(car){
    return car == 'fusca'
})

console.log(hasFusca)

const hasFusca2 = cars.some(car => car == 'fusca')

console.log(hasFusca2)

const anything = () => [1, 2, 3, 4, 5]

console.log(anything())

// parametro padrao

const SayHello = (name = "Denis") => console.log("ola " + name)

SayHello()

// template string


const showProduct = (product, price) => {
    console.log(`O valor da ${product}, custa R$ ${price}`)
}

showProduct("Camisa", 15)

// objetct short syntax

const name = "Pedro"
const age = 15

const person = {
    name,
    age,
    alive: true
}

console.log(person)


// desestruturacao

const fruits  = ['maça', 'banana', 'pera', 'abacate']

const [a,b, , c] = fruits

console.log(a, b, c)


const city = {
    cidade: "Toledo",
    state: "Paraná",
    uf: "PR",
    adress: {
        street: "Rua da faculdade",
        number: "1113",
    }
}

const {cidade, state, adress: { street }} = city

console.log(cidade, state, street)

const showState = ({cidade, state}) => {
    console.log(`A cidade ${cidade} é do estado ${state}`)
}

showState(city)


// rest pegar o resto

const numeros = [1, 2, 3, 4, 5]

const [first, second, ...rest] = numeros
console.log(first, second, rest)

const carro = {
    marca: "bmw",
    ano: 2013,
    dono: "José",
}

const { ano, ...resto} = carro

console.log(ano, resto)


const sum = ( ...params ) => {
    return params.reduce((total, next) => total + next )
}

console.log(sum(5, 10, 15, 20))

// Spread despejar em algum lugar

const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [6, 7, 8, 9, 10]

const numbers3 = [...numbers1, ...numbers2]

console.log(numbers3)


const carro2 = {
    ...carro,
    marca: "palio",
}

console.log(carro2)

// func construtora

function Car(brand, name) {
    this.brand = brand
    this.name = name
}

const civic = new Car('honda', 'civic')
const palio = new Car('fiat', 'palio')

console.log(civic)
console.log(palio)

class Automovel{
    constructor(brand, name, price){
      this.brand = brand
      this.name = name
      this.price = price
    }
    run(speed=10) {
      return console.log(`Esse carro corre a uma velocidade de ${speed} km/h`)
    }
  }

const corola = new Automovel('toyota', 'corola', 100)
console.log(corola)
corola.run(100)
corola.run()


// get e set

class Fruit{
constructor(name){
    this._name = name
}

get name(){
    return this._name
}
set name(value){
    this._name = value
}
}

const maca = new Fruit('maça')
console.log(maca)
maca.name = 'pera'
console.log(maca)

class Calculator{
static sum(a, b){
    return a+b
}
}

console.log(Calculator.sum(3,5))


class Person{
constructor(firstName, secondName){
    this.firstName = firstName
    this.secondName = secondName
}

get fullName() {
    return Person.joinNames(this.firstName, this.secondName)
}

static joinNames(firstName, secondName) {
    return `${firstName} ${secondName}`
}
}

const pablo = new Person("Pablo", "Escobar")

console.log(pablo.fullName)

//  herança

class Veiculo {
    constructor(rodas, preco){
        this.rodas = rodas
        this.preco = preco
    }

    acelerar() {
        console.log("acelerou")
    }
}

class Moto extends Veiculo{
    constructor(rodas, preco, marca, nome) {
        super(rodas, preco)
        this.marca = marca
        this.nome = nome
    }
    empinar(){
        console.log("empinou")
    }

    acelerar(){
        console.log("acelerou muito")
    }
}

const r3 = new Moto(2, 100, "Yamaha", "R3")
console.log(r3)
r3.acelerar()
