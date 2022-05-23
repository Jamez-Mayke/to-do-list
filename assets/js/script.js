const INPUT_BUTTON = document.querySelector('.task-button');

INPUT_BUTTON.addEventListener('click', function(event) {
  event.preventDefault();
  const INPUT_TASK = document.querySelector('#entrie-task');
  let task = document.querySelector('.task');
  let taskLi = document.createElement('li');
  taskLi.innerText += INPUT_TASK.value;
  task.appendChild(taskLi);
  INPUT_TASK.value = ''

})