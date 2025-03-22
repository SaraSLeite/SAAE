document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-installation-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const code = document.getElementById('installation-code').value;
        const cpf = document.getElementById('cpf').value;
        const cnpj = document.getElementById('cnpj').value;
        // Aqui você pode adicionar a lógica para processar os dados
        console.log('Código:', code, 'CPF:', cpf, 'CNPJ:', cnpj);
    });

    const getProButton = document.getElementById('get-pro');
    getProButton.addEventListener('click', function() {
        // Lógica para o botão Get Pro
        console.log('Get Pro clicked');
    });
});

// Adicione estas linhas no final do arquivo
const app = new Controller(new Model(), new View());
app.initialize();