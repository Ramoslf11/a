  function Concluir() {
    const nome = document.getElementById("inputNome").value.trim();
    const sobrenome = document.getElementById("inputSobrenome").value.trim();
    const cpf = document.getElementById("inputCPF").value.trim();
    const telefone = document.getElementById("inputTelefone").value.trim();
    const cep = document.getElementById("inputCEP").value.trim();
    const estado = document.getElementById("inputEstado").value.trim();
    const cidade = document.getElementById("inputCity").value.trim();
    const rua = document.getElementById("inputRua").value.trim();
    const numero = document.getElementById("inputNumero").value.trim();
    const moradores = document.getElementById("inputQntdPessoas").value.trim();

    if (nome === "" || sobrenome === "" || cpf === "" || telefone === "" || cep === "" || estado === "" || cidade === "" || rua === "" || numero === "" || moradores === "") {
      alert("Preencha corretamente os campos")
    } else if (moradores < 1) {
      alert("O número de moradores não pode ser inferior a 1")
    } else if (moradores > 8) {
      alert("Infelizmente nosso instituto só consegue atender familia com até 8 integrantes")
    } else if (cpf.length !== 14) {
      alert("O CPF está incorreto");
    } else if (telefone.length !== 15) {
      alert("O número de telefone está incorreto")
    } else if (cep.length !== 9) {
      alert("O CEP está incorreto")
    } else if (numero < 1) {
      alert("O número da residência não pode ser inferior a 1")
    } else {
      alert("Cadastro realizado")
    }
  }
  // Máscara de CPF
  function mascaraCPF(valor) {
    valor = valor.replace(/\D/g, ""); // Remove tudo que não é número
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{2})$/, "$1-$2");
    return valor;
  }

  // Máscara de telefone
  function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
    return valor;
  }

  // Máscara de CEP
  function mascaraCEP(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
  }

  function maisculaLetra(valor) {
    return valor.replace(/\b\w/g, function (letra) {
      return letra.toUpperCase();
    });
  }

  // Eventos: aplicam as máscaras enquanto digita
  document.getElementById("inputCPF").addEventListener("input", function (e) {
    e.target.value = mascaraCPF(e.target.value);
  });

  document.getElementById("inputTelefone").addEventListener("input", function (e) {
    e.target.value = mascaraTelefone(e.target.value);
  });

  document.getElementById("inputCEP").addEventListener("input", function (e) {
    e.target.value = mascaraCEP(e.target.value);
  });

  document.getElementById("inputNome").addEventListener("input", function (e) {
    const cursor = e.target.selectionStart; // salva posição do cursor

    e.target.value = maisculaLetra(e.target.value.toLowerCase()); // aplica a função

    e.target.setSelectionRange(cursor, cursor); // restaura posição do cursor
  });

  document.getElementById("inputSobrenome").addEventListener("input", function (e) {
    const cursor = e.target.selectionStart; // salva posição do cursor

    e.target.value = maisculaLetra(e.target.value.toLowerCase()); // aplica a função

    e.target.setSelectionRange(cursor, cursor); // restaura posição do cursor
  });

  document.getElementById("inputRua").addEventListener("input", function (e) {
    const cursor = e.target.selectionStart; // salva posição do cursor

    e.target.value = maisculaLetra(e.target.value.toLowerCase()); // aplica a função

    e.target.setSelectionRange(cursor, cursor); // restaura posição do cursor
  });