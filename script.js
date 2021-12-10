// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function() {
//     console.log("CLICKED");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userInput");

var ul = document.querySelector("ul");

var items = document.getElementsByTagName("li");

function setToggleItem(item) {
    item.addEventListener("click", function() {
        if(item.classList.contains("done"))
        {
            item.classList.remove("done");
        }
        else
        {
            item.classList.add("done");
        }
    })
}

var index = 0;

for(var i = 0; i < items.length; i++)
{
    index = i;
    (function(index) {
        deleteItemAfterClick(items[index]);
        setToggleItem(items[index]);
    })(index);
}

function inputLength() {
    return input.value.length;
}

function addDeleteButton() {
    var deleteButton = document.createElement("button");
    
    deleteButton.innerHTML = "Delete";
    return deleteButton;
}

function deleteItemAfterClick(item) {
    var itemButton = item.querySelector("button");
    itemButton.addEventListener("click", function() {
        //delete item;
        item.parentNode.removeChild(item);
        console.log("CLICKED");
        console.log(itemButton);
    })

}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(addDeleteButton());
    deleteItemAfterClick(li);
    setToggleItem(li);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick()
{
    if(inputLength() > 0)
    {
        createListElement();
    }
}

function addListAfterKeyPress(event)
{
    if(inputLength() > 0 && event.code == "Enter")
    {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);