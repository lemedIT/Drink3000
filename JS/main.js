let cocktail = [
    "Original",
    "Mojito",
    "Tropical"  
];

let original = document.querySelector(".selectionnerOr");
let mojito = document.querySelector(".selectionnerMo");
let tropical = document.querySelector(".selectionnerTro");

let boisson = document.querySelector(".nomBoisson");

let choix = "Aucune";
//utilisation innertext pour affecter la valeur à .nomBoisson -- utiliser textContent de préférence
choix = boisson.textContent;

original.addEventListener("click", () => {
    choix = cocktail[0];
    boisson.textContent = cocktail[0];
    console.log(choix);
});

mojito.addEventListener("click", () => {
    choix = cocktail[1];
    boisson.textContent = cocktail[1];
    console.log(choix);
});

tropical.addEventListener("click", () => {
    // choix = cocktail[2];
    boisson.textContent = cocktail[2];
    // console.log(choix);
});


let energie = document.querySelector(".btnEnergie");
let desalt = document.querySelector(".btnDesalt");


energie.addEventListener();

