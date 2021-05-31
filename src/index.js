import './styles/index.scss';
import { Piano } from './js/components/piano/piano';
import { Header } from './js/components/header/Header';
import { Controls } from './js/components/controls/Controls';
import { PianoKeys } from './js/components/piano-keys/PianoKeys';
import { Footer } from './js/components/footer/Footer';




const piano = new Piano('#app', {
    components: [
        Header,
        [Controls, PianoKeys],
        Footer
    ]
})

piano.render()