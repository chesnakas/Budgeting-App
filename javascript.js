const descField = document.getElementById("descriptionInput");
const amountField = document.getElementById("amountInput");
const budgetField = document.getElementById("budgetInput");
const list = document.getElementById("list");
const budget = document.getElementById("budget");
const expenses = document.getElementById("expenses");
const remaining = document.getElementById("remaining");

let id = 0;

document.getElementById("submitBudget").addEventListener("click", function(event) {
    budget.innerHTML = budgetField.value;
    updateDashboard();
});

document.getElementById("submitExpense").addEventListener("click", function(event) {
    if (descField.value && amountField.value) {
        addExpense(descField.value, amountField.value, id);
        updateDashboard();
        id++;
    }
});

list.addEventListener("click", function(event) {
    const element = event.target;
    removeExpense(element);
});

function addExpense(description, amount, id) {
    const str = `   <li>
                        <p id="text">${description},</p>
                        <p id="amount">${amount}</p>
                        <i class="fas fa-times" job="delete" id="${id}"></i>
                    </li>`
    list.insertAdjacentHTML("beforeend", str)
}

function removeExpense(element) {
    if (element.attributes.job.value == "delete") {
        element.parentNode.parentNode.removeChild(element.parentNode);
        updateDashboard();
    }
}

function updateDashboard() {
    budgetValue = parseFloat(budget.innerHTML);

    let expensesSum = 0;
    for (let i=0; i < list.children.length; i++){
        expensesSum = expensesSum + parseFloat(list.children[i].children[1].innerHTML);
    }
    expenses.innerHTML = expensesSum;
    remaining.innerHTML = budgetValue - expensesSum;
}