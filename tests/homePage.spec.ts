import { test, expect } from '@playwright/test';
import { HomePage } from './pageObjects/homePage.desktop';
import config from '../playwright.config';

test.describe('Home page basic tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('has specific url', async ({ page, baseURL }) => {
        expect(page.url()).toBe(`${baseURL}`);
    });

    test('has specific title', async ({ page }) => {
        await expect(page).toHaveTitle('E.ON Drive - Váš partner pro elektromobilitu');
    });

    test.describe('Navigation tests', () => {
        test('Go to station map', async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.header.clickToNavigate(homePage.header.locatorStationMap, 'https://www.eon-drive.cz/mapa/');
            await expect(page).toHaveTitle('Mapa stanic a dobíjení | EON Drive');
        });
    });
});