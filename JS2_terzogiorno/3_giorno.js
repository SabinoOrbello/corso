// tre cose 
// 1. funzione che fa addTask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function (e) {
    e.preventDefault()              // evita il comportamento di default 
    addTask()
    attachComplete()
    attachDelete()
}
  


const addTask = function () {
   let task = document.querySelector('#tasks')
   let inputField = document.querySelector('#newTask input')
   let newTask = `
   <div class="task">
       <span id="taskname">
           ${inputField.value}
       </span>
       <button class="delete">
           <i class="far fa-trash-alt"></i>
       </button>
   </div>
`
task.innerHTML += newTask
inputField.value = ''

}



const attachComplete = function () {
    // aggancia gli elementi html
    // li ciclo ad esempio con for
    // all'elemento che seleziono aggiunge|toglie una classe (toggle)
    // https://www.w3schools.com/js/js_this.asp this per leggere il contenuto
    // css ->   text-decoration: line-through;
    let attach = document.querySelectorAll(".task")
    for(let i= 0; i<attach.length;i++){
        attach[i].addEventListener("click",function (){
            this.classList.toggle("completed")
        })
    }
}

const attachDelete = function () {
    // aggancia gli elementi html
    // ciclo for
    // metodo per rimuovere qualcosa .remove
    let deleteButton  = document.querySelectorAll('.delete')
    for(let i= 0; i<deleteButton.length;i++){
        deleteButton[i].addEventListener('click', function(){
            this.parentNode.remove()
        })
    }
}

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}