let listElemento = document.querySelector('#lista');
let pesquisaInput = document.querySelector('#pesquisa');

let listarItens = [
  {
    full_nome: 'JavaScript',
    criado_em: '25/05/2019T20:10:00Z',
    forks: 2050
  },
  {
    full_nome: 'JavaScript 2',
    criado_em: '25/05/2019T20:10:00Z',
    forks: 920
  },
  {
    full_nome: 'JavaScript 3',
    criado_em: '25/05/2019T20:10:00Z',
    forks: 320
  }
]

function render() {
  let html = '';
  listarItens.forEach(item => {
    html += `
      <li>
        <div>
          <b>Nome:</b> ${item.full_nome}
        </div>
        <div>
        <b>Criado em:</b> ${item.criado_em}
        </div>
        <div>
          <b>Forks:</b> ${item.forks}
        </div>
      </li>
    `
  })

  listElemento.innerHTML = html;
}

render();