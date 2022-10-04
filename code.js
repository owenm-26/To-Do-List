function add(){
    document.querySelector('#push').onclick = function(){
        if(document.querySelector('#newtask input').value.length == 0){
            alert("You Forgot To Enter a Task Name")
        }

        else{
            document.querySelector('#tasks').innerHTML += `
                <div class = "task">
                    <span id="tasksname">
                        ${document.querySelector('#newtask input').value}
                    </span><button class="delete">
                            <i class="far fa-trash-alt"></i>
                        </button>
                </div>
            `;

            var current_tasks = document.querySelectorAll(".delete");
            for(var i = 0; i < current_tasks.length; i++)
            {
                current_tasks[i].onclick = function()
                {
                    this.parentNode.remove();
                }
            }
            }

    }
}

function deletes(task){
    let deleteTask = document.createElement("button")
      deleteTask.setAttribute('id', 'delete-btn')
      deleteTask.innerText = "delete task"
      deleteTask.addEventListener("click", function(event) {
      
      console.log("test222 task id ", taskDiv.id)
      
      if (event.target.id === 'delete-btn') {
      fetch(`http://127.0.0.1:5500/index.html${task.id}`, {
      method: "DELETE",
      headers: {
      "content-type": "application/json",
      accept: "application/json"
      }
      }).then(resp => resp.json())
      .then(() => {
        taskDiv.innerHTML = "";
      const task = taskDiv.querySelector(`[data-id='${taskDiv.id}']`);
      task.remove();
      })
      
      }
      })
    }

