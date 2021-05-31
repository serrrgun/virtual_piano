import { PianoComponent } from "../../core/PianoComponent";

export class Controls extends PianoComponent {
    static className = 'controls'
    static tagName = 'div'
    static wrapeprTagName = 'main'
    static wrapperClassName = 'main'

    constructor($root, options) {
        super($root, {
            name: 'Controls',
            listeners: ['click', 'fullscreenchange'],
            ...options
        })
    }

    toHtml() {
        return `<button class="controls__button controls__button--active" data-type="control" data-control="notes">Notes</button>
                <button class="controls__button" data-type="control" data-control="letters">Letters</button>
                <button class="controls__fullsize" data-type="fullscreen"></button>`
    }

    onClick(event) {
        if(event.target.dataset.type === 'control') {
            this.observer.dispatch('controls:click', event.target.dataset.control)
            this.$root.findAll('[data-type="control"]')
                .forEach(element => element.classList.remove('controls__button--active'));
            event.target.classList.add('controls__button--active')
        }
        
        
        if(event.target.dataset.type === 'fullscreen') {
            event.target.classList.toggle('controls__fullsize--active')
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                document.documentElement.requestFullscreen();
            }
        }
    }

    onFullscreenchange() {
        if (document.fullscreenElement) {
            return
        } else {
            this.$root.find('[data-type="fullscreen"]').classList.remove('controls__fullsize--active')
        }
    }
}