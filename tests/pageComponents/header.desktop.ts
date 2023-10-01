import { BasePage } from "../pageObjects/basePage";
import type { Locator } from "@playwright/test";

export class HeaderDesktop extends BasePage {
   public readonly locatorLogo: Locator = this.page.locator("#logo");
   public readonly locatorStationMap: Locator = this.page.locator("#menu-item-37");
   public readonly locatorAboutUs: Locator = this.page.locator("#menu-item-36");
   public readonly locatorContacts: Locator = this.page.locator("#menu-item-35");
   public readonly locatorIWantCharger: Locator = this.page.locator("#header-buttons > a[href='/produkty/']");
   public readonly locatorForDrivers: Locator = this.page.locator("#header-buttons > a[href='/pro-ridice/']");

}