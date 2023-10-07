import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/homePage.desktop';
import { StationMapPage } from '../pageObjects/stationMapPage.desktop';
import { AboutUsPage } from '../pageObjects/aboutUsPage.desktop';
import { ContactsPage } from '../pageObjects/contactsPage.desktop';
import { ProductsPage } from '../pageObjects/productsPage.desktop';
import { ForDriversPage } from '../pageObjects/forDriversPage.desktop';

let homePage: HomePage;
let stationMapPage: StationMapPage;
let aboutUsPage: AboutUsPage;
let contactsPage: ContactsPage;
let productsPage: ProductsPage;
let forDriversPage: ForDriversPage

test.describe('Visual tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        homePage = new HomePage(page);
    });

    test('HomePage', async ({ page }) => {
        await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixelRatio: 0.1 });
    });

    test('StationMapPage', async ({ page }) => {
        stationMapPage = new StationMapPage(page);
        stationMapPage.visit();
        await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixelRatio: 0.4 });
    });
});