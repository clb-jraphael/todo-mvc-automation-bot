window.autoTodo = {
  clickItem(item) {
    item.click();
  },


  toggleTodo(num) {
    document.querySelector(`ul.todo-list li:nth-child(${num}) input.toggle`).click();
  },

  
  toggleAll(){
    document.querySelector(".toggle-all-label").click()
  },

  
  deleteTodo(num) {
    document.querySelector(`ul.todo-list li:nth-child(${num}) button.destroy`).click();
  },

  
  clearCompleted() {
    document.querySelector("button.clear-completed").click();
  },

  
  showAll() {
    location.hash = "/";
  },

  
  showActive() {
    location.hash = "/active";
  },

  
  showCompleted() {
    location.hash = "/completed";
  },

  
  createTodo(name) {
    const input = document.querySelector("header > input.new-todo");
    input.value = name;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  },

  
  amendTodo(position, name) {
    const label = document.querySelector(
      `ul.todo-list > li:nth-child(${position}) > div > label`
    );
    label.dispatchEvent(new Event("dblclick", { bubbles: true }));
    const input = document.querySelector("ul.todo-list > li.editing > input");
    input.value = name;
    input.dispatchEvent(new Event("blur"));
  },
};
