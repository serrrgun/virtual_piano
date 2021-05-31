import { PianoComponent } from "../../core/PianoComponent";

export class Header extends PianoComponent {
    static className = 'header'
    static tagName = 'header'
    

    toHtml() {
        return `<h1 class="header__title">Virtual Piano</h1>`
    }
} 