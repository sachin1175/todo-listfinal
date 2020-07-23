var taskAdded = "", descriptionAdded = "", array = [], obj = {}, i = 0;




document.querySelector(".fill").style.display = 'none';
document.querySelector(".hint").style.display = 'none';


document.querySelector(".taskButton").addEventListener('click', function() {

    array.map((item, index) => {
        if (document.querySelector(".remove") !== null) {
            document.querySelector(".remove").remove();
        }
    });

    taskAdded = document.querySelector(".taskInput").value;
    descriptionAdded = document.querySelector(".descriptionInput").value;
    if (taskAdded === "") {
        document.querySelector(".fill").style.display = 'block';
        document.querySelector(".fill").style.color = 'red';
        document.querySelector(".fill").style.marginLeft = '10px';
        document.querySelector(".fill").style.fontSize = '15px';
        document.querySelector(".fill").style.fontWeight = '100';
    } else {
        obj = {
            task: taskAdded, description: descriptionAdded,
        };
        array.push(obj);
        document.querySelector(".taskInput").value = "";
        document.querySelector(".descriptionInput").value = "";
        document.querySelector(".fill").style.display = 'none';

        rerender();

        document.querySelector(".hint").style.display = 'inline';
        if (document.querySelector(".taskDetail") !== null) {
            document.querySelector(".taskDetail").remove();
            document.querySelector(".descriptionDetail").remove();
        }
    }
});

function rerender() {
    array.map((item, index) => {
        if (document.querySelector(".remove") !== null) {
            document.querySelector(".remove").remove();
        }
    });

    array.map((item, index) => {
        document.querySelector(".repeater").innerHTML += `
        <div key=${index} class="bar remove tag${index} check" style="border: none; justify-content: center; height: 50px;">
            <div class="data">
                <div class="nameOfTask" onclick="getDescription(${index})">${item.task}</div>
                <div class="deleteIcon" onclick="whichTask(${index})"><i class="fas fa-trash-alt"></i></div>
            </div>
        </div>`
    });

    if (document.querySelector(".taskDetail") !== null) {
        document.querySelector(".taskDetail").remove();
        document.querySelector(".descriptionDetail").remove();
    }
}

function getDescription(place) {
    if (document.querySelector(".taskDetail") !== null) {
        document.querySelector(".taskDetail").remove();
        document.querySelector(".descriptionDetail").remove();
    }
    document.querySelector(".hint").style.display = 'none';
    array.map((item, index) => {
        if (place === index) {
            document.querySelector(".putDescription").innerHTML += `
            <div class="taskDetail">
                Task :<span style="font-weight: 100; margin-left: 10px;">${item.task}</span>
            </div>
            <div class="descriptionDetail">
                ${item.description}
            </div>`;
        }
    });
}

function whichTask(place) {
    var temp = [];;
    array.map((item, index) => {
        if (place === index) {
            document.querySelector(`.tag${index}`).remove();
            temp = array.splice(0, index + 1);
            temp.pop();
            array = temp.concat(array);
            rerender();
        }
    });
}