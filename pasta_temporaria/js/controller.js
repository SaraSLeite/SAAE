import { cpf, cnpj } from 'cpf-cnpj-validator'; // Importa a biblioteca

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Inicializa os eventos
        this.initialize();
    }

    initialize() {
        // Captura o formulário de adicionar instalação
        const form = document.getElementById('add-installation-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const code = document.getElementById('installation-code').value;
            const cpfValue = document.getElementById('cpf').value;
            const cnpjValue = document.getElementById('cnpj').value;

            // Validações
            if (!this.validarCodigoInstalacao(code)) {
                this.view.showMessage('Código de instalação inválido!');
                return;
            }

            if (!cpf.isValid(cpfValue)) { // Valida CPF
                this.view.showMessage('CPF inválido!');
                return;
            }

            if (!cnpj.isValid(cnpjValue)) { // Valida CNPJ
                this.view.showMessage('CNPJ inválido!');
                return;
            }

            // Adiciona a instalação no Model
            this.model.addInstallation(code, cpfValue, cnpjValue);

            // Exibe uma mensagem de sucesso
            this.view.showMessage('Instalação adicionada com sucesso!');

            // Limpa o formulário
            this.view.clearForm();
        });

        // Atualiza os dados de energia na View
        const energyData = this.model.getEnergyData();
        this.view.renderEnergyData(energyData);

        // Captura o clique no botão "Obter Pro"
        const getProButton = document.getElementById('get-pro');
        getProButton.addEventListener('click', () => {
            this.view.showMessage('Você clicou em Obter Pro!');
        });
    }

    // Função para validar o código de instalação (exemplo básico)
    validarCodigoInstalacao(code) {
        return /^\d{12}$/.test(code); // Verifica se o código tem 12 dígitos
    }
}