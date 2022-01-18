
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.body.querySelector("form")
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  buildToDo(e.target.new_todo.value)
  form.reset()  
  }
  )


}
);
function buildToDo(todo){
  let p = document.createElement('p')
  let del = document.createElement('button')
  del.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  del.textContent = 'x'
  p.textContent = `${todo}` 
  p.appendChild(del)
  console.log(p)
  document.body.querySelector('#list').appendChild(p)

}

