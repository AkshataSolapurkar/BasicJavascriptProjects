
let countel = document.getElementById("count-il")
let count = 0
function increment() {
    count = count + 1
    countel.innerText = count

}
let saveel = document.getElementById("entered")
function save() {
    console.log(count)
    let kill = count + "-"
    saveel.innerText+= kill
    countel.innerHTML=0
    count=0
}
