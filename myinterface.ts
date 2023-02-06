interface User  {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string

    startTrail() : string
    getCoupon(couponname: string) : number
}

// reopening interface //
interface User {
    githubToken?: string
}
 
// inheritance in interface //
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hitesh: User = { 
    dbId: 22, 
    email: "h@h.com", 
    userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    getCoupon : () => {
        return 23
    }
}

hitesh.email = "s@s.com"

export{}