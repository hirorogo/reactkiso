const youso = document.getElementById("a")
let color = "black"

function ColorValue(inputColor){
    color = inputColor
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const a = document.createElement("div")
        a.classList.add("div")
        a.addEventListener("click", () => {
            a.classList.add(color)
        })
        youso.appendChild(a)

    }
}