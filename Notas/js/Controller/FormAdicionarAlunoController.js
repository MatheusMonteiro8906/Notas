class FormAdicionarAlunoController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    
    limpar(){
        console.log('----')
        console.log(this.view.$seletor.querySelectorAll('input'))
        let inputs = this.view.$seletor.querySelectorAll('input');
        Array.prototype.forEach.call(inputs, input => input.value = '' );
        
        inputs[0].focus();
    }
}