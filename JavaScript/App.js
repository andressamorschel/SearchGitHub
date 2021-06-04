const Template = (function(){
	const linguagemSelecionada = document.querySelector('#selecionarLinguagem');
	const listarElementos = document.querySelector('#lista');
	
	let listarItens = [];
	let languageTag = 'en-US';
	
	linguagemSelecionada.addEventListener('change', changeLanguage);
	
	function changeLanguage(){
		languageTag = linguagemSelecionada.value;
		render();
	}

	function setList(list){
		listarItens = list;
		render();
	}

	function render(){
		let html = '';
		const numberFormatter = new Intl.NumberFormat(languageTag);
		const dateFormatter = new Intl.DateTimeFormat(languageTag, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
		listarItens.forEach(item => {
			const forks = numberFormatter.format(item.forks);
			const createdAt = dateFormatter.format( new Date(item.created_at) );
			html += `
				<li>
					<div>
						<b>Name:</b> ${item.full_name}
					</div>
					<div>
						<b>Created At:</b> ${createdAt}
					</div>
					<div>
						<b>Forks:</b> ${forks}
					</div>
				</li>
			`;
		})
		listarElementos.innerHTML = html;
	}

	return {
		setList
	}

})();




const Data = (function($){
	const searchInput = document.querySelector('#pesquisa');
	
	searchInput.addEventListener('keyup', search);

	async function search(event){
		if(event && event.keyCode === 13){
			const searchQuery = searchInput.value;
			let response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`);
			response = await response.json();
			$.setList(response.items);
		}
	}

})(Template);


