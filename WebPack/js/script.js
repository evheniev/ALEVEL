import promise from './promise.js'
import css from '../css/main.css'

promise.then ( response =>
    document.querySelector ( '.sampleClass' )
        .innerText += response )

document.body.appendChild (
    document.createElement ( 'span' )
).className = 'git-bush'

document.body.appendChild (
    document.createElement ( 'span' )
).className = 'git'