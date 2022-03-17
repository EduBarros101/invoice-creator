const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

const taskBarTH1 = document.querySelector('#tasks-ordered-bar :nth-child(1)')
const taskBarTH2 = document.querySelector('#tasks-ordered-bar :nth-child(2)')

const ordersList = document.querySelector('#tasks-ordered-list')

let ordersArray = []

let button1Name = 'Wash Car'
let button2Name = 'Mow Lawn'
let button3Name = 'Pull Weeds'

let button1Value = 10
let button2Value = 20
let button3Value = 30

taskBarTH1.textContent = 'TASK'
taskBarTH2.textContent = 'TOTAL'

button1.textContent = `${button1Name}: $${button1Value}`
button2.textContent = `${button2Name}: $${button2Value}`
button3.textContent = `${button3Name}: $${button3Value}`

button1.addEventListener('click', () => {
    // TODO: Objects?
})
