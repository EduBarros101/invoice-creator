function invoiceApp() {
    const appBody = document.createElement('div')
    appBody.classList.add('card')

    const appHeader = document.createElement('div')
    appHeader.classList.add('header-rectangle')

    document.body.insertAdjacentElement('afterbegin', appBody)

    appBody.appendChild(appHeader)
}

document.body.onload = invoiceApp()
