 
 window.onload  = function()
 {

    var tasks;

    var taskName;

    document.getElementById("add_btn").onclick = function()
    {
        taskName = document.getElementById("add_task_name").value;

        if(taskName !== '')
        {
            document.getElementById("task_list").innerHTML += `
            <div class="task">
                <input class="task_item" type="checkbox">
                <span class="task_name task_item">${taskName}</span>
                <button class="task_item delete_button" type="button"></button>
            </div>`

        }

        else
        {
            alert("Please, enter the name of the task")
        }
        
    }
 }
 
