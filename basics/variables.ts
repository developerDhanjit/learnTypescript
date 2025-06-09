let userName : string = 'Dhanjit' ; 
let myNum : number = 69 ; 

userName.toUpperCase()
myNum.toLocaleString()

// boolean 

let isLoogedIn: boolean = false

//  any 

// let youtuber ; => ts infer this as any 

let youtuber: string ; 
// use this instead

function getYoutuber(){
    return "hc"
}

youtuber = getYoutuber();

console.log(userName, myNum);
console.log(youtuber);
export {}