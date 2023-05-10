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