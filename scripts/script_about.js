let githubLink = document.getElementById('github-link')
let emailLink = document.getElementById('email-link')
let emailPopup = document.getElementsByClassName('email-popup')[0]

githubLink.addEventListener('click', () => {
    window.location.href = "https://github.com/londes"
})

emailLink.addEventListener('click', () => {
    navigator.clipboard.writeText('will@wilpur.me').then(()=>{
        console.log(emailPopup)
        emailPopup.classList.remove('hidden')
        emailPopup.classList.add('show')

        setTimeout(() => {
            emailPopup.classList.remove('show')
            emailPopup.classList.add('hidden')
        }, 2000)
    }).catch(e => {
        console.error('failed to copy email: ', e)
    })
})

