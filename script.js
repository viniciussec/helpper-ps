let selectedRow = null

function enviar() {
    let dadosForm = lerDados();
    inserir(dadosForm);
    resetar();
}

function lerDados() {
    let formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["email"] = document.getElementById("email").value;
    formData["cpf"] = document.getElementById("cpf").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["cep"] = document.getElementById("cep").value;
    formData["logradouro"] = document.getElementById("logradouro").value;
    formData["numero"] = document.getElementById("numero").value;
    formData["bairro"] = document.getElementById("bairro").value;
    formData["cidade"] = document.getElementById("cidade").value;
    formData["estado"] = document.getElementById("estado").value;
    return formData;
}

function inserir(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cpf;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telefone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cep;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.logradouro;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.numero;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.bairro;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.cidade;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.estado;
    cell10 = newRow.insertCell(10);
    cell10.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function resetar() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("logradouro").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja deletar este elemento?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}