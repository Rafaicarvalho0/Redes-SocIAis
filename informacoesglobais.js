const url = 'https://github.com/guilhermeonrails/api/blob/main/dados-globais.json'

console.log(url);

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que  <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede sociais passam em média  <span>${dados.tempo_medio}</span>`

    const container = document.getElementById('graficos-conteiner')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()