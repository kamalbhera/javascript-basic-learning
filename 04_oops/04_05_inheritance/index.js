// 1
class Child extends String {}
const child = new Child("CHILD string");
console.log(child.toLowerCase());

// 2 super
class Parent {
    static appVersion = 1.2;
    constructor(name){
        this.name = name;
    }
    getName() {
        console.log("Parent name", this.name)
    }
}
class Children extends Parent {
    static appVersion = super.appVersion; // TODO: super with app version not working
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
    getName() {
        console.log("Child name", this.name)
        super.getName(); // will call fn from parent
    }
    getAppVersion() {
        console.log(this.appVersion);
    }
}
const children = new Children("Kiran", 14);
console.log(children.getAge()) // 14
console.log(children.getName()) // Child name Kiran
console.log(children.getAppVersion());
