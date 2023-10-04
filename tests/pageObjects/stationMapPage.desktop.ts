import { BasePage } from "./basePage";
import { HeaderDesktop } from "../pageComponents/header.desktop";

export class StationMapPage extends BasePage {
    TITLE = 'Mapa stanic a dobíjení | EON Drive';
    public header: HeaderDesktop = new HeaderDesktop(this.page);
}