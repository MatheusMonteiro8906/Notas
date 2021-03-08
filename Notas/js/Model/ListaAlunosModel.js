class ListaAlunos{
    constructor(_lista){
        this.lista = [].concat(_lista);
    }
    
    obterPorId(_id){
        return this.lista.filter( aluno => aluno._id === _id )[0];
    }
    
    adicionarAluno(aluno){
        this.lista.push(aluno)
    }
    
    buscarAlunos(_nome){
        return this.lista.filter( aluno => aluno.nome.toLowerCase().indexOf(_nome.toLowerCase()) >= 0 );
    }
}