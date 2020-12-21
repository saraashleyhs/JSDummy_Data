// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((jSon) => arrayOfTodos = jSon)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  //Capture the ol item into a variable (getElementById)
  let todoList = document.getElementById("todo-list");
  for (let i = 0; i < arrayOfTodos.length; i++) {
    //createText inside the li using the title property.
    // use createTextNode
    let itemTitle = document.createTextNode(arrayOfTodos[i].title);
    //createElement to make a new LI
    let item = document.createElement("li");
    //Now append the text to the new element
    item.appendChild(itemTitle);
    todoList.appendChild(item);

    if (arrayOfTodos[i].completed === false) {
      item.style.color = "rgb(177, 72, 15)";
    }
    else {
      item.style.color = "blue";
    }
  }

}
const filterTodos = () => {
  const myNode = document.getElementById("ol1");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  var userId = document.getElementById("userInput");
  const filtered = arrayOfTodos.filter(item => item.userId == userId.value);
  console.log(filtered);
  var doc = document.getElementById("ol1");
  
  filtered.forEach(element => {
    var li = document.createElement("li");
    var text = document.createTextNode(element.title);
    li.appendChild(text);
    doc.appendChild(li);
  })
}

const clearTodos = () => {
  arrayOfTodos = [];
  console.log(arrayOfTodos);
  populateTodos();

  const myNode = document.getElementById("ol1");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

var toggle = false;

const toggleCompletion = () => {
  const myNode = document.getElementById("ol1");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  toggle = !toggle;
  console.log("toggle: " + toggle);
  var doc = document.getElementById("ol1");


  if (toggle) {
    arrayOfTodos.forEach(element => {
      if (element.completed) {
        let li = document.createElement("li");
        var title = document.createTextNode(element.title);
        li.appendChild(title);
        doc.appendChild(li);
      }
    })
  }
  else {
    arrayOfTodos.forEach(element => {
      if (!element.completed) {
        let li = document.createElement("li");
        li.style.color = "red";
        var title = document.createTextNode(element.title);
        li.appendChild(title);
        doc.appendChild(li);
      }
    })
  }
}
