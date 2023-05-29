// let amount = document.getElementById('amount').value;
// let desc = document.getElementById('desc').value;
// let category = document.getElementById('category').value;
// let addExpBtn = document.getElementById('btn');
// let expenseList = document.getElementById('listOfexpenses');



// addExpBtn.addEventListener('click', addExpense);

// function addExpense(e){
//     e.preventDefault();
//     expenseList.innerHTML = amount + "---" + desc + "---" + category;       
// }

let expenses = [];

// Load expenses from local storage
if (localStorage.getItem('expenses')) {
  expenses = JSON.parse(localStorage.getItem('expenses'));
  renderExpenses();
}

function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function renderExpenses() {
  const expenseTableBody = document.getElementById('expenseTableBody');
  expenseTableBody.innerHTML = '';

  expenses.forEach((expense, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${expense.amount}</td>
      <td>${expense.description}</td>
      <td>${expense.category}</td>
      <td>
        <button class="btn btn-sm btn-primary edit-btn" data-index="${index}">Edit</button>
        <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
      </td>
    `;
    expenseTableBody.appendChild(newRow);
  });

  attachEventListeners();
  saveExpenses(); // Save expenses after rendering
}

function attachEventListeners() {
  const editButtons = document.querySelectorAll('.edit-btn');
  const deleteButtons = document.querySelectorAll('.delete-btn');

  editButtons.forEach(button => {
    button.addEventListener('click', handleEdit);
  });

  deleteButtons.forEach(button => {
    button.addEventListener('click', handleDelete);
  });
}

function handleEdit(event) {
  const index = event.target.getAttribute('data-index');
  const expense = expenses[index];

  // Prefill the form with the expense details
  document.getElementById('amount').value = expense.amount;
  document.getElementById('description').value = expense.description;
  document.getElementById('category').value = expense.category;

  // Remove the expense from the array
  expenses.splice(index, 1);

  // Re-render the expenses
  renderExpenses();
}

function handleDelete(event) {
  const index = event.target.getAttribute('data-index');

  // Remove the expense from the array
  expenses.splice(index, 1);

  // Re-render the expenses
  renderExpenses();
}

document.getElementById('expenseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  // Create new expense object
  const newExpense = {
    amount,
    description,
    category
  };

  // Add the new expense to the array
  expenses.push(newExpense);

  // Clear form values
  document.getElementById('amount').value = '';
  document.getElementById('description').value = '';
  document.getElementById('category').value = '';

  // Re-render the expenses
  renderExpenses();
});
