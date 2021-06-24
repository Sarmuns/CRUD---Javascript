function add(){
  var contato = [
    nome = document.getElementById('campo-nome').value,
    idade = document.getElementById('campo-idade').value,
    curso = document.getElementById('campo-curso').value
  ]
  var table = document.getElementById('table');
  var row = table.insertRow(0)
  var cellNome = row.insertCell(0)
  var cellIdade = row.insertCell(1)
  var cellCurso = row.insertCell(2)
  cellNome.innerHTML = nome;
  cellIdade.innerHTML = idade;
  cellCurso.innerHTML = curso;

  //Limpando o input
  document.getElementById('campo-nome').value = ''
  document.getElementById('campo-idade').value = ''
  document.getElementById('campo-curso').value = ''
}