// aux = 2, pois já tem um contato na lista, ocupando o #1
var aux = 2;

// função para pegar os valores do formulario e limpa-lo
function get(){
  var contatos = {
    nome : document.getElementById('campo-nome').value,
    idade : document.getElementById('campo-idade').value,
    curso : document.getElementById('campo-curso').value
  }
  
  document.getElementById('campo-nome').value = ''
  document.getElementById('campo-idade').value = ''
  document.getElementById('campo-curso').value = ''
  
  return contatos;
}

function add(){
//
  contato = get();
// cria uma row no formato correto
  var table = document.getElementById('table');
  var row = table.insertRow()
  var cellAux = row.insertCell(0)
  var cellNome = row.insertCell(1)
  var cellIdade = row.insertCell(2)
  var cellCurso = row.insertCell(3)
  var cellEdit = row.insertCell(4)
  var cellDelete = row.insertCell(5)

// setando valores coletados
  cellAux.innerHTML = aux;
  cellNome.innerHTML = contato.nome;
  cellIdade.innerHTML = contato.idade;
  cellCurso.innerHTML = contato.curso;
  cellEdit.innerHTML = '<button onclick="edit(this)">Edit</button>';
  cellDelete.innerHTML = '<button onclick="del(this)">Delete</button>';

  aux += 1
}

// função delete
function del(el){
  el.parentElement.parentElement.remove();
}

function edit(el){
// pegando dados novos do form
  contato = get();
// setando dados novos
  var cells = el.parentElement.parentElement.cells;
  cells[1].textContent = contato.nome;
  cells[2].textContent = contato.idade;
  cells[3].textContent = contato.curso;
}