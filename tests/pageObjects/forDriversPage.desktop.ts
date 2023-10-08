import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";

export class ForDriversPage extends BasePage {
    TITLE = 'Pro řidiče - E.ON Drive';
    public header: HeaderDesktop = new HeaderDesktop(this.page);

    async visit() {
        await this.header.locatorForDrivers.click();
    }
}