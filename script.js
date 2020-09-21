let selectedRow = null

function enviar() {
    if (checarInputVazio()) {
        let dadosForm = lerDados();
        inserir(dadosForm);
        resetar();
    }
    else {
        alert("Você não preencheu todos os campos!");
    }
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
    cell10.innerHTML = `<a onClick="deletar(this)">Deletar</a>`;
}

function resetar() {
    document.querySelectorAll(".campo").forEach((i) => {
        i.value = "";
    })
    selectedRow = null;
}

function deletar(td) {
    if (confirm('Tem certeza que deseja deletar este elemento?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function checarInputVazio() {
    check = true;
    document.querySelectorAll("input").forEach((i) => {
        if (i.value == "") {
            check = false;
        }
    })
    return check;
}