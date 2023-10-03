import { test, expect } from '@playwright/test';
import { HomePage } from './pageObjects/homePage.desktop';

let homePage: HomePage;

test.describe('Home page basic tests', () => {
    const TITLE_HOME_PAGE = 'E.ON Drive - Váš partner pro elektromobilitu';
    const TITLE_STATION_MAP = 'Mapa stanic a dobíjení | EON Drive';
    const TITLE_ABOUT_US = 'O nás - E.ON Drive';
    const TITLE_CONTACTS = 'Kontakt - E.ON Drive';
    const TITLE_PRODUCTS = 'Produkty - E.ON Drive';
    const TITLE_FOR_DRIVERS = 'Pro řidiče - E.ON Drive';

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        homePage = new HomePage(page);
    });

    test('has specific url', async ({ page, baseURL }) => {
        expect(page.url()).toBe(`${baseURL}`);
    });

    test('has specific title', async ({ page }) => {
        await expect(page).toHaveTitle(TITLE_HOME_PAGE);
    });

    test.describe('Navigation tests', () => {
        test('Go to station map', async ({ page, baseURL }) => {
            await homePage.header.clickToNavigate(homePage.header.locatorStationMap, `${baseURL}` + 'mapa/');
            await expect(page).toHaveTitle(TITLE_STATION_MAP);
        });

        test('Go to about us', async ({ page, baseURL }) => {
            await homePage.header.clickToNavigate(homePage.header.locatorAboutUs, `${baseURL}` + 'o-nas/');
            await expect(page).toHaveTitle(TITLE_ABOUT_US);
        });

        test('Go to contacts', async ({ page, baseURL }) => {
            await homePage.header.clickToNavigate(homePage.header.locatorContacts, `${baseURL}` + 'kontakt/');
            await expect(page).toHaveTitle(TITLE_CONTACTS);
        });

        test('Go to products', async ({ page, baseURL }) => {
            await homePage.header.clickToNavigate(homePage.header.locatorIWantCharger, `${baseURL}` + 'produkty/');
            await expect(page).toHaveTitle(TITLE_PRODUCTS);
        });

        test('Go to for drivers', async ({ page, baseURL }) => {
            await homePage.header.clickToNavigate(homePage.header.locatorForDrivers, `${baseURL}` + 'pro-ridice/');
            await expect(page).toHaveTitle(TITLE_FOR_DRIVERS);
        });
    });

    test('Fill the form - positive', async ({ page }) => {
        await homePage.LocatorInputName.fill('Tomas Jelinek');
        await homePage.LocatorInputEmail.fill('tomas.jelinek@hotmail.cz');
        await homePage.LocatorInputPhone.fill('732 183 674');
        await homePage.LocatorInputMessage.fill('Need help with testing');
        await homePage.LocatorCheckboxPrivacy.check();
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