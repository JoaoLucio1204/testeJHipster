/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { EmpresaComponentsPage, EmpresaDeleteDialog, EmpresaUpdatePage } from './empresa.page-object';

const expect = chai.expect;

describe('Empresa e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let empresaUpdatePage: EmpresaUpdatePage;
    let empresaComponentsPage: EmpresaComponentsPage;
    let empresaDeleteDialog: EmpresaDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Empresas', async () => {
        await navBarPage.goToEntity('empresa');
        empresaComponentsPage = new EmpresaComponentsPage();
        expect(await empresaComponentsPage.getTitle()).to.eq('testeJHipsterApp.empresa.home.title');
    });

    it('should load create Empresa page', async () => {
        await empresaComponentsPage.clickOnCreateButton();
        empresaUpdatePage = new EmpresaUpdatePage();
        expect(await empresaUpdatePage.getPageTitle()).to.eq('testeJHipsterApp.empresa.home.createOrEditLabel');
        await empresaUpdatePage.cancel();
    });

    it('should create and save Empresas', async () => {
        const nbButtonsBeforeCreate = await empresaComponentsPage.countDeleteButtons();

        await empresaComponentsPage.clickOnCreateButton();
        await empresaUpdatePage.setCnpjInput('5');
        expect(await empresaUpdatePage.getCnpjInput()).to.eq('5');
        await empresaUpdatePage.setRazaoSocialInput('razaoSocial');
        expect(await empresaUpdatePage.getRazaoSocialInput()).to.eq('razaoSocial');
        await empresaUpdatePage.setNomeFantasiaInput('nomeFantasia');
        expect(await empresaUpdatePage.getNomeFantasiaInput()).to.eq('nomeFantasia');
        await empresaUpdatePage.setNomeResponsavelInput('nomeResponsavel');
        expect(await empresaUpdatePage.getNomeResponsavelInput()).to.eq('nomeResponsavel');
        await empresaUpdatePage.setRuaInput('rua');
        expect(await empresaUpdatePage.getRuaInput()).to.eq('rua');
        await empresaUpdatePage.setNumeroInput('5');
        expect(await empresaUpdatePage.getNumeroInput()).to.eq('5');
        await empresaUpdatePage.setBairroInput('bairro');
        expect(await empresaUpdatePage.getBairroInput()).to.eq('bairro');
        await empresaUpdatePage.setCidadeInput('cidade');
        expect(await empresaUpdatePage.getCidadeInput()).to.eq('cidade');
        await empresaUpdatePage.setEstadoInput('estado');
        expect(await empresaUpdatePage.getEstadoInput()).to.eq('estado');
        await empresaUpdatePage.save();
        expect(await empresaUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await empresaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Empresa', async () => {
        const nbButtonsBeforeDelete = await empresaComponentsPage.countDeleteButtons();
        await empresaComponentsPage.clickOnLastDeleteButton();

        empresaDeleteDialog = new EmpresaDeleteDialog();
        expect(await empresaDeleteDialog.getDialogTitle()).to.eq('testeJHipsterApp.empresa.delete.question');
        await empresaDeleteDialog.clickOnConfirmButton();

        expect(await empresaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
