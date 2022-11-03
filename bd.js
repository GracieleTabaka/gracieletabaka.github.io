var bd = openDatabase("meuBd", "1.0", "meu Banco de Dados", 4080)

bd.transaction(function (criar){
    criar.executeSql(
        "CREATE TABLE formulario (nome TEXT)");
    });

function salvarNome(){
const nomeUsuario = document.getElementById("nome-usuario").value


    bd.transaction (function (inserir){
        inserir.executeSql(
            "INSERT INTO formulario (nome) VALUES (?)", [nomeUsuario]
        );
    });
}