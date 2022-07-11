"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCurso {
    execute({ nome, descricao, duracao, professor }) {
        console.log(nome, descricao, professor, duracao);
    }
}
exports.default = new CreateCurso();
