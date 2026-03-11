const tarefas = [];

function adicionarTarefa(){

    const input = document.getElementById("novaTarefa");
    const descricao = input.value;

    if(descricao === ""){
        alert("Digite uma tarefa");
        return;
    }

    const tarefa = {
        descricao: descricao,
        status: false
    };

    tarefas.push(tarefa);

    input.value = "";

    atualizarLista();
}

function atualizarLista(){

    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;

        checkbox.onclick = () => {
            tarefa.status = !tarefa.status;
            atualizarLista();
        };

        const span = document.createElement("span");
        span.textContent = tarefa.descricao;

        if(tarefa.status){
            span.className = "concluida";
        }else{
            span.className = "naoConcluida";
        }

        li.appendChild(checkbox);
        li.appendChild(span);

        lista.appendChild(li);
    });
}