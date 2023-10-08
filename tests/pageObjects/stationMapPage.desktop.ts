import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";
import { HomePage } from "./homePage.desktop";

export class StationMapPage extends BasePage {
    TITLE = 'Mapa stanic a dobíjení | EON Drive';
    public header: HeaderDesktop = new HeaderDesktop(this.page);
    public homePage: HomePage = new HomePage(this.page);

    async visit() {
        await this.header.locatorStationMap.click();
    }
}