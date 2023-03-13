//html
document.body.appendChild(document.createElement('div')).setAttribute('id','fatoracao');
const fatoracao = document.getElementById('fatoracao');
fatoracao.appendChild(document.createElement('h2')).innerHTML = 'Digite um número para calcular a fatoração'
fatoracao.appendChild(document.createElement('input')).setAttribute('id','valor');
fatoracao.appendChild(document.createElement('button')).setAttribute('id','fatorar');
document.body.appendChild(document.createElement('div')).setAttribute('id','resultado');
const valor = document.getElementById('valor');
const resultado = document.getElementById('resultado');
const Fatorar = document.getElementById('fatorar');
Fatorar.innerHTML = 'FATORAR';
const cr_table = document.createElement('table');
resultado.appendChild(cr_table).setAttribute('id', 'table');
const tabela = document.getElementById('table');
resultado.appendChild(document.createElement('p')).setAttribute('id', 'p');
const p = document.getElementById('p');
//---------------------javascript------------------------------
Fatorar.addEventListener('click', function () {
  p.innerHTML = ''
  let input = parseInt(valor.value);
  let fatores;
  if(Number.isNaN(input)){
    p.innerHTML = 'O campo deve ser preenchido'
    tabela.innerHTML = ''}else{
    fatores = Calcular(input);
      if(input < 0){
        p.innerHTML = 'Somente números naturais são aceitos'
        tabela.innerHTML = ''
      }else{gerarTabela(fatores)}
  }
});

function gerarTabela(fatores) {
  tabela.innerHTML = ''
    for (var i = 0; i < fatores.length; i++) {
      let f = fatores[i];
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.innerText = f.join(' ');
      tr.appendChild(td);
      tabela.appendChild(tr);
    }
}

function Calcular(num) {
  const fatores = [];
  while (num > 1) {
      for (let i = 2; i <= num; i++) {
          if (num % i) continue;
          fatores.push([num, i]);
          num = num / i;
          break;
      }
  }
  fatores.push([1, '']);
  return fatores;
}