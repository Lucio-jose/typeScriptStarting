import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";


export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name:"HTML-CSS",
        educator:"Lucio José",
        duration:9
    })
}