function addTwo(num: number) {
    return num + 2
}
let result = addTwo(2)

function toUpperCase(text: string) {
    return text.toUpperCase()
}
let dhanjit = toUpperCase("Dhanjit")

function signUpUser(name: string, email: string, password: number): string {
    return `${name.toUpperCase()} with ${email.toLowerCase()} signed in with password ${password.toExponential(1)}`
}

let newUser = signUpUser("dhanjit", "dhanjit@dhanjit.com", 109);

const loginUser = (username: string = "unknown user", password: number = 111, isPaid: boolean = true) => { }
let loggedInUser = loginUser("dhanjit", 121)

// console.log(newUser.toUpperCase())

const sayHello = (s: string): string => {
    return "hello"
}

let response = sayHello("")

// console.log(response)

let actions = ["emotional", "logical", "thoughtprovoking"]
let levels = [1, 2, 3]

actions.map((action): string => {
    return `your action was ${action}`
})
// here ts automatically detects the type of action 

levels.map((level): number => {
    return level;
})

//here it detects  level as number

// a function that don't return anything at all 

const consoleErr = (msg: string): void => {
    console.log(msg)
}

const handleErr = (msg: string): never => {
    throw new Error(msg)
}

export { }