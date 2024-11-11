// const array = [1, 2, 3, 4, 5]
// // console.log(array.map((item => item / 2)))
// console.log(array[array.length - 1]);

const inputElement = document.getElementById('title')
const createBtn = document.getElementById("create");
const ListElement = document.getElementById("list");

// console.log(inputElement.value)



// const notes = ['Сделать поставку', 'Налить воды', 2]

// function render() {
//     for (let i = 0; i < notes.length; i++) {
//         ListElement.insertAdjacentHTML("afterbegin", getNoteTemplate(notes[i]));
//     }
// }

// function render() {
//   for (let note of notes) {
//     ListElement.insertAdjacentHTML("afterbegin", getNoteTemplate(note));
//   }
// }

// render()

// createBtn.onclick = function() {
//     if(inputElement.value.length === 0){
//         alert('Поле пустое');
//         return
//     }
    
//         ListElement.insertAdjacentHTML("afterbegin", getNoteTemplate(inputElement.value));

//         inputElement.value = '';
// }

// function getNoteTemplate(title) {
//     return `
//         <li
//           class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>${title}</span>
//           <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//           </span>
//         </li>`;
// }


// Object Theory

// const person = {
//     firstName: 'Danila',
//     lastName: 'Gorbunov',
//     year: 2001,
//     hasGirlfriend: true
// }
// console.log(person.year)

const notes = [
  {
    title: "Сделать поставку",
    completed: false,
  },
  {
    title: "Записаться на стрижку",
    completed: true,
  },
]
function render() {

    ListElement.innerHTML = '';
     if(notes.length === 0) {
    ListElement.innerHTML = '<p>Нет элементов</p>';
  }
 for (let i = 0; i < notes.length; i++) {
        ListElement.insertAdjacentHTML("afterbegin", getNoteTemplate(notes[i], i));
    }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    alert("Поле пустое");
    return;
  }
 
  const newNote = {
    title: inputElement.value,
    completed: false,
  }
//   ListElement.insertAdjacentHTML("afterbegin", getNoteTemplate(newNote));
  notes.push(newNote)
  render()

  inputElement.value = "";
};

ListElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    } else if(type === 'remove'){
        notes.splice(index, 1)
        
    }
    // else if (type === 'remove') {
    // //   notes.splice(index, 1);
    //   console.log('remove', index)
    // }
    render()
  }
}

function getNoteTemplate(note, index) {
  return `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? "warning" : "success"
            }"
            data-index="${index}" data-type="toggle" 
            >&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li>`;
}