let projectDivs = document.querySelectorAll('.topic-top')
let projectLinks = document.querySelectorAll('.project-header')

projectDivs.forEach(project => {
    project.addEventListener('click', () => {
        let topicItems = project.nextElementSibling
        let torch = project.children[1]
        if (topicItems.classList.contains('show')) {
            topicItems.classList.remove('show')
            torch.style.backgroundImage = "url('./images/torch_unlit.png')"
        } else {
            topicItems.classList.add('show')
            torch.style.backgroundImage = "url('./images/torch.png')"
        }
    })
})

projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        window.location = link.children[2].href
    })
})