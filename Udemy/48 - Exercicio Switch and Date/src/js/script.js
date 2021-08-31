const h1 = document.querySelector('.container h1');
const date = new Date();
//h1.innerHTML = date.toString();

//const opcoes = {dateStyle: 'full', timeStyle: 'short'};

h1.innerHTML = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(date);

