import express from 'express'
import { createCourse } from './routes';

const app= express();

app.get("/", createCourse)

app.listen(3033, ()=>{
    console.log("servidor rodando")
})