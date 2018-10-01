import { element, by, ElementFinder } from 'protractor';

export class EmpresaComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-empresa div table .btn-danger'));
    title = element.all(by.css('jhi-empresa div h2#page-heading span')).first();

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

export class EmpresaUpdatePage {
    pageTitle = element(by.id('jhi-empresa-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    cnpjInput = element(by.id('field_cnpj'));
    razaoSocialInput = element(by.id('field_razaoSocial'));
    nomeFantasiaInput = element(by.id('field_nomeFantasia'));
    nomeResponsavelInput = element(by.id('field_nomeResponsavel'));
    ruaInput = element(by.id('field_rua'));
    numeroInput = element(by.id('field_numero'));
    bairroInput = element(by.id('field_bairro'));
    cidadeInput = element(by.id('field_cidade'));
    estadoInput = element(by.id('field_estado'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setCnpjInput(cnpj) {
        await this.cnpjInput.sendKeys(cnpj);
    }

    async getCnpjInput() {
        return this.cnpjInput.getAttribute('value');
    }

    async setRazaoSocialInput(razaoSocial) {
        await this.razaoSocialInput.sendKeys(razaoSocial);
    }

    async getRazaoSocialInput() {
        return this.razaoSocialInput.getAttribute('value');
    }

    async setNomeFantasiaInput(nomeFantasia) {
        await this.nomeFantasiaInput.sendKeys(nomeFantasia);
    }

    async getNomeFantasiaInput() {
        return this.nomeFantasiaInput.getAttribute('value');
    }

    async setNomeResponsavelInput(nomeResponsavel) {
        await this.nomeResponsavelInput.sendKeys(nomeResponsavel);
    }

    async getNomeResponsavelInput() {
        return this.nomeResponsavelInput.getAttribute('value');
    }

    async setRuaInput(rua) {
        await this.ruaInput.sendKeys(rua);
    }

    async getRuaInput() {
        return this.ruaInput.getAttribute('value');
    }

    async setNumeroInput(numero) {
        await this.numeroInput.sendKeys(numero);
    }

    async getNumeroInput() {
        return this.numeroInput.getAttribute('value');
    }

    async setBairroInput(bairro) {
        await this.bairroInput.sendKeys(bairro);
    }

    async getBairroInput() {
        return this.bairroInput.getAttribute('value');
    }

    async setCidadeInput(cidade) {
        await this.cidadeInput.sendKeys(cidade);
    }

    async getCidadeInput() {
        return this.cidadeInput.getAttribute('value');
    }

    async setEstadoInput(estado) {
        await this.estadoInput.sendKeys(estado);
    }

    async getEstadoInput() {
        return this.estadoInput.getAttribute('value');
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

export class EmpresaDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-empresa-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-empresa'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
