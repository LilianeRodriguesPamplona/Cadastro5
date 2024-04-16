// Código JavaScript para interação com o formulário e listagem de produtos

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const btnCadastrar = document.querySelector('.btn-cadastrar');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nomeProduto').value;
    const descricao = document.getElementById('descricaoProduto').value;
    const valor = document.getElementById('valorProduto').value;
    const disponivel = document.getElementById('disponivelVenda').value;
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${nome}</td>
        <td>${valor}</td>
    `;
    
    tbody.appendChild(tr);
    
    // Ordena os produtos por valor
    [...tbody.rows]
        .sort((a, b) => a.cells[1].textContent - b.cells[1].textContent)
        .forEach(row => tbody.appendChild(row));
    
    form.reset();
});

btnCadastrar.addEventListener('click', function() {
    tbody.innerHTML = ''; // Limpa a lista de produtos
});

