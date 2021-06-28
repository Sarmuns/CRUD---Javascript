// função para pegar os valores do formulario e limpa-lo
function get() {
    var contatos = {
        nome: document.getElementById('campo-nome').value,
        idade: document.getElementById('campo-idade').value,
        curso: document.getElementById('campo-curso').value
    }

    return contatos;
}

function resetForm() {
    document.getElementById('campo-nome').value = ''
    document.getElementById('campo-idade').value = ''
    document.getElementById('campo-curso').value = ''
}

function validation() {
    document.getElementById('campo-nome').value = document.getElementById('campo-nome').value.replace(/[^A-zÀ-ú|\s )]/, '');
    document.getElementById('campo-curso').value = document.getElementById('campo-curso').value.replace(/[^A-zÀ-ú|\s]/, '');

}

function add() {
    // pegando dados do form
    contato = get();
    // cria uma row
    if (document.getElementById('campo-nome').value == '') {
        alert('Digite seu nome')
        return;
    } else if (document.getElementById('campo-idade').value == '') {
        alert('Digite seu idade')
        return;
    } else if (document.getElementById('campo-curso').value == '') {
        alert('Digite seu curso')
        return;
    }
    var table = document.getElementById('table');
    var lastRow = table.rows.length;
    var row = table.insertRow()
        //cria as celulas da row
    var cellAux = row.insertCell(0)
    var cellNome = row.insertCell(1)
    var cellIdade = row.insertCell(2)
    var cellCurso = row.insertCell(3)
    var cellEdit = row.insertCell(4)
    var cellDelete = row.insertCell(5)
        // setando valores coletados
    cellAux.innerHTML = lastRow;
    cellNome.innerHTML = contato.nome;
    cellIdade.innerHTML = contato.idade;
    cellCurso.innerHTML = contato.curso;
    cellEdit.innerHTML = '<button class="edit" onclick="edit(this)">Edit</button>';
    cellDelete.innerHTML = '<button class="del" onclick="del(this)">Delete</button>';
    resetForm();

}
// função delete
function del(el) {
    el.parentElement.parentElement.remove();
    // Atualizando valores do campo '#'
    var table = document.getElementById('table');
    var i = 1;
    while (i < table.rows.length) {
        table.rows[i].cells[0].innerHTML = i;
        i += 1;
    }
}

function edit(el) {
    // pegando dados novos do form
    contato = get();
    // setando dados novos
    var cells = el.parentElement.parentElement.cells;
    cells[1].textContent = contato.nome;
    cells[2].textContent = contato.idade;
    cells[3].textContent = contato.curso;
}