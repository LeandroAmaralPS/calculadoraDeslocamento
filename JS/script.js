    const VALOR_COM_CONTRATO = 2.00;
    const VALOR_SEM_CONTRATO = 2.50;
    /*const PILHALACRE = 54.00;
    const CANETA = 22.00;
    const CHAVE = 22.00;
    const DISPLAYREP = 275.00;
    const FONTE = 162.00;
    const LEITORBIOMETRICO = 292.00;
    const IMPRESSORA = 690.00;
    const BOTOESPLACA = 45.00;
    const NOBREAK = 238.00;*/
    let valorItensAdicionais = 0;
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
    function atualizarItens() {
      const checkboxes = document.querySelectorAll('#itensAdicionais input[type="checkbox"]');

      valorItensAdicionais = 0; // restart do valor

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          valorItensAdicionais += parseFloat(checkbox.value);
        }
      });
    }
    // Calcula o custo total
    function calcular() {
      const quilometragem = parseFloat(document.getElementById('quilometragem').value);
      const valorPorKm = parseFloat(document.getElementById('valorPorKm').value);      
      
      if (isNaN(quilometragem) || isNaN(valorPorKm) || quilometragem <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
        return;
      }
    
      // Calcula os custos
      const custoDeslocamento = quilometragem * valorPorKm * 2;
      const custoTotal = custoDeslocamento + valorItensAdicionais;
    
      // Atualiza o conteúdo do resultado com elementos HTML
      document.getElementById('resultado').innerHTML = `
        <p><strong>Custo de deslocamento:</strong> R$ ${custoDeslocamento.toFixed(2)}</p>
        <p><strong>Custo de itens adicionais:</strong> R$ ${valorItensAdicionais.toFixed(2)}</p>
        <p><strong>Custo total:</strong> R$ ${custoTotal.toFixed(2)}</p>
      `;
    }
    // config inicial linha 31 checkbox true deixa marcada, false desmarcada
    document.getElementById('contrato').checked = false;
    atualizarValoresContrato();
    atualizarValoresPecas();