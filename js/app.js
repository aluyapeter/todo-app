

function addTask() {
    let taskInput = document.getElementById('task-input');
    console.log(taskInput)

    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        taskCont = document.getElementById('uncompleted-task');
        
        console.log("task added");

        let taskDiv = document.createElement('div');
        taskDiv.className = "created-div";
        taskDiv.innerHTML = '<span>' + taskText + '</span>';

        taskCont.appendChild(taskDiv);

        taskInput.value = '';
    }

    console.log("button working fine");
}

// taskCont = document.getElementById('uncompleted-task');
// console.log(taskCont)