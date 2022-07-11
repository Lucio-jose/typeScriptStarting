

interface Curso{
    nome: string,
    descricao: string,
    duracao: string,
    professor: string
}


class CreateCurso{

    execute({nome,descricao, duracao, professor}:Curso){
        console.log(nome, descricao, professor, duracao)
    }
}
export default new CreateCurso()