const btnAddItem = document.getElementById("create");
const list = document.getElementById("list");
const inputElement = document.getElementById("title");
const deleteAllCompleted = document.getElementById("deleteAllCompleted");
const deleteAll = document.getElementById("deleteAll");
const listItem = document.getElementById("listItem"); 
const allTask = document.getElementById('allTask')
const completedTask = document.getElementById("completedTask");

let notes = JSON.parse(localStorage.getItem('todosMe')) || [ ];




const saveToLocalStorage = (key = 'todosMe') => {
  localStorage.setItem(key, JSON.stringify(notes));
}

// обновление списка (вызываем данную функцию каждый раз, когда изменяем или добавляем что-то в массив)
function render() {

    list.innerHTML = ""; 
    if(notes.length === 0){
        list.innerHTML = 
        '<p>Пора вам добавить пару заметок ;)</p><img src="up.webp"></img>';
        
    }
    
  for(let i = 0; i < notes.length;i++){
  list.insertAdjacentHTML("afterbegin", getNotesTemplate(notes[i], i));
  }
  

//   for (let note of notes) {
//     list.insertAdjacentHTML("afterbegin", getNotesTemplate(note));
//   }
}
render();

function sortNotesToCompleted() {
 notes.sort((a, b) => (a.completed > b.completed ? 1 : -1));
}
sortNotesToCompleted()

function countAllTask() {
  let count = 0;
  for (let i = 0; i < notes.length; i++) {
    count += 1;
  }
  allTask.textContent = `Всего задач: ${count}`;
}
countAllTask();

function countCompletedTask() {
  let count = 0;
  for (let i = 0; i < notes.length; i++) {
    if(notes[i].completed === true) {
      count += 1;
    }
  }
  completedTask.textContent = `Выполенных задач: ${count}`;
}
countCompletedTask();


btnAddItem.onclick = function () {
  if (inputElement.value.length === 0) {
    alert("введите значение");
    return;// возвращаем результат, чтобы функция дальше не выполнялась
  }
  const newNote = { // работа с массивом
    title: inputElement.value,
    completed: false,
  };

  notes.push(newNote) // добавление в массив newNote

//   list.insertAdjacentHTML("afterbegin", getNotesTemplate(newNote));
    sortNotesToCompleted();
    saveToLocalStorage();
    
    render(); // обновляем массив(каждый раз при изменениях)
    countAllTask();
    countCompletedTask();
    
    inputElement.value = "";

  
};


// ссылаемся на index элемента для переключения цвета кнопки
// (при помощи отрицания)
// и удаления из массива при помощи .splice()

list.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;

         if (type === "toggle") {  
            notes[index].completed = !notes[index].completed      
         } else if(type === 'remove'){
           if (notes[index].completed) {
             notes.splice(index, 1);
           }
         }
          sortNotesToCompleted();
         saveToLocalStorage();
         render();
          countAllTask();
          countCompletedTask();
        
    }
}


// удалить выполненные задачи

deleteAllCompleted.onclick = function () {
    notes = notes.filter((item) => item.completed !== true);
    sortNotesToCompleted();
    saveToLocalStorage();
    render()
    countAllTask();
    countCompletedTask();
    
}

deleteAll.onclick = function() {
    list.innerHTML = "";
    sortNotesToCompleted();
    saveToLocalStorage();
    render();
    countAllTask();
    countCompletedTask();
}
    // console.log(event.target.dataset.index)

// шаблон для элемента массива с data-index и data-type
function getNotesTemplate(note, index) {
  return ` 
    <li class="list-group-item bg-${
      note.completed ? "green" : "none"
    } d-flex justify-content-between align-items-center">
        <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
        <span>
          <span class="btn btn-checked btn-small btn-${
            note.completed ? "success" : "warning"
          }"
            data-index="${index}" data-type="toggle">&check;
          </span>
          <span class="btn btn-delete btn-small btn-danger"
             data-index="${index}" data-type="remove">&times;</span>
          </span>
      </li>
      `;
}