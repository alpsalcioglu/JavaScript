document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const list = document.getElementById('list');
    const liveToastBtn = document.getElementById('liveToastBtn');
    const liveToastSuccess = document.querySelector('.toast.success');
    const liveToastError = document.querySelector('.toast.error');
  
    function showToast(toast) {
      $(toast).toast('show');
    }
  
    function newElement() {
      const taskValue = taskInput.value.trim();
      if (taskValue === '') {
        showToast(liveToastError);
        return;
      }
  
      const li = document.createElement('li');
      li.textContent = taskValue;
      li.addEventListener('click', function () {
        li.classList.toggle('checked');
      });
      li.addEventListener('dblclick', function () {
        list.removeChild(li);
        saveTasks();
      });
      
      list.appendChild(li);
      taskInput.value = '';
      showToast(liveToastSuccess);
      saveTasks();
    }
  
    liveToastBtn.addEventListener('click', newElement);
  
    // Load saved tasks from local storage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function () {
          li.classList.toggle('checked');
        });
        li.addEventListener('dblclick', function () {
          list.removeChild(li);
          saveTasks();
        });
        list.appendChild(li);
      });
    }
  
    // Save tasks to local storage
    function saveTasks() {
      const tasks = Array.from(list.children).map(li => li.textContent);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Save tasks when the window is unloaded
    window.addEventListener('beforeunload', saveTasks);
  
    // Initial load
    loadTasks();
  });
  