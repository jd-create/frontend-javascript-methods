/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

const fruit = "Banaan";
const vegetable = "Aardappel";

function isFirstWordLongestThanSecond (word1, word2) {
    return word1.length > word2.length;
   }

console.log(isFirstWordLongestThanSecond(fruit,vegetable))


/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

let word3 = "banaan";

function lastCharOfWord(word3) {

    return word3.charAt(word3.length - 1);

}

console.log(lastCharOfWord(vegetable));
console.log(lastCharOfWord(fruit));

/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

const userInput = "  De kat krabt de krullen van de trap ";

function deleteSpaceBeforeAndAfter(sentence) {
    return sentence.trim();
}

console.log(deleteSpaceBeforeAndAfter(userInput))

/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"

function isThisWordPresent(word, sentence) {
    word = word.toLowerCase();
    sentence = sentence.toLowerCase();
    return sentence.includes(word);
}

console.log(isThisWordPresent("Fantastisch", story));
console.log(isThisWordPresent("fantastisch", story));

/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

function cut(sentence) {
    let outcome = [];
    outcome = sentence.split(".");

    return outcome[0] + ".";
}

console.log(cut(story));

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";





