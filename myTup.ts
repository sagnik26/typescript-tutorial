// in tuple, order of datatypes matters //
let tUser: [string, number, boolean]
tUser = ["b", 1, true]

let rgb: [number, number, number] = [255, 255, 255]

type User = [number, string]
const newUser: User = [1, "a"]
newUser[1] = "c"

// ## Exception :: Typescript array push method can't catch a tuple type of the array //
// newUser.push(true)


export{}