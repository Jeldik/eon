import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";

export class AboutUsPage extends BasePage {
    TITLE = 'O nás - E.ON Drive';
    public header: HeaderDesktop = new HeaderDesktop(this.page);
}