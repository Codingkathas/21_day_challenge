document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
       
          <input type="radio" class="form-check-input mr-3">
          <span>${taskText}</span>
          
         

          <i class="fas fa-trash delete-icon"></i>
        `;
  
        // Delete task when delete icon is clicked
        taskItem.querySelector('.delete-icon').addEventListener('click', function() {
          taskItem.remove();
        });
  
        // Mark task as completed when radio button is clicked
        taskItem.querySelector('input[type="radio"]').addEventListener('click', function() {
          taskItem.classList.toggle('completed');
        });
  
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTaskBtn.click();
      }
    });
  });