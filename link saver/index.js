let mylead=["www.akshata.com","www.ankita.com","www.eva.com"]
const inputel= document.getElementById("input-el") // const cannot be reassigned
// inspite of using the onclick() you can use this direct inside the javascript to make the html looks morre cleaner
const inputbtn = document.getElementById("btn")
const ulel= document.getElementById("ul-el")
 

inputbtn.addEventListener("click", function(){
    console.log("consoled by the event lsiterner")
    mylead.push(inputel.value)
    console.log(mylead)
})
// when the input button is clicked the value in the input should be moved to the empty array
for(let i=0; i< mylead.length; i++){
    ulel.innerHTML += "<li>" +  mylead[i] + "</li>"
}