import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";
import type { Locator } from "@playwright/test";

export class HomePage extends BasePage {
    public header: HeaderDesktop = new HeaderDesktop(this.page);
    public readonly LocatorH1: Locator = this.page.locator('h1');
    public readonly LocatorInputName: Locator = this.page.locator('input[name="name"]');
    public readonly LocatorInputEmail: Locator = this.page.locator('input[name="email"]');
    public readonly LocatorInputPhone: Locator = this.page.locator('input[name="phone"]');
    public readonly LocatorInputMessage: Locator = this.page.locator('input[name="message"]');
    public readonly LocatorCheckboxPrivacy: Locator = this.page.locator('input[name="privacy"]');
    public readonly LocatorSendBtn: Locator = this.page.locator('.btn.btn-white');
}