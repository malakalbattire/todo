let addBtn = document.querySelector('button');
addBtn.onclick = addTask;

function addTask() {
  const taskInput = document.querySelector('input');
  const taskValue = taskInput.value;

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  li.appendChild(checkbox);

  const textNode = document.createTextNode(taskValue);
  li.appendChild(textNode);

  const ul = document.getElementById('taskList');
  ul.appendChild(li);

  taskInput.value = '';

  checkbox.onclick = function() {
    li.classList.toggle('cheked');
  }
}
