function addTwo(num: number): number {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
       
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("chbhdbdcd")

signUpUser('nik','jcnjc','cbdjcn',false)
loginUser("h", "h@g.com")


function getvalue(myVal: number): boolean|string {
    if(myVal > 5) {
        return true
    }
    return "200 Ok"
}

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

// functions which does not retuen anything
function consoleError(errmsg: string): void {
    console.log(errmsg)
}

// functions which return exception
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export{}

