(function() {
    const form = document.querySelector("Account")

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const message = document.querySelector('message')
        const message = document.querySelector('feedback')
        const message = document.querySelector('message-content')

        if (message.value === '') {
            WebGLTransformFeedback.classList.add('show')
            setTimeout(function() {
                WebGLTransformFeedback.classList.remove('')
            }, 4000)
        } else {
            messageContent.textContent = message.value
            message.value = ''
        }
    })
})