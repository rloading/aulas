// Objeto date é uma função construtora que utiliza a palavra 'new'

const data = new Date(); //formato: ano, mes, dia, hora, minutos, segundos, ms

console.log(data.toString());

console.log(data.toDateString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // 0 = Janeiro - 11 = Dezembro
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 = Domingo -- 6 = Sábado

function zero (num){
    return num >= 10 ? num : `0${num}` //Função para adicionar um zero a esquerda 
}


function formatDate (date){
    const dia = zero(date.getDate());
    const mes = zero(date.getMonth() + 1);
    const ano = zero(date.getFullYear());
    const hora = zero(date.getHours());
    const min = zero(date.getMinutes());
    const seg = zero(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date = new Date();
const dateBrazil = formatDate(date);
console.log(dateBrazil);