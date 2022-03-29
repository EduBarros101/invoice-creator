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

button01Element.addEventListener('click', () => {
    tasksOrdered.innerHTML += `
    <tr id="tasks-ordered-list">
        <td id="task${taskId}-ordered">${buttons[0].name}</td>
        <td id="task${taskId}-value">${buttons[0].value}</td>
    </tr>
    `

    console.log('button 1')

    taskTotal += buttons[0].value
    totalMessage = `The total is: ${taskTotal}. It's ID was: ${taskId}.`

    console.log(totalMessage)

    taskId += 1
})

button02Element.addEventListener('click', () => {
    tasksOrdered.innerHTML += `
    <tr id="tasks-ordered-list">
        <td id="task${taskId}-ordered">${buttons[1].name}</td>
        <td id="task${taskId}-value">${buttons[1].value}</td>
    </tr>
    `

    console.log('button 2')

    taskTotal += buttons[1].value
    totalMessage = `The total is: ${taskTotal}. It's ID was: ${taskId}.`

    console.log(totalMessage)

    taskId += 1
})

button03Element.addEventListener('click', () => {
    tasksOrdered.innerHTML += `
    <tr id="tasks-ordered-list">
        <td id="task${taskId}-ordered">${buttons[2].name}</td>
        <td id="task${taskId}-value">${buttons[2].value}</td>
    </tr>
    `

    console.log('button 3')

    taskTotal += buttons[2].value
    totalMessage = `The totalis: ${taskTotal}. It's ID was: ${taskId}.`

    console.log(totalMessage)

    taskId += 1
})

// const taskValue = document.querySelector('#task-value')
// const allTaskValue = document.querySelectorAll('#task-value')

sendInvoice.addEventListener('click', () => {
    console.log('Invoice Sent!')
})
