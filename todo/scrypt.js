const button =document.querySelector("button")
const input= document.querySelector("input")
button.addEventListener('click',()=>{
    const todoInfo = input.value;
    const todo = document.createElement('div')
    
    const text =document.createElement("p")

    text.textContent= todoInfo
    const compBtn = document.createElement("button")
    compBtn.classList.add("delBtn")
    compBtn.textContent = "Complete"
    const compDel = document.createElement("button")
    compDel.classList.add("comp")
    compDel.textContent ='Delete'
    
    todo.appendChild(text)
    todo.appendChild(compBtn)
    todo.appendChild(compDel)
    document.body.appendChild(todo)
})