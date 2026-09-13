const ageText = document.getElementById("age")

const age = Math.floor((new Date() - new Date("2007-12-19")) / (1000 * 3600 * 24 * 365))

ageText.innerHTML = "I am " + age + " years old"