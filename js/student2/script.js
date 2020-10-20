let namesInput = document.querySelector(".name")
let hometownInput = document.querySelector(".hometown")
let sumbitBtn = document.getElementById("showTooltips")
sumbitBtn.onclick = function() {
    let name = namesInput.value
    let hometown = hometownInput.value
    let student = {
        "name" : name,
        "hometown" : hometown
    }
    let i = 0
    let students = JSON.parse(window.localStorage.getItem("studentInfo"))
    if(students !== null){
        console.log(student)
        students.push( student )
    }
    else{
        students = []
        students[0] = student
    }
    console.log(students)
    window.localStorage.setItem("studentInfo", JSON.stringify(students))
    
}