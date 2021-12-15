const groceries=document.getElementsByClassName("groceries")[0];
const pencil=document.getElementsByClassName("material-icons")[0];
const userInput=document.getElementsByClassName("input_text")[0];
const allItems=document.getElementsByClassName("all_items")[0];

pencil.addEventListener("click",function(){
    var x=confirm("Are you sure to delete the list?");
    if(x) allItems.innerHTML="";
})
console.log(userInput);
userInput.addEventListener("keydown",function(event){
    if(event.key=="Enter") 
    addItem();
})

function addItem(){
    var h3=document.createElement("h3");
    h3.innerHTML="-"+userInput.value;
    h3.addEventListener("click",function(){
        h3.style.textDecoration="line-through";
    })
    allItems.insertAdjacentElement("beforeend",h3);
    userInput.value="";
}
