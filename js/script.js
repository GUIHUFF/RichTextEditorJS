//Elements

const elements =  document.querySelectorAll('.btn');

// Event
elements.forEach(element => {
	element.addEventListener('click', () => {
		let command = element.dataset['element'];

		if (command == 'createLink' || command == 'insertImage'){
			let url = prompt('Adicione o link aqui: ', 'http://')
			document.execCommand(command, false, url);
		} else {
			document.execCommand(command, false, null);
		}		

	});
});

const deleteText = () => {
	let element = document.getElementsByClassName('content')[0];
	element.innerHTML = '';
};

const saveText = () => {
	let element = document.getElementsByClassName('content')[0];
	let texto = element.innerHTML;
	
};
