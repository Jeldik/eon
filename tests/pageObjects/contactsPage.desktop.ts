import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";

export class ContactsPage extends BasePage {
    TITLE = 'Kontakt - E.ON Drive';
    public header: HeaderDesktop = new HeaderDesktop(this.page);

    async visit() {
        await this.header.locatorContacts.click();
    }
}