type Admin = {
    username: string;
    _id: string;
}

type newUser = {
    name: string;
    _id: string;
}
type General = Admin | newUser 
// union symbol

const hitsh = {name: "hitest", _id: "shown"}

// fun with arrays

const dataStr: string[] = ["1", "2", "3"]
const dataNum:  number[] = [1, 2, 3]
const dataStrOrNum:  number[] | string[] = [1, 2, 3]
const dataStrOrNum2:  number[] | string[] = ["1", "2", "3"]
const dataOr: (number | string )[] = ["1", 2 , "3"]