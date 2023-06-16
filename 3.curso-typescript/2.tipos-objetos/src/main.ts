// tipos objetos

type UF = 'PE' | 'SP' | 'PR'

interface User {
    readonly name: string,
    address?: {
        city: string,
        UF: UF
    },
}

const pedro: User = {
    name: "pedro"
}

// pedro.name = 'Joao'

// Implesments e Extends

interface Veiculo {
    nome: string,
    rodas: number,
    frear: () => void,
    acelerar: () => void,
}

interface Moto extends Veiculo {
    empinar: () => void,
}

let r3: Moto

class CriarVeiculo implements Veiculo {
    rodas: number
    nome: string
    constructor(rodas: number, paiva: string){
        this.rodas = rodas
        this.nome = paiva
    }

    acelerar() {
        console.log("acelerou")
    }

    frear() {
        console.log("freiou")
    }
}

// Pick e Omit

interface Post {
    id: string,
    name: string,
    age: number,
    cellphone: number,
}

type PostPreview =  Pick<Post, 'id' | 'name'>

let celso: PostPreview = {
    id: 'um',
    name: 'Celso',
}

console.log(celso.name)
