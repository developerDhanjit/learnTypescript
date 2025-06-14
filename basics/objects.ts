

const createUser = ({ name: string, isPaid: boolean = false }) => { }
const userObj = {name : "dhanjit", isPaid: true, email:"email"}

// createUser(userObj); should thorow error but doesn't ! 

const createCourse = (userObj: {
    id: number
}): {

    courseName: string,
    price: number,
    active: boolean ,
    text: string

} =>{

    const {id} = userObj
    
    return {
        courseName : "ts",
        price : 400,
        active: true,
        text : `Your request id ${id}`
    }
}

// type alias

type Admin = {
    username: string;
    adminId: number;
    password: string;
}

const getAdmin = (admin: Admin): string => {

    const token = 'hehe'
    return `token ${token}`

}

// ReadOnly 

type cardNumber = string
type cardExpiry = string 
type cardDetail = {
   readonly _id : string,
   cardNumber: cardNumber,
   cardExpiry: cardExpiry 
}

type newCardDetail = {
    cardHolderName: string,
    bankName?: string
}
type newCardDetails = cardDetail & newCardDetail 

const cardUser: newCardDetails = {
    _id: "some_id",
    cardNumber: "num",
    cardExpiry: "12-2-23",
    cardHolderName: "Mr. Someone",
    // bankName : "bank of baroda"
    // optional bank name 
}


const newAdmin = getAdmin({username:"dhanjit", adminId: 121 , password: "hiiii"})
console.log(newAdmin)