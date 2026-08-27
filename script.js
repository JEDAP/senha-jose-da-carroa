function mostrarSenha() {

    const campo = document.getElementById("senha");

    if (campo.type === "password") {
        campo.type = "text";
    } else {
        campo.type = "password";
    }
}


function analisarSenha() {

    const senha = document.getElementById("senha").value;

    if (senha.length === 0) {

        alert("Digite uma senha primeiro!");

        return;
    }

    let pontos = 0;

    // Verifica o tamanho
    const tamanho = senha.length;

    if (tamanho >= 8) {
        pontos += 2;
    }

    if (tamanho >= 12) {
        pontos += 2;
    }


    // Verifica letras maiúsculas
    const temMaiuscula = /[A-Z]/.test(senha);

    if (temMaiuscula) {
        pontos += 1;
    }


    // Verifica letras minúsculas
    const temMinuscula = /[a-z]/.test(senha);

    if (temMinuscula) {
        pontos += 1;
    }


    // Verifica números
    const temNumero = /[0-9]/.test(senha);

    if (temNumero) {
        pontos += 1;
    }


    // Verifica símbolos
    const temSimbolo = /[^A-Za-z0-9]/.test(senha);

    if (temSimbolo) {
        pontos += 2;
    }


    // Calcula a quantidade de caracteres possíveis
    let caracteresPossiveis = 0;

    if (temMinuscula) {
        caracteresPossiveis += 26;
    }

    if (temMaiuscula) {
        caracteresPossiveis += 26;
    }

    if (temNumero) {
        caracteresPossiveis += 10;
    }

    if (temSimbolo) {
        caracteresPossiveis += 32;
    }


    // Calcula combinações usando a matemática
    let combinacoes = Math.pow(
        caracteresPossiveis,
        tamanho
    );


    // Limita o resultado para evitar números gigantes
    let combinacoesTexto;

    if (combinacoes >= 1000000000000) {

        combinacoesTexto =
            combinacoes.toExponential(2);

    } else {

        combinacoesTexto =
            Math.floor(combinacoes).toLocaleString("pt-BR");
    }


    // Determina o nível
    let nivel;
    let classe;
    let porcentagem;
    let dica;

    if (pontos <= 3) {

        nivel = "🔴 Senha fraca";
        classe = "fraca";
        porcentagem = 30;

        dica =
            "💡 Dica: aumente o tamanho e misture letras, números e símbolos.";

    } else if (pontos <= 6) {

        nivel = "🟡 Senha média";
        classe = "media";
        porcentagem = 65;

        dica =
            "💡 Dica: tente usar pelo menos 12 caracteres e mais símbolos.";

    } else {

        nivel = "🟢 Senha forte";
        classe = "forte";
        porcentagem = 100;

        dica =
            "🛡️ Excelente! Sua senha possui uma boa variedade de caracteres.";
    }


    // Mostra o resultado
    document.getElementById("resultado")
        .classList.remove("escondido");

    document.getElementById("nivel")
        .textContent = nivel;

    const barra = document.getElementById("forca");

    barra.className = "";

    barra.classList.add(classe);

    barra.style.width = porcentagem + "%";


    document.getElementById("pontuacao")
        .textContent =
        "Pontuação de segurança: " + pontos + "/9";


    document.getElementById("combinacoes")
        .textContent =
        "🔢 Combinações matemáticas possíveis: " +
        combinacoesTexto;


    document.getElementById("tempo")
        .textContent =
        "📐 Fórmula utilizada: " +
        caracteresPossiveis +
        "^" +
        tamanho;


    // Características
    document.getElementById("tamanho")
        .textContent =
        "📏 Tamanho: " + tamanho + " caracteres";


    document.getElementById("maiusculas")
        .textContent =
        temMaiuscula
            ? "✅ Possui letras maiúsculas"
            : "❌ Não possui letras maiúsculas";


    document.getElementById("minusculas")
        .textContent =
        temMinuscula
            ? "✅ Possui letras minúsculas"
            : "❌ Não possui letras minúsculas";


    document.getElementById("numeros")
        .textContent =
        temNumero
            ? "✅ Possui números"
            : "❌ Não possui números";


    document.getElementById("simbolos")
        .textContent =
        temSimbolo
            ? "✅ Possui símbolos"
            : "❌ Não possui símbolos";


    document.getElementById("dica")
        .textContent = dica;
}
