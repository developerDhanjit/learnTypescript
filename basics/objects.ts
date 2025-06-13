

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

const newAdmin = getAdmin({username:"dhanjit", adminId: 121 , password: "hiiii"})
console.log(newAdmin)