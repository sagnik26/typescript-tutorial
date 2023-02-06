// Typescript Classes //

class User {
    state: string = "WB" // by default public varibale
    private _courseCount = 1 // private varibale
    protected _newCourse = 'React.js' // protected variable
    readonly city: string = "Kolkata" // readonly variable
    
    constructor(
        public email: string, 
        public name: string,
        private userId: string
        ) {
        this.email = email;
        this.name = name;
        this.userId = userId
    }

    // A simple method
    greet(): void {
        console.log(`hello from ${this.city}, your userId is ${this.userId}`)
    }

    // getter
    get courseCount(): number {
        return this._courseCount
    }

    // setter -> A 'setter' cannot have a return type annotation.
    set courseCount(coursenum) {
        if(coursenum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = coursenum
    }

    // private method
    private deleteToken(): void {
        console.log('Delete Token')
    }
   
}


// Inheritance
class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._newCourse = 'Next.js'
    }
}


const nik = new User('nik26@gmail.com', 'Nik', '12#dffd$hgh&')
nik.greet()
console.log(nik.city)
