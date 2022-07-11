import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";



export function createCourse(req:Request, res:Response){
    CreateCourseService.execute({
        nome: "HTML-CSS-Js",
    descricao: "programação web",
    duracao: "6 meses",
    professor: "Lucio-jose"
    })

    return res.send();
}