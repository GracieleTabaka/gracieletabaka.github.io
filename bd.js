var bd = openDatabase("meuBd", "1.0", "meu Banco de Dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE formulario (nome TEXT, idade INTEGER)");
});

function salvarInfo() {
    const nomeUsuario = document.getElementById("nome-usuario").value;
    const idadeUsuario = parseInt(
        document.getElementById("idade-usuario").value
    );

    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO formulario (nome, idade) VALUES (?, ?)",
            [nomeUsuario, idadeUsuario]
        );
    });
}
