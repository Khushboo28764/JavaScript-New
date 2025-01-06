const course={
    coursename:"js in hindij",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor)
// const {courseInstructor}= course
// console.log(courseInstructor)
const {courseInstructor: instructor}=course
console.log(instructor)