document.addEventListener("DOMContentLoaded", function () {
      const divItensAdicionais = document.getElementById("itensAdicionais");

      // Array de itens e valores
      const itens = [
            { valor: "10.90", descricao: "RJ45 (R$ 10.90)"},
            { valor: "54.00", descricao: "Pilha Lacre (R$ 54.00)" },
            { valor: "22.00", descricao: "Caneta (R$ 22.00)" },
            { valor: "22.00", descricao: "Chave (R$ 22.00)" },
            { valor: "275.00", descricao: "Display REP (R$ 275.00)" },
            { valor: "162.00", descricao: "Fonte (R$ 162.00)" },
            { valor: "292.00", descricao: "Leitor Biométrico (R$ 292.00)" },
            { valor: "690.00", descricao: "Impressora (R$ 690.00)" },
            { valor: "45.00", descricao: "Botões Placa (R$ 45.00)" },
            { valor: "238.00", descricao: "Nobreak (R$ 238.00)" },
            { valor: "200.00", descricao: "Hora técnica sem Contrato (R$200.00)" },
      ];     
      // Laço para criar e adicionar cada checkbox e label na div
      itens.forEach(item => {
            // Cria o elemento <label>
            const label = document.createElement("label");

            // Cria o elemento <input> do tipo checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = item.valor;
            checkbox.setAttribute("onchange", "atualizarItens()"); // Adiciona o evento onchange (selecionar chbox)

            // Adiciona o checkbox e o texto da descrição dentro do <label>
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + item.descricao));

            // Adiciona o label na div
            divItensAdicionais.appendChild(label);

            /* Adiciona uma quebra de linha para separar os itens (opcional)
            divItensAdicionais.appendChild(document.createElement("br"));*/
      });
});