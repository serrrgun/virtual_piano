import { PianoComponent } from "../../core/PianoComponent";
import { DATA } from "../../data/data";
import { getKeyTemplate } from "./pianoKey.template";


export class PianoKeys extends PianoComponent {
    static className = 'piano'
    static tagName = 'div'

    constructor($root, options) {
        super($root, {
            name: 'PianoKeys',
            listeners: ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'contextmenu', 'keydown', 'keyup'],
            ...options
        })
        this.flag = false
        this.data = DATA
    }

    toHtml() {
        
        return getKeyTemplate(this.data)
                
    }

    init() {
        super.init()
        
        this.observer.subscribe('controls:click', data => {
            this.changesLetters(data)
        })
    }

    changesLetters(button) {
        const letters = this.$root.findAll('[data-type="letter"]')
        if (button === 'notes') {
            letters.forEach((letter, index) => letter.textContent = this.data[index].note)
        } else if (button === 'letters') {
            letters.forEach((letter, index) => letter.textContent = this.data[index].letter)
        }
    }

    onMousedown(event) {
        
        if(event.target.dataset.note) {
            console.log(event.target.dataset.note)
            this.playNote(event.target.dataset.note)
            event.target.classList.add('piano__key--active')
            this.flag = true
        }
        
    }

    onMouseup(event) {
        event.target.classList.remove('piano__key--active')
        this.flag = false
    }

    onMouseover(event) {
        if(this.flag && event.target.dataset.note) {
            console.log(event.target.dataset.note, event.target.dataset.note === 'undefined')
            this.playNote(event.target.dataset.note)
            event.target.classList.add('piano__key--active')
        }
    }

    onMouseout(event) {
        if (event.target.dataset.note)  {
            event.target.classList.remove('piano__key--active')
        }
        
    }

    onContextmenu(event) {
        event.preventDefault()
    }

    onKeydown(event) {
        this.data.forEach((elem) => {
            if(event.code === `Key${elem.letter}` && event.repeat === false) {
                this.playNote(elem.note)
                const note = this.$root.find(`[data-note="${elem.note}"]`)
                note.classList.add('piano__key--active')
            }
        })
    }

    onKeyup(event) {
        this.data.forEach((elem) => {
            if(event.code === `Key${elem.letter}`) {
                const note = this.$root.find(`[data-note="${elem.note}"]`)
                note.classList.remove('piano__key--active')
            }
        })
    }

    playNote(key) {
        const noteAudio = new Audio(`assets/audio/${key}.mp3`)
        noteAudio.currentTime = 0
        noteAudio.play()
    }
}