const incorrect = document.querySelectorAll(".incorrect")
const restart = document.querySelectorAll(".restart")

const win = document.getElementById("win")
const lose = document.getElementById("lose")

const correct1 = document.getElementById("correct1")
const correct2 = document.getElementById("correct2")
const correct3 = document.getElementById("correct3")
const correct4 = document.getElementById("correct4")
const correct5 = document.getElementById("correct5")


function hideSection(section){
    section.classlist.add("hidden")
}

function hideAllSections(){
    answers1.classList.add("hidden")
    answers2.classList.add("hidden")
    answers3.classList.add("hidden")
    answers4.classList.add("hidden")
    answers5.classList.add("hidden")
    lose.classList.add("hidden")
    win.classList.add("hidden")
}

function showSection(section){
    choosed = document.getElementById(`${section}`)
    choosed.classList.remove("hidden")
}

restart.forEach(restart_b =>{
    restart_b.addEventListener("click", ()=>{
        location.reload()
    })
})

incorrect.forEach(incorrect_b =>{
    incorrect_b.addEventListener('click', () => {
        hideAllSections()
        showSection("lose")
    });
})

correct1.addEventListener("click", ()=>{
    hideAllSections()
    showSection("answers2")
})
correct2.addEventListener("click", ()=>{
    hideAllSections()
    showSection("answers3")
})
correct3.addEventListener("click", ()=>{
    hideAllSections()
    showSection("answers4")
})
correct4.addEventListener("click", ()=>{
    hideAllSections()
    showSection("answers5")
})
correct5.addEventListener("click", ()=>{
    hideAllSections()
    showSection("win")
})

alert("Stronę wykonał: Rafał Zalewski")
