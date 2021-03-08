class ListaAlunosController{
    constructor(model, view){
        this.model = model;
        this.view = view;
        
        this.view.$seletor.addEventListener('click', this.editarAluno.bind(this));
       
        this.atualizarModel()
    }
    atualizarModel(){
        let localStorageAlunos = localStorage.getItem('alunos')
        console.log('localStorageAlunos') 
        if(localStorageAlunos){
            localStorageAlunos = JSON.parse(localStorageAlunos)
        
            localStorageAlunos.forEach( (item, i) => {
                let aluno = new Aluno(item.nome, item._notas,)
                this.model.adicionarAluno(aluno)
            } )
            this.view.atualiza(this.model)

        }
    }

    atualizarLocalStorage(model){
        let _model = model.map( item => {
            return {
                nome: item.nome,
                _notas: item._notas
            }
        })
        _model = JSON.stringify(_model)
        localStorage.setItem('alunos', _model)
    }
    
    editarAluno(e){
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(this);
        
        let target = e.target;
        
        while(target !== e.currentTarget){
            if (target.getAttribute('data-id')){
                break;
            }
            target = target.parentNode;
        }
        console.log('----')
        console.log(target)
        
        if(target){
            let _id = parseInt(target.getAttribute('data-id'));
            let _notas = prompt('digite as novas notas separadas por virgula');
            
            if(!_notas) return;
            
            _notas = _notas.split(',').map( nota => parseFloat(nota) );
            console.log(_notas)
            
            let aluno = this.model.obterPorId(_id);
            aluno.atualizarNotas(_notas);
            
            this.view.atualiza(this.model);
            this.atualizarLocalStorage(this.model.lista)
        }
    }
    
    adicionarAluno(nome, notas){
        this.model.adicionarAluno( new Aluno(nome, notas) )
        this.view.atualiza(this.model)
        this.atualizarLocalStorage(this.model.lista)
    }
    
    atualizaLista(alunos){
        this.view.atualiza(alunos);
    }
    
    limparFiltro(){
        this.view.atualiza(this.model);
    }
}