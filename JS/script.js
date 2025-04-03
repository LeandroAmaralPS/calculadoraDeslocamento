const VALOR_COM_CONTRATO = 2.00;
const VALOR_SEM_CONTRATO = 2.50;
let valorItensAdicionais = 0;

// Atualiza o valor por km com base na checkbox
function atualizarValoresContrato() {
    const contratoCheckbox = document.getElementById('contrato');  
    const valorPorKmInput = document.getElementById('valorPorKm');

    if (contratoCheckbox.checked) {
        valorPorKmInput.value = VALOR_SEM_CONTRATO.toFixed(2);  // (2) casa decimal após a vírgula
    } else {
        valorPorKmInput.value = VALOR_COM_CONTRATO.toFixed(2);
    }
}
// Atualiza os itens selecionados
function atualizarItens() {
    const checkboxes = document.querySelectorAll('#itensAdicionais input[type="checkbox"]');
    valorItensAdicionais = 0; // reinicia o valor

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            // Verifica se o checkbox é o "Cabo de Rede"
            if (checkbox.id === "caboRede") {
                // Quando o Cabo de Rede for selecionado, calcula o valor total de acordo com quantidade de metros
                const quantidadeMetros = parseFloat(document.getElementById('quantidadeMetrosCabo').value) || 0;
                const valorMetroCabo = 8;  // R$ 8,00 por metro
                valorItensAdicionais += valorMetroCabo * quantidadeMetros; // Soma o valor ao total
            } else {
                valorItensAdicionais += parseFloat(checkbox.value);
            }
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

// Configuração inicial
document.getElementById('contrato').checked = false;
atualizarValoresContrato();
