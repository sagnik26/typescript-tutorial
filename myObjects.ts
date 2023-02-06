const User = {
    name: 'Sagnik',
    email: 'nik@gmail.com',
    isActive: true
}


// object passing as argument in function //
function createUser({name: string, isPaid: boolean}) {}

createUser({name: 'Nik', isPaid: false})


// object as a return type of function //
function createCourse(): {name: string, price: number} {
    return {name: 'reactJS', price: 400}
}


// Type aliases //
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUserTwo(user: User): User {
    return {name: '', email: '', isActive: true}
}

createUserTwo({name: '', email: '', isActive: true})

// READONLY and optional //
type UserTwo = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: UserTwo = {
    _id: '1234',
    name: 'nik',
    email: 's@s.com',
    isActive: true
}
myUser.email = 'nik@gmail.com'
// myUser._id = 'cdcd'

// merging different types //
type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
};

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let card: cardDetails = {
    cardNumber: "xxxx xxxx xxxx xxxx",
    cardDate: "DD-MM-YYYY",
    cvv: 123
}

export{}
