/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { FuncionarioComponentsPage, FuncionarioDeleteDialog, FuncionarioUpdatePage } from './funcionario.page-object';

const expect = chai.expect;

describe('Funcionario e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let funcionarioUpdatePage: FuncionarioUpdatePage;
    let funcionarioComponentsPage: FuncionarioComponentsPage;
    let funcionarioDeleteDialog: FuncionarioDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Funcionarios', async () => {
        await navBarPage.goToEntity('funcionario');
        funcionarioComponentsPage = new FuncionarioComponentsPage();
        expect(await funcionarioComponentsPage.getTitle()).to.eq('testeJHipsterApp.funcionario.home.title');
    });

    it('should load create Funcionario page', async () => {
        await funcionarioComponentsPage.clickOnCreateButton();
        funcionarioUpdatePage = new FuncionarioUpdatePage();
        expect(await funcionarioUpdatePage.getPageTitle()).to.eq('testeJHipsterApp.funcionario.home.createOrEditLabel');
        await funcionarioUpdatePage.cancel();
    });

    it('should create and save Funcionarios', async () => {
        const nbButtonsBeforeCreate = await funcionarioComponentsPage.countDeleteButtons();

        await funcionarioComponentsPage.clickOnCreateButton();
        await funcionarioUpdatePage.setNomeInput('nome');
        expect(await funcionarioUpdatePage.getNomeInput()).to.eq('nome');
        await funcionarioUpdatePage.setCpfInput('5');
        expect(await funcionarioUpdatePage.getCpfInput()).to.eq('5');
        await funcionarioUpdatePage.setDataNascimentoInput('dataNascimento');
        expect(await funcionarioUpdatePage.getDataNascimentoInput()).to.eq('dataNascimento');
        await funcionarioUpdatePage.setEmpresaContratadoInput('empresaContratado');
        expect(await funcionarioUpdatePage.getEmpresaContratadoInput()).to.eq('empresaContratado');
        await funcionarioUpdatePage.empresaSelectLastOption();
        await funcionarioUpdatePage.empresaSelectLastOption();
        await funcionarioUpdatePage.save();
        expect(await funcionarioUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await funcionarioComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Funcionario', async () => {
        const nbButtonsBeforeDelete = await funcionarioComponentsPage.countDeleteButtons();
        await funcionarioComponentsPage.clickOnLastDeleteButton();

        funcionarioDeleteDialog = new FuncionarioDeleteDialog();
        expect(await funcionarioDeleteDialog.getDialogTitle()).to.eq('testeJHipsterApp.funcionario.delete.question');
        await funcionarioDeleteDialog.clickOnConfirmButton();

        expect(await funcionarioComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
