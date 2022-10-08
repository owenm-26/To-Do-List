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

    

    /*function hi() {
        // ...
    }
    */

    //Changes background image
    const spring = document.getElementById('Spring');

    spring.addEventListener('click', onClick = (e) => {
        console.log(e)
        //alert('Spring!')
        document.body.style.background = "url(https://static.vecteezy.com/system/resources/previews/001/212/839/non_2x/lovely-blue-flower-cartoon-seamless-pattern-vector.jpg)";
    });


    //Changes background image
    const summer = document.getElementById('Summer');

    summer.addEventListener('click', function onClick(event) {

    document.body.style.background = "url(https://img.freepik.com/premium-vector/seamless-pattern-with-starfish-nautilus-seashells-pearls-marine-animals-vector-illustration-flat-cartoon-style-beige-background-summer-beach-textiles-accessories_172597-1033.jpg)";

    });    

    //Changes background image
    const fall = document.getElementById('Fall');

    fall.addEventListener('click', function onClick(event) {

      document.body.style.background = "url(https://wallpaperaccess.com/full/1233408.jpg)";
    
    });
    
    //Changes background image
    const winter = document.getElementById('Winter');

    winter.addEventListener('click', function onClick(event) {

      document.body.style.background = "url(https://img.freepik.com/premium-vector/cute-penguin-seamless-pattern-background-penguin-welcome-winter-holiday-background_565280-13.jpg)";
    
    });







/*
    function changeBackground(user_choice){
    document.querySelector('#push').onclick = function(){
        var user_choice = "Fall"
        if(userChoice === "Fall"){
            return "https://static.vecteezy.com/system/resources/previews/001/212/839/non_2x/lovely-blue-flower-cartoon-seamless-pattern-vector.jpg"

        }
        else{
            var springBut = document.getElementsByClassName("Spring")[0];
            var summerBut = document.getElementsByClassName("Summer")[0];
            var fallBut = document.getElementsByClassName("Fall")[0];
            var winterBut = document.getElementsByClassName("Winter")[0];
            if(document.querySelector(springBut).value === True){
                return "https://static.vecteezy.com/system/resources/previews/001/212/839/non_2x/lovely-blue-flower-cartoon-seamless-pattern-vector.jpg"
            }
            
            elif(document.querySelector(summerBut).value === True);{
                return "https://cdn.wallpapersafari.com/22/77/360quk.jpg"
            }

            elif(document.querySelector(fallBut).value === True);{
                return "https://wallpaperaccess.com/full/1233408.jpg"
            }
            elif(document.querySelector(winterBut).value === True);{
                return "https://img.freepik.com/premium-vector/cute-penguin-seamless-pattern-background-penguin-welcome-winter-holiday-background_565280-13.jpg"
            }

        }
}
}
*/
