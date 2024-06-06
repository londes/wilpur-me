let willDiv = document.querySelector('.enter-container-block')
let enterDiv = document.querySelector('.enter-container-block-door')

let sickEmojis = [ '🔥', '👽', '🤙', '🏂', '🚲', '🍜', '🍕', '🕹️', '🌊', '🎶', '🐉', '🧙‍♂️', '🍻' ]

willDiv.addEventListener('click', () => {
    let emojisText = getRandomElements(sickEmojis, 5)
    document.querySelector('.icons-sick').innerHTML = emojisText
})

enterDiv.addEventListener('click', () => {
    document.querySelector('.icon-door').style.backgroundImage = "url('./images/door_open.svg')"
    setTimeout(() => {
        window.location.href = 'home.html'
    }, 1000)
})

let shuffleArray = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        // Fisher-Yates shuffle algorithm
        let j = Math.floor(Math.random() * (i + 1))
        // got a weird bug where js complains about j not being declared for the swap so I set a timeout here to deal w that
        setTimeout(() => {
            [array[i], array[j]] = [array[j], array[i]]
        }, 0)
    }
    return array
}

let getRandomElements = (array, numElements) => {
    let shuffledArray = shuffleArray(array)
    return shuffledArray.slice(0, numElements).join('')
}



