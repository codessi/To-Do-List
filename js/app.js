// CODE EXPLAINED channel

//Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes Names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variables 
let LIST = [],
    id = 0;


// Show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function

function addToDo(toDo, id, done, trash) {
    //return stops(ignore) rest of line of code. 
    if (trash) { return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = ` <li class="item">
    <i class="fa ${DONE}" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
</li>
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item)
}


addToDo("drink coffee");

document.addEventListener("keyup", function(e) {
    if (e.keycode == 13) {
        const toDo = input.value;
        // if the input isnot emplty if value is true 
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
            });
            id++;
        }
        // after do function addToDo set it value to empty 
        input.value = "";
    }
});

addToDo("coffee", 0, false, false);

// complete to do 
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;

}