const inputVal =  document.getElementsByClassName('input_text')[0]
const addTask = document.getElementsByClassName('input_btn')[0]

addTask.addEventListener('click',() =>{
    if(inputVal.value.trim() != 0){
        
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if(localItems === null){
        
        taskList = []
        // alert("PLEASE ENTER SOME TASK");
        }else{
            
        taskList = localItems;
        }   
        taskList.push(inputVal.value)
        localStorage.setItem('localItem',JSON.stringify(taskList))
        
        inputVal.value ='';

    }else{
        alert("PLEASE ENTER SOME TASK");
    }
    

showlist()
})

function showlist(){

    let outPut = '';
    let taskListshow = document.querySelector('.todo_item')
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        // alert('please enter some task')
        taskList = []
    }else{
        taskList = localItems;
    }
    taskList.forEach((data,index) => {
        outPut += ` <div class="todoList">
        <p class="pText">${data}</p>
        <button class="deleteTask" onclick="deleteItem(${index})">X</button>
    </div>
    `
    });
    taskListshow.innerHTML = outPut;

}
showlist()

function deleteItem(index){
    let localItems = localStorage.getItem('localItem')
    let taskList = JSON.parse(localItems);
    taskList.splice(index,1)
    localStorage.setItem('localItem',JSON.stringify(taskList))
    showlist()
}

function clearTask(){

localStorage.clear()

}
// function removeAll(){
//     taskList.splice(0,taskList.length)
    
// }

function removeAll(){
    let deleteall = document.getElementById("deleteallbtn");
    deleteall.addEventListener("click",function(){
        let localItems = localStorage.getItem('localItem');
        let taskList = JSON.parse(localItems);
        if(localItems == null){
            taskList = [];
        }else{
            taskList= JSON.parse(localItems);
            taskList= [];
        }
        localStorage.setItem('localItem',JSON.stringify(taskList));
        showlist();
    })
    
}

// window.addEventListener("load", () => {
//     createTodo(todosArr);
//   });