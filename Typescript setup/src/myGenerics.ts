const score: Array<number> = []
const names: string[] = []

// Basic syntax //
function identityThree<Type>(val: Type): Type {
    return val
}

// OR 

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({brand: 'nik', type: 2})


// Arrow function with generics //
function getSearchProducts<T>(products: T[]): T {
    // do some database operation
    const myIndex = 0
    return products[myIndex]
}

// OR

const getMoreSearchProducts = <T>(products: T[]): T => {
        // do some database operation
        const myIndex = 3
        return products[myIndex]
}