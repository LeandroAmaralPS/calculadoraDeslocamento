    const VALOR_COM_CONTRATO = 2.00;
    const VALOR_SEM_CONTRATO = 2.50;

    // Atualiza o valor por km com base na checkbox
    function atualizarValoresContrato() {
      const contratoCheckbox = document.getElementById('contrato');
      const valorPorKmInput = document.getElementById('valorPorKm');

      if (contratoCheckbox.checked) {
          valorPorKmInput.value = VALOR_SEM_CONTRATO.toFixed(2);//(2)casa decimal após a virgula
    } else {
          valorPorKmInput.value = VALOR_COM_CONTRATO.toFixed(2);
      }
    }

    // Calcula o custo total
    function calcular() {
      const quilometragem = parseFloat(document.getElementById('quilometragem').value);
      const valorPorKm = parseFloat(document.getElementById('valorPorKm').value);

      if (isNaN(quilometragem) || isNaN(valorPorKm) || quilometragem <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
        return;
      }
      //campo onde gera o valor total
      const custoTotal = quilometragem * valorPorKm *2;
      document.getElementById('resultado').textContent = `Custo total: R$ ${custoTotal.toFixed(2)}`;
    }

    // config inicial linha 31 checkbox true deixa marcada, false desmarcada
    document.getElementById('contrato').checked = false;
    atualizarValoresContrato();