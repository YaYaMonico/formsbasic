(function () {
  const cpfMask = document.getElementById('cpf');
  const dataNascMask = document.getElementById('datNasc');
  const btnReset = document.getElementById('reset');
  const inputs = document.querySelectorAll('input');


  // Adiciona um ouvinte de evento de entrada para chamar a função de formatação
  cpfMask.addEventListener('input', ev => {
    const apagarLetras = ev.target.value.replace(/\D/g, '');// Remove qualquer caracter que não seja um dígito
    // console.log(ev.target.value)
    // Limita a entrada a 11 dígitos
    if (apagarLetras.length > 11) {
      ev.target.value = apagarLetras.slice(0, 11);
      return ; // Retorna para evitar a formatação adicional
    }
    // Verifica se o valor digitado possui 11 dígitos
    if (apagarLetras.length === 11){
      // Formata o CPF com a máscara
      const formatoCPF = `${apagarLetras.slice(0, 3)}.${apagarLetras.slice(3, 6)}.${apagarLetras.slice(6, 9)}-${apagarLetras.slice(9)}`;

      ev.target.value = formatoCPF;// Define o valor formatado no campo de entrada
    } else {
      ev.target.value = apagarLetras;// Se o valor não possui 11 dígitos, apenas exibe o valor digitado
    }
  });

  dataNascMask.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

    if (value.length > 8) {
      // Limita o tamanho da data a 8 caracteres (DDMMAAAA)
      value = value.slice(0, 8);
    }

    if (value.length >= 2) {
      // Insere a primeira barra após o dia (DD/MM)
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (value.length >= 5) {
      // Insere a segunda barra após o mês (DD/MM/AA)
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }

    this.value = value;
  });

  btnReset.addEventListener('click', ev => {
    inputs.value = "";
  });

})();

