//1
/* Crie uma função que é chamada ao clicar no botão "Criar Tarefa". 
Use um evento apropriado que identifique o clique no botão. */

function criarTarefas(){
    let cliques = 0
    cliques += 1
    const  texto = document.getElementById("click")
    texto.innerHTML= 4(cliques)
}

function mouseOn() {
    console.log("Em cima do mouse")
}

function mouseOut() {
    console.log("Em cima do mouse")
}



//2
//Dentro da função, capture o valor do campo do HTML (que é a tarefa
//a ser colocada no planner) e armazene em uma variável. 

function adicionartarefas() {
    const meuInput = document.getElementById('tarefas')
    const minhasTarefas = document.getElementById('dias-semana')

    if (meuInput.value !== "") {
        minhasTarefas.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    }    
    else{
        switch(minhasTarefas){
            case"domingo":
              domingo.innerHTML += `<li>${tarefas.value}</li>`
            break
            case "segunda":
                segunda.innerHTML +=  `<li>${tarefas.value}</li>`
            break 
            case "terça":
                terça.innerHTML +=  `<li>${tarefas.value}</li>`
            break
            case "quarta":
                quarta.innerHTML += `<li>${tarefas.value}</li>`
            break
            case "quinta":
                quinta.innerHTML += `<li>${tarefas.value}</li>`
            break
            case "sexta":
                sexta.innerHTML += `<li>${tarefas.value}</li>`
            break
            case "sabado":
                sabado.innerHTML += `<li>${tarefas.value}</li>`
            break
            default:
            break;   
            
        }
        meuInput.value =""

    }
    
}
