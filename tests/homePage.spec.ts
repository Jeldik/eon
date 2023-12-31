import { test, expect } from '@playwright/test';
import { HomePage } from './pageObjects/homePage.desktop';
import { StationMapPage } from './pageObjects/stationMapPage.desktop';
import { AboutUsPage } from './pageObjects/aboutUsPage.desktop';
import { ContactsPage } from './pageObjects/contactsPage.desktop';
import { ProductsPage } from './pageObjects/productsPage.desktop';
import { ForDriversPage } from './pageObjects/forDriversPage.desktop';

let homePage: HomePage;
let stationMapPage: StationMapPage;
let aboutUsPage: AboutUsPage;
let contactsPage: ContactsPage;
let productsPage: ProductsPage;
let forDriversPage: ForDriversPage

test.describe('Home page basic tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        homePage = new HomePage(page);
    });

    test('has specific url', async ({ page, baseURL }) => {
        expect(page.url()).toBe(`${baseURL}`);
    });

    test('has specific title', async ({ page }) => {
        await expect(page).toHaveTitle(homePage.TITLE);
    });

    test('H1 is visible', async () => {
        await homePage.isElementVisible(homePage.LocatorH1);
    });

    test.describe('Navigation tests', () => {
        test('Go to station map', async ({ page }) => {
            stationMapPage = new StationMapPage(page);
            stationMapPage.visit();
            await expect(page).toHaveTitle(stationMapPage.TITLE);
        });

        test('Go to about us', async ({ page }) => {
            aboutUsPage = new AboutUsPage(page);
            aboutUsPage.visit();
            await expect(page).toHaveTitle(aboutUsPage.TITLE);
        });

        test('Go to contacts', async ({ page }) => {
            contactsPage = new ContactsPage(page);
            contactsPage.visit();
            await expect(page).toHaveTitle(contactsPage.TITLE);
        });

        test('Go to products', async ({ page }) => {
            productsPage = new ProductsPage(page);
            productsPage.visit();
            await expect(page).toHaveTitle(productsPage.TITLE);
        });

        test('Go to for drivers', async ({ page, baseURL }) => {
            forDriversPage = new ForDriversPage(page);
            forDriversPage.visit();
            await expect(page).toHaveTitle(forDriversPage.TITLE);
        });
    });

    test('Fill the form - positive', async ({ page }) => {
        await homePage.LocatorInputName.fill('Tomas Jelinek');
        await homePage.LocatorInputEmail.fill('tomas.jelinek@hotmail.cz');
        await homePage.LocatorInputPhone.fill('732 183 674');
        await homePage.LocatorInputMessage.fill('Need help with testing');
        await homePage.LocatorCheckboxPrivacy.check({ force: true });
        expect(await homePage.LocatorCheckboxPrivacy.isChecked()).toBeTruthy();

        // await homePage.LocatorSendBtn.click();
    });

    test('Fill the form - negative - empty message', async ({ page }) => {
        await homePage.LocatorInputName.fill('Tomas Jelinek');
        await homePage.LocatorInputEmail.fill('tomas.jelinek@hotmail.cz');
        await homePage.LocatorInputPhone.fill('732 183 674');
        await homePage.LocatorCheckboxPrivacy.check({ force: true });
        expect(await homePage.LocatorCheckboxPrivacy.isChecked()).toBeTruthy();
        await homePage.LocatorSendBtn.click();

        await page.locator('input[name="privacy"[required]');
    });
});