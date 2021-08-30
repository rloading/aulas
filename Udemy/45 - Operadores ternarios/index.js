// (Condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Normal'

/*if (pontuacaoUsuario >= 1000) {
    console.log ('user VIP')
}
else {
    console.log('user normal')
}*/

const corUsuario = null;
const corPadrao = corUsuario || 'azul';

console.log(nivelUsuario, corPadrao)