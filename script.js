const transactionsUL = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('#amount')

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []


const removeTransaction = ID => {
    transactions = transactions.filter(transaction => transaction.id !== ID)
    updateLocalStorage()
    init()
}
const addTransactionIntoDOM = transaction => {
   const operator = transaction.amount < 0 ? '-' : '+'
   const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
   const amountWithoutOperator = Math.abs(transaction.amount)
   const li = document.createElement('li')

   li.classList.add(CSSClass)
   li.innerHTML = `
   ${transaction.name} <span class="spanDinheiro">${operator} R$ ${amountWithoutOperator}</span>
   <button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
   `
   transactionsUL.prepend(li)
}

const getExpenses = transactionAmounts =>  Math.abs(transactionAmounts
    .filter(value => value < 0)
    .reduce((accumulator, value) =>  accumulator + value, 0))
    .toFixed(2)

const getIncome = transactionAmounts => transactionAmounts
    .filter(value => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2)

const getTotal = transactionAmounts => transactionAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2)

const updateBalanceValues = () => {
    const transactionAmounts = transactions.map(({ amount }) => amount)

    const total = getTotal(transactionAmounts)
    const income = getIncome(transactionAmounts)
    const expense = getExpenses(transactionAmounts)

    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {
    transactionsUL.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

const generateID = () => Math.round(Math.random() * 10000)


const addToTransactionsArray = (transactionName, transactionAmount) => {
    transactions.push({id: generateID(), name: transactionName, amount: Number(transactionAmount) })
}

const cleanInputs = () => {
    inputTransactionName.value = ''
    inputTransactionAmount.value = ''
}
const handleFormSubmit = event => {
    event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()    
    const isSomeInputEmpty = transactionName === '' || transactionAmount === ''
    
    if (isSomeInputEmpty){
        popup.style.display = 'block'
        return
    }

    addToTransactionsArray(transactionName, transactionAmount)
    init()
    updateLocalStorage()
    cleanInputs()
}

form.addEventListener('submit', handleFormSubmit)

const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link'] 
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = 'none'
        return
    }
})