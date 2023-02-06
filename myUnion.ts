let score: number|string = 33

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let nik: User | Admin = { username: 'Sagnik', id: 21 }

function getDbId(id: number | string) {
    if(typeof(id) === "string") {
        id.toLowerCase()
    }
}

getDbId("nik")
getDbId(1)


// Array
const data: (number|string) [] = [1, 2, 3, "4"]

let aeroSeatAllot: "aisle" | "middle" | "window"

export{}