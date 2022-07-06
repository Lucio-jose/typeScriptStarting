


interface Curso{
    name:string,
    duration: Number,
    educator: string
}

class CreateCourseService{

    execute({name, duration, educator}: Curso){
        console.log(name, duration, educator)
    }
}
export default new CreateCourseService();