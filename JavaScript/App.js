let listElemento = document.querySelector('#lista');
let pesquisaInput = document.querySelector('#pesquisa');
let linguagemSelecionada = document.querySelector('#selecionarLinguagem');

let languageTag = 'en-US';

let listarItens = [
	{
		full_nome: 'JavaScript 1',
		criado_em: '2020-07-25T20:10:50Z',
		forks: 15300
	},
	{
		full_nome: 'JavaScript 2',
		criado_em: '2020-07-25T20:10:50Z',
		forks: 18300
	},
	{
		full_nome: 'JavaScript 3',
		criado_em: '2020-07-25T20:10:50Z',
		forks: 2570
	}
]


linguagemSelecionada.addEventListener('change', changeLanguage);


function changeLanguage(){
	languageTag = linguagemSelecionada.value;
	render();
}


function render() { 
  let html = '';

  const numberFormatter = new Intl.NumberFormat(languageTag);
  const dateFormatter = new Intl.DateTimeFormat(languageTag, {
    week: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  listarItens.forEach(item => {
    const forks = numberFormatter.format(item.forks);
    const criado_em = dateFormatter.format(new Date(item.criado_em));

    html += `
      <li>
        <div>
          <b>Nome:</b> ${item.full_nome}
        </div>
        <div>
        <b>Criado em:</b> ${criado_em}
        </div>
        <div>
          <b>Forks:</b> ${forks}
        </div>
      </li>
    `
  })

  listElemento.innerHTML = html;
}

render();