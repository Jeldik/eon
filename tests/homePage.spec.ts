import { test, expect } from '@playwright/test';
import { HomePage } from './pageObjects/homePage.desktop';

test.describe('Home page basic tests', () => {
    const HOME_PAGE_TITLE = 'E.ON Drive - Váš partner pro elektromobilitu';
    const STATION_MAP_TITLE = 'Mapa stanic a dobíjení | EON Drive';
    const ABOUT_US_TITLE = 'O nás - E.ON Drive';

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('has specific url', async ({ page, baseURL }) => {
        expect(page.url()).toBe(`${baseURL}`);
    });

    test('has specific title', async ({ page }) => {
        await expect(page).toHaveTitle(HOME_PAGE_TITLE);
    });

    test.describe('Navigation tests', () => {
        test('Go to station map', async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.header.clickToNavigate(homePage.header.locatorStationMap, 'https://www.eon-drive.cz/mapa/');
            await expect(page).toHaveTitle(STATION_MAP_TITLE);
        });

        test('Go to about us', async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.header.clickToNavigate(homePage.header.locatorStationMap, 'https://www.eon-drive.cz/o-nas/');
            await expect(page).toHaveTitle(ABOUT_US_TITLE);
        });
    });
});