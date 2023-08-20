const todo_input = document.getElementById("todo_input");
const todo_btn = document.getElementById("todo_btn");
const todo_list = document.getElementById("todo_list");

todo_btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML =todo_input.value;
    todo_list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = `<i class="fa-solid fa-trash"></i>`
    li.appendChild(span);
    todo_input.value = "";
});


todo_list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    } else if(e.target.tagName === "I") {
        e.target.parentNode.parentNode.remove();
    }
    
})
