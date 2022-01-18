class FormBuscarAlunoView extends View{
    constructor(seletor){
        super(seletor);
        this.$seletor.innerHTML = this.getTemplate();
    }
    
    getTemplate(){
        return `
            <form class="form-inline">
			  <div class="form-group">
			    Busca: <input type="text" class="form-control" placeholder="Nome" name="nome" id="nome" required>
			  </div>
			  
			  <button type="submit" class="btn buscar" id="btnBuscar">Buscar</button>
			  <button type="button" class="btn limpar" id="btnLimparFiltro">Limpar Filtro</button>
			</form>
        `
    }
}