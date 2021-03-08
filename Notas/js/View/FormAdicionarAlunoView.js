class FormAdicionarAlunoView extends View{
    constructor(seletor){
        super(seletor);
        this.$seletor.innerHTML = this.getTemplate();
    }
     
    getTemplate(){
        return `
            <form class="form-inline">
			  <div class="form-group">
			    <input type="text" class="form-control" placeholder="Nome" name="nome" id="nome" required>
			  </div>
			  <div class="form-group">
			    <input type="number" class="form-control" placeholder="nota1" min="0" max="10" name="nota1" id="nota1" required>
			  </div>
			   <div class="form-group">
			    <input type="number" class="form-control" placeholder="nota2" min="0" max="10" name="nota2" id="nota2" required>
			  </div>
			   <div class="form-group">
			    <input type="number" class="form-control" placeholder="nota3" min="0" max="10" name="nota3" id="nota3" required>
			  </div>
			   <div class="form-group">
			    <input type="number" class="form-control" placeholder="nota4" min="0" max="10" name="nota4" id="nota4" required>
			  </div>
			  <button type="submit" class="btn btn-default">Adicionar</button>
			</form>
        `        

    }
}