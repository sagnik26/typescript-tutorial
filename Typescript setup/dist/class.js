"use strict";
// Typescript Classes //
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.state = "WB"; // by default public varibale
        this._courseCount = 1; // private varibale
        this._newCourse = 'React.js'; // protected variable
        this.city = "Kolkata"; // readonly variable
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    // A simple method
    greet() {
        console.log(`hello from ${this.city}, your userId is ${this.userId}`);
    }
    // getter
    get courseCount() {
        return this._courseCount;
    }
    // setter -> A 'setter' cannot have a return type annotation.
    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = coursenum;
    }
    // private method
    deleteToken() {
        console.log('Delete Token');
    }
}
// Inheritance
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._newCourse = 'Next.js';
    }
}
const nik = new User('nik26@gmail.com', 'Nik', '12#dffd$hgh&');
nik.greet();
console.log(nik.city);
