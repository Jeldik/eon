import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";

export class ProductsPage extends BasePage {
    TITLE = 'Produkty - E.ON Drive';
    public header: HeaderDesktop = new HeaderDesktop(this.page);

    async visit() {
        await this.header.locatorIWantCharger.click();
    }
}