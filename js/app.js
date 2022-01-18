var alunos = [];
alunos = alunos.map( aluno => new Aluno(aluno) );



var listaAlunos = new ListaAlunos(alunos);
console.log(listaAlunos);

var listaAlunosView = new ListaAlunosView('#listaAlunos');
listaAlunosView.atualiza(listaAlunos);

var listaAlunosController = new ListaAlunosController(listaAlunos, listaAlunosView);

var formAdicionarAlunoView = new FormAdicionarAlunoView('#form-adiciona');
var formAdicionarAlunoController = new FormAdicionarAlunoController(listaAlunos, formAdicionarAlunoView);

var formBuscarAlunoView = new FormBuscarAlunoView('#form-busca');
var formBuscarAlunoController = new FormBuscarAlunoController(listaAlunos, formBuscarAlunoView);

blg.$('#form-adiciona form').addEventListener('submit', function(e){
    e.preventDefault();
    
    var nome = blg.$('#nome').value;
    
    var notas = [];
    var i = 1;
    while(blg.$('#nota'+i)){
        notas.push(parseFloat(blg.$('#nota'+i).value));
        i++;
    }
    
    listaAlunosController.adicionarAluno(nome, notas);    
    formAdicionarAlunoController.limpar();
        
})

blg.$('#form-busca form').addEventListener('submit', function(e){
    e.preventDefault();
    formBuscarAlunoController.buscarAluno( function(_alunos) {
        console.log(_alunos)
        
        listaAlunosController.atualizaLista({lista: _alunos});
    });
});


blg.$('#btnLimparFiltro').addEventListener('click', function(e){
    formBuscarAlunoController.limparInput();
    listaAlunosController.limparFiltro();
})

