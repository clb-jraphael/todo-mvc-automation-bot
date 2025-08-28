var rando = new function() {
    
    function getRandomInt(x) {
        return Math.floor(Math.random()*x)
    }

    function getRandomItemIndex(){
        max = document.querySelectorAll("ul.todo-list li").length;

        if(max===0){
            console.log("no items to choose from");
            return 0;
        }

        x = getRandomInt(max) + 1;
        return x;
    }

    this.selectRandomItem = function(){
        x = getRandomItemIndex();

        if(x>0){
            console.log("select item" + x);
            autoTodo.toggleTodo(x);
        }
    }

    this.toggleAll = function(){
        console.log("toggle all");
        autoTodo.toggleAll();
    }

    this.createRandomTodo = function(){
        console.log("create todo")
        autoTodo.createTodo("random todo" + Date.now());
    }

    this.ammendRandomTodo = function(){
        x = getRandomItemIndex();
        if(x > 0){
            console.log("ammend todo" + x)
            autoTodo.amendTodo(x, "ammended random todo" + Date.now());
        }
    }

    // this.deleteRandomTodo = function(){
    //     x = getRandomItemIndex();
    //     if(x> 0){
    //         console.log("delete todo" + x)
    //         autoTodo.deleteTodo(x);
    //     }
    // }

    this.clearCompleted = function(){
        console.log("clearing completed todos..")
        autoTodo.clearCompleted();
    }

    this.showAll = function(){
        console.log("showing all todos")
        autoTodo.showAll();
    }

    this.showActive = function() {
        console.log("showing active todos")
        autoTodo.showActive();
    }

    this.showCompleted = function(){
        console.log("showing completed todos")
        autoTodo.showCompleted();
    }
}