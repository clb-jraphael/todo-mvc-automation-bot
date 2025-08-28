function clickItem(item){
    item.click()
}

function toggleTodo(num){
    document.querySelector("ul.todo-list li:nth-child("+ num +") input.toggle").click()
}

function deleteTodo(num){
    document.querySelector("ul.todo-list li:nth-child("+ num +") button.destroy").click()
}

function clearCompleted(){
    document.querySelector("button.clear-completed").click()
}

function showAll(){
    location.hash = '/'
}

function showActive(){
    location.hash = '/active'
}

function showCompleted(){
    location.hash = '/completed'
}

function createTodo(name){
    document.querySelector("header > input.new-todo").value=name;
    document.querySelector("header > input.new-todo").dispatchEvent(new Event('change', {'bubbles': true}));
}

function ammendTodo(position, name){
    document.querySelector("ul.todo-list > li:nth-child("+ position +") > div > label").dispatchEvent(new Event('dblclick', {'bubbles':true}))
    document.querySelector("ul.todo-list > li.editing > input").value=name
    document.querySelector("ul.todo-list > li.editing > input").dispatchEvent(new Event('blur'))
}






