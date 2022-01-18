class View{
    constructor(seletor){
        this.$seletor = blg.$(seletor);
    }
    
    getTemplate(){
        throw new Error ('metodo getTemplate deve ser implementado pelas classes que herdam View');
    }
}