// Hod mincí


const padlOrel = false

if(Math.random(padlOrel) < 0.5){
    let orel = document.querySelector(".vysledek")
    orel.textContent = "Padl orel"
    let mince = document.querySelector(".mince")
    mince.classList.add("mince--orel")
} else {
    let panna = document.querySelector(".vysledek")
    panna.textContent = "Padla panna"
    let mince = document.querySelector(".mince")
    mince.classList.add("mince--panna")
}



