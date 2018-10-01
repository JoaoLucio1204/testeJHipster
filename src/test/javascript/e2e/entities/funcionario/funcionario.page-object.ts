import { element, by, ElementFinder } from 'protractor';

export class FuncionarioComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-funcionario div table .btn-danger'));
    title = element.all(by.css('jhi-funcionario div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class FuncionarioUpdatePage {
    pageTitle = element(by.id('jhi-funcionario-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nomeInput = element(by.id('field_nome'));
    cpfInput = element(by.id('field_cpf'));
    dataNascimentoInput = element(by.id('field_dataNascimento'));
    empresaContratadoInput = element(by.id('field_empresaContratado'));
    empresaSelect = element(by.id('field_empresa'));
    empresaSelect = element(by.id('field_empresa'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNomeInput(nome) {
        await this.nomeInput.sendKeys(nome);
    }

    async getNomeInput() {
        return this.nomeInput.getAttribute('value');
    }

    async setCpfInput(cpf) {
        await this.cpfInput.sendKeys(cpf);
    }

    async getCpfInput() {
        return this.cpfInput.getAttribute('value');
    }

    async setDataNascimentoInput(dataNascimento) {
        await this.dataNascimentoInput.sendKeys(dataNascimento);
    }

    async getDataNascimentoInput() {
        return this.dataNascimentoInput.getAttribute('value');
    }

    async setEmpresaContratadoInput(empresaContratado) {
        await this.empresaContratadoInput.sendKeys(empresaContratado);
    }

    async getEmpresaContratadoInput() {
        return this.empresaContratadoInput.getAttribute('value');
    }

    async empresaSelectLastOption() {
        await this.empresaSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async empresaSelectOption(option) {
        await this.empresaSelect.sendKeys(option);
    }

    getEmpresaSelect(): ElementFinder {
        return this.empresaSelect;
    }

    async getEmpresaSelectedOption() {
        return this.empresaSelect.element(by.css('option:checked')).getText();
    }

    async empresaSelectLastOption() {
        await this.empresaSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async empresaSelectOption(option) {
        await this.empresaSelect.sendKeys(option);
    }

    getEmpresaSelect(): ElementFinder {
        return this.empresaSelect;
    }

    async getEmpresaSelectedOption() {
        return this.empresaSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class FuncionarioDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-funcionario-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-funcionario'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
