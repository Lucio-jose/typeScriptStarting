import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";



export function createCourse(req:Request, res:Response){
    CreateCourseService.execute({
        nome: "string",
    descricao: "string",
    duracao: "string",
    professor: "string"
    })
}