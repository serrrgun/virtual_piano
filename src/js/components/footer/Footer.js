import { PianoComponent } from "../../core/PianoComponent";

export class Footer extends PianoComponent {
    static className = 'footer'
    static tagName = 'footer'

    toHtml() {
        return `
                <div class="footer__container">
                    <a href="https://github.com/serrrgun" class="footer__link-github" target="blank">github</a>
                    <a href="https://rs.school/js/" class="footer__link-rss" target="blank"><span>'21</span></a>
                </div>`
    }
}