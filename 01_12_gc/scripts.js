let obj = {
    name: "orange" // will be collected in GC since obj doesn't hv reference for name: orange
}
obj = null; 

// 2. Won't be cleaned
let obj2 = {
    name: "orange"
}
let obj3 = obj2;
obj2 = null; // won't be cleared since obj3 still reference to name: orange

// Situation with Memory leak
// Circular Reference
let teacher= new Teacher();
let student = new Student();
teacher.student = student;
student = null; // reference is lost here so memory should be cleared, but older browsers could not clear this. New browsers with Mark and sweep algo can handle this
student.teacher= teacher;