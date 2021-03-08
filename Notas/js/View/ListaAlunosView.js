class ListaAlunosView extends View{
    constructor(seletor){
        super(seletor);
    }
    
    getTemplate(model){
        return `
            ${model.lista.map( aluno => `
                <tr class="aluno" data-id="${aluno._id}">
                    <td class="aluno-nome">${aluno.nome}</td>
                    ${aluno._notas.map( (nota, i) => `
                        <td class="aluno-n${(i+1)}">${nota}</td>
                    ` ).join('')}
                    <td class="aluno-m">${aluno.recuperarMedia()}</td>
                </tr>
            `        
            ).join('')}
            
        `
    }
    
    atualiza(model){
        this.$seletor.innerHTML = this.getTemplate(model);
    }
}