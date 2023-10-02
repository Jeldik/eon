import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";
import type { Locator } from "@playwright/test";

export class HomePage extends BasePage {
    public header: HeaderDesktop = new HeaderDesktop(this.page);
}