let taskTotal = 0
let taskId = 0
let totalMessage = ''

const button01Element = document.querySelector('#button1')
const button02Element = document.querySelector('#button2')
const button03Element = document.querySelector('#button3')

const sendInvoice = document.querySelector('#send-invoice')

const taskBarTH1 = document.querySelector('#tasks-ordered-bar :nth-child(1)')
const taskBarTH2 = document.querySelector('#tasks-ordered-bar :nth-child(2)')
taskBarTH1.textContent = 'TASK'
taskBarTH2.textContent = 'TOTAL'

const tasksOrdered = document.querySelector('#tasks-ordered')

let buttons = [
    {
        name: 'Wash Car',
        value: 10,
    },
    {
        name: 'Mow Lawn',
        value: 20,
    },
    {
        name: 'Pull Weeds',
        value: 30,
    },
]

button01Element.textContent = `${buttons[0].name}: $${buttons[0].value}`
button02Element.textContent = `${buttons[1].name}: $${buttons[1].value}`
button03Element.textContent = `${buttons[2].name}: $${buttons[2].value}`

// Testing new ways for the buttons ====================================

function createTasksRow(name, value) {
    let tasksRow = document.createElement('div')
    tasksRow.setAttribute('class', 'tasks-row')
    let tasksRowItem = document.createElement('div')
    tasksRowItem.setAttribute('class', 'tasks-row-item')
    let tasksRowItemName = document.createElement('div')
    tasksRowItemName.setAttribute('class', 'tasks-row-item-name')
    let tasksRowItemRemove = document.createElement('button')
    tasksRowItemRemove.setAttribute('class', 'tasks-row-item-remove')

    let tasksRowValue = document.createElement('div')
    tasksRowValue.setAttribute('class', 'tasks-row-value')

    let tasksRowValueSign = document.createElement('div')
    tasksRowValueSign.setAttribute('class', 'tasks-row-value-sign')
    let tasksRowValueItem = document.createElement('div')
    tasksRowValueItem.setAttribute('class', 'tasks-row-value-item')

    tasksOrdered.appendChild(tasksRow)

    tasksRow.appendChild(tasksRowItem)
    tasksRowItem.appendChild(tasksRowItemName)
    tasksRowItem.appendChild(tasksRowItemRemove)

    tasksRow.appendChild(tasksRowValue)
    tasksRowValue.appendChild(tasksRowValueSign)
    tasksRowValue.appendChild(tasksRowValueItem)

    // Gotta use params?
    tasksRowItemName.innerText = name
    tasksRowItemRemove.innerText = 'Remove'
    tasksRowValueItem.innerText = value
    tasksRowValueSign.innerText = '$'
}

button01Element.addEventListener('click', () => {
    let name = buttons[0].name
    let value = buttons[0].value

    createTasksRow(name, value)

    taskTotal += buttons[0].value
    totalMessage = `The total is: ${taskTotal}.`

    console.log('button 1')
    console.log(totalMessage)
})

button02Element.addEventListener('click', () => {
    let name = buttons[1].name
    let value = buttons[1].value

    createTasksRow(name, value)

    taskTotal += buttons[1].value
    totalMessage = `The total is: ${taskTotal}.`

    console.log('button 2')
    console.log(totalMessage)
})

button03Element.addEventListener('click', () => {
    let name = buttons[2].name
    let value = buttons[2].value

    createTasksRow(name, value)

    taskTotal += buttons[2].value
    totalMessage = `The totalis: ${taskTotal}.`

    console.log('button 3')
    console.log(totalMessage)
})

sendInvoice.addEventListener('click', () => {
    // TODO: Those were only tests! DELETE AND REDO!
    console.log('Invoice Sent!')
})
