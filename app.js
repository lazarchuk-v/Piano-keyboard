const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    new Audio(newUrl).play()
    console.log(newUrl);
}


pianoKeys.forEach((pianoKey, i) => {
    const number =(i+1)
    const newUrl = '24-piano-keys-from-f/' + number + '.mp3'
    pianoKey.addEventListener('click',() => playSound(newUrl))
})