console.log("Hello World!")

// string, number e Boolean

let message : string = "Hello"

console.log(message.toUpperCase())


let total : number = 0

console.log(total)

let isOpen : Boolean = true
console.log(isOpen)

// any, void e never

let teste : any = 89

console.log(teste)

function showuserName(name: string = 'Yung'): void {
    console.log(name)
}

function error(): never {
    throw new Error('error')
}


// arrays, tuples e enums

let arrayNumbers : Array<number>

arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let tuple : [string, boolean, number]

tuple = ['oi', false, 3]
console.log(tuple)


enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);

  enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.East;
  //log 1
  console.log(currentDirection);

  enum Colors {
    white = '#fff',
    black = '#000',
  }

  let white : Colors
  white = Colors.white
  console.log(white)