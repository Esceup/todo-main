const btnAddItem = document.getElementById("create");
const list = document.getElementById("list");
const inputElement = document.getElementById("title");
const deleteAll = document.getElementById("deleteAll");
const liItem = document.getElementsByClassName("list-group-item");

let notes = JSON.parse(localStorage.getItem("todoDad")) || [];

const saveToLocalStorage = (key = "todoDad") => {
  localStorage.setItem(key, JSON.stringify(notes));
};

// обновление списка (вызываем данную функцию каждый раз, когда изменяем или добавляем что-то в массив)
function render() {
  list.innerHTML = "";
  if (notes.length === 0) {
    list.innerHTML = "<p>Пора вам добавить пару заметок ;)</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    list.insertAdjacentHTML("afterbegin", getNotesTemplate(notes[i], i));
  }

  //   for (let note of notes) {
  //     list.insertAdjacentHTML("afterbegin", getNotesTemplate(note));
  //   }
}
render();

btnAddItem.onclick = function () {
  if (inputElement.value.length === 0) {
    alert("введите значение");
    return; // возвращаем результат, чтобы функция дальше не выполнялась
  }
  const newNote = {
    // работа с массивом
    title: inputElement.value,
    completed: false,
  };

  notes.push(newNote); // добавление в массив newNote

  //   list.insertAdjacentHTML("afterbegin", getNotesTemplate(newNote));
  saveToLocalStorage();
  render(); // обновляем массив(каждый раз при изменениях)

  inputElement.value = "";
};

// ссылаемся на index элемента для переключения цвета кнопки
// (при помощи отрицания)
// и удаления из массива при помощи .splice()

list.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      if (notes[index].completed) {
        notes.splice(index, 1);
      }
    }
    saveToLocalStorage();
    render();
  }
};
// удалить выполненные задачи

deleteAll.onclick = function () {
  notes = notes.filter((item) => item.completed !== true);
  saveToLocalStorage();
  render();
};

// console.log(event.target.dataset.index)

// шаблон для элемента массива с data-index и data-type

function getNotesTemplate(note, index) {
  return ` 
    <li class="list-group-item bg-${
      note.completed ? "green" : "none"
    }  d-flex justify-content-between align-items-center">
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
