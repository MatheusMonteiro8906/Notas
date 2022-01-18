class Aluno {
    constructor(nome, notas,){
        this.nome = nome;
        this._notas = (notas) ? [].concat(notas) : [];        
        this._id = ++Aluno.id;
    }
    
    adicionarNotas(){
        Array.prototype.forEach.call(arguments, nota => this._notas.push(nota))
    }
    
    atualizarNotas(arr){
        this._notas = [].concat(arr);
    }
    
    recuperarMedia(){
        var notas = this._notas;
        return blg.calcularMedia(...notas);
    }
}

Aluno.id = 0;