const superHeroes: string[] = [];
// const realNumbers: number[] = []; both this and below are exactly the same 
const realNumbers: Array<number> = [];

type User = {
    name: string;
    isActive?: boolean;
}

const users: User[] = []



superHeroes.push('Spider-man');
realNumbers.push(0)
users.push({
    name: "some developer",
    isActive: true
})

// array inside and array 

const MLModels: number[][] = [

    [2444, 42, 42],
    // "" this throws an error

]