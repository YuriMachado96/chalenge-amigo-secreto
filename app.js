//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        inputAmigo.value = "";
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let sorteio = [...amigos];
    let amigosSorteados = [];

    for (let i = 0; i < amigos.length; i++) {
        let index;

        do {
            index = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[index] === amigos[i]);

        amigosSorteados.push(`${amigos[i]} tirou ${sorteio[index]}`);
        sorteio.splice(index, 1);
    }

    amigosSorteados.forEach(resultadoSorteio => {
        const li = document.createElement('li');
        li.textContent = resultadoSorteio;
        resultado.appendChild(li);
    });
}
