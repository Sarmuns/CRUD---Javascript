var aux = 2;

function add(){
  var contato = [
    nome = document.getElementById('campo-nome').value,
    idade = document.getElementById('campo-idade').value,
    curso = document.getElementById('campo-curso').value
  ]

  var table = document.getElementById('table');
  var row = table.insertRow()
  var cellAux = row.insertCell(0)
  var cellNome = row.insertCell(1)
  var cellIdade = row.insertCell(2)
  var cellCurso = row.insertCell(3)
  cellAux.innerHTML = aux;
  cellNome.innerHTML = nome;
  cellIdade.innerHTML = idade;
  cellCurso.innerHTML = curso;
  aux = aux + 1;

  //Limpando o input
  document.getElementById('campo-nome').value = ''
  document.getElementById('campo-idade').value = ''
  document.getElementById('campo-curso').value = ''
}