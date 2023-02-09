/*

Hierbij een kleine database (van 30 constante variabelen) die de voedingsstoffen bevat die je kan invullen.

één glas = 300 mL
één blikje = 250 mL
één caprisun = 200 mL
één flesje = 500 mL
één zakje = 100 g

De macro's van fish sticks tellen per zes fish sticks.
De macro's van McNuggets tellen per 9 nuggets.
De macro's van Jumbo Hotelcake tellen per plak.

*/

const glasIceTeaPeach = [99, 24.3, 0.3, 0.3];
const blikjeRedbull = [110, 28, 0, 0];
const oreoDonut = [483, 51.3, 28, 5.2];
const banaan = [124, 30, 0.4, 1];
const pizza = [1207, 128.4, 56.9, 44.8];
const americanCookieDoubleChocolate = [419, 55.8, 18.3, 6.2];
const scharrelEi = [83, 0, 6.7, 7.6];
const glasFristi = [129, 23.1, 0, 6];
const roomboterCakeje = [166, 20, 8.6, 2.3];
const glasCola = [126, 31.8, 0, 0];
const ferreroRocher = [73, 5.7, 5.3, 1];
const caprisun = [42, 9.8, 0, 0];
const roomboterCroissant = [194, 18, 11, 3.8];
const donut = [100, 15, 3.5, 2];
const mcDonaldsMediumFrietjes = [340, 41, 17, 4];
const mcDonaldsHamburger = [254, 32, 8, 12];
const mcDonaldsNuggets = [400, 28, 21, 25];
const flesjeAquarius = [90, 20.5, 0, 0];
const magnum = [239, 24, 14, 2.6];
const fishSticks = [228, 18, 9, 9];
const eierKoek = [99, 19.7, 1.1, 2.5];
const kaiserBroodje = [130, 26.4, 0.6, 3];
const zakjeMMs = [485, 69, 21, 4.2];
const danoontje = [46, 4.9, 1.5, 3.2];
const proteineReep = [197, 9.2, 12, 10.2];
const flesjeAa = [295, 74, 0, 0];
const chocoPepernoten = [480, 70, 20, 5];
const zakjeAmandelen = [631, 7.4, 52, 21.5];
const reepTwix = [123, 16, 5.9, 1.1];
const hotelCakeJumbo = [128, 15.6, 6.5, 1.8];
const komLinzensoep = [220, 35.7, 2.5, 10.5];

// In plaats van "" of '' gebruik ik ``, om een multi-line string te maken (zonder \n).

let voedingsStoffen = `Glas Ice Tea,
Blikje Red Bull,
Oreo Donut,
Banaan,
Pizza,
American Cookie,
Scharrel ei,
Glas Fristi,
Roomboter Cakeje,
Glas Cola,
Ferrero Rocher,
Caprisun,
Roomboter Croissant,
Donut,
McFries,
McDonalds Hamburger,
McNuggets,
Flesje Aquarius,
Magnum,
Fish Sticks,
Eierkoek,
Kaiserbroodje,
Zakje M&M's,
Danoontje,
Proteïne Reep,
Flesje Aa,
Choco Pepernoten,
Zakje Amandelen,
Reep Twix,
Hotelcake,
Kom Linzensoep`;

/*

Hieronder zijn alle ids van de voedingswaarden hierboven geconstateerd.
Bijvoorbeeld:

id "pizza" geeft [1207, 128.4, 56.9, 44.8]

*/

const ids = {
  "glasicetea": glasIceTeaPeach,
  "blikjeredbull": blikjeRedbull,
  "oreodonut": oreoDonut,
  "banaan": banaan,
  "pizza": pizza,
  "americancookie": americanCookieDoubleChocolate,
  "scharrelei": scharrelEi,
  "glasfristi": glasFristi,
  "roombotercakeje": roomboterCakeje,
  "glascola": glasCola,
  "ferrerorocher": ferreroRocher,
  "caprisun": caprisun,
  "roombotercroissant": roomboterCroissant,
  "donut": donut,
  "mcfries": mcDonaldsMediumFrietjes,
  "mcdonaldshamburger": mcDonaldsHamburger,
  "mcnuggets": mcDonaldsNuggets,
  "flesjeaquarius": flesjeAquarius,
  "magnum": magnum,
  "fishsticks": fishSticks,
  "eierkoek": eierKoek,
  "kaiserbroodje": kaiserBroodje,
  "zakjem&m's": zakjeMMs,
  "danoontje": danoontje,
  "proteïnereep": proteineReep,
  "flesjeaa": flesjeAa,
  "chocopepernoten": chocoPepernoten,
  "zakjeamandelen": zakjeAmandelen,
  "reeptwix": reepTwix,
  "hotelcake": hotelCakeJumbo,
  "komlinzensoep": komLinzensoep
};

/*

Deze functie geeft de voedingswaarden van een opgegeven id.
(elke voedingsmiddel wordt geidentificeerd met id)

*/

function VoedingsWaarde(id) {
  return ids[id.toLowerCase().replaceAll(" ", "")];
}

let calorieën = 0;
let koolHydraten = 0;
let vetten = 0;
let eiwitten = 0;

// Functie VoegCalorieënToe(aantal) zorgt ervoor dat het aantal calorieën van een opgegeven voedingsmiddel wordt toegevoegd aan de waarde van de variabele 'calorieën'.

function VoegCalorieënToe(aantal) {
  calorieën += aantal;
}

// Functie VoegKoolhydratenToe(aantal) zorgt ervoor dat het aantal koolhydraten van een opgegeven voedingsmiddel wordt toegevoegd aan de waarde van de variabele 'koolHydraten'.

function VoegKoolhydratenToe(aantal) {
  koolHydraten += aantal;
}

// Functie VoegVettenToe(aantal) zorgt ervoor dat het aantal vetten van een opgegeven voedingsmiddel wordt toegevoegd aan de waarde van de variabele 'vetten'.

function VoegVettenToe(aantal) {
  vetten += aantal;
}

// Functie VoegEiwittenToe(aantal) zorgt ervoor dat het aantal vetten van een opgegeven voedingsmiddel wordt toegevoegd aan de waarde van de variabele 'eiwitten'.

function VoegEiwittenToe(aantal) {
  eiwitten += aantal;
}

/*

De volgende codeblok berekent je dagelijkse calorie doel, door middel van de "TDEE" methode.
Hierover kun je lezen op:
https://www.opexfit.com/blog/how-to-calculate-tdee-total-daily-energy-expenditure


BMR : Basal Metabolic Rate
TEF : Thermic Effect of Feeding
EEE : Exercise Energy Expenditure
NEAT: Non-Exersise Activity Thermogenesis

Voorbeelden van aantallen NEAT:
Zittende kantoorbaan : 250 NEAT
Lichte training      : 300 NEAT
Matige training      : 350 NEAT
Zware training       : 400 NEAT
Bezorger / bouwvakker: 500 NEAT

*/

let massaIsEenGetal = false;
let massa = 0;

// Blijf opnieuw vragen tot er een geldig getal als massa wordt gegeven.

while (!massaIsEenGetal) {
  let massa = prompt("Hoeveel weeg je? ");
  
  if (!isNaN(massa)) {
    if (massa > 0) {
      massa = parseInt(massa);
      massaIsEenGetal = true;
    } else if (massa == "") {
      console.log("Je moet een waarde invullen.");
    } else {
      console.log("Je massa kan niet negatief zijn.");
    }
  } else {
    console.log("'" + massa + "' is geen geldig getal.");
  }
}

let BMR = massa * 20; // Basal Metabolic Rate
let TEF = BMR * 0.1; // Thermic Effect of Feeding

let EEEIsGeldig = false;
let EEE = 0; // Exercise Energy Expenditure

// Blijf opnieuw vragen tot er een geldig antwoord wordt gegeven voor de EEE waarde.

while (!EEEIsGeldig) {
  let vraagEEE = prompt("Hoe intens train je? Kies uit niet, normaal, tussenliggend en intens. ");
  
  if (vraagEEE == "niet") {
    EEE = 125;
    EEEIsGeldig = true;
  } else if (vraagEEE == "normaal") {
    EEE = 250;
    EEEIsGeldig = true;
  } else if (vraagEEE == "tussenliggend") {
    EEE = 375;
    EEEIsGeldig = true;
  } else if (vraagEEE == "intens") {
    EEE = 500;
    EEEIsGeldig = true;
  } else {
    console.log(vraagEEE + " is geen geldige optie. Kies uit normaal, tussenliggend en intens.");
  }
}

let NEATIsGeldig = false;
let NEAT = 0; // Non-Exersise Activity Thermogenesis

// Blijf opnieuw vragen tot er een geldig antwoord wordt gegeven voor de NEAT waarde.

while (!NEATIsGeldig) {
  let vraagNEAT = prompt("Hoe vaak train je per week? Kies uit 0, 1-2, 3-5, 6-7. Als je vaker dan 7 keer per week traint, kies 'atleet'. ");
  
  if (vraagNEAT == "0") {
    NEAT = 250;
    NEATIsGeldig = true;
  } else if (vraagNEAT == "1-2") {
    NEAT = 300;
    NEATIsGeldig = true;
  } else if (vraagNEAT == "3-5") {
    NEAT = 350;
    NEATIsGeldig = true;
  } else if (vraagNEAT == "6-7") {
    NEAT = 400;
    NEATIsGeldig = true;
  } else if (vraagNEAT == "atleet") {
    NEAT = 500;
    NEATIsGeldig = true;
  } else {
    console.log(vraagNEAT + " is geen geldige optie. Kies uit 1-2, 3-5, 6-7 en atleet.");
  }
}

// TDEE is het aantal calorieën die de gebruiker per dag nodig heeft om zijn of haar gewicht te onderhouden.

let TDEE = BMR + TEF + EEE + NEAT;
console.log("Jouw dagelijkse calorie-doel om je gewicht te onderhouden is " + TDEE + ".");

// true is (natuurlijk) altijd waar, dus de while-loop blijft voor altijd runnen.

while (true)
{
  console.log("\n");
  
  /*

  De volgende drie lines zorgen ervoor dat er geen getallen zijn met twee of meer decimalen,
  bijvoorbeeld 29.633333333332

                ^ wordt afgerond naar 29.6
                
  */
  
  koolHydraten = Math.round(koolHydraten * 10) / 10;
  vetten = Math.round(vetten * 10) / 10;
  eiwitten = Math.round(eiwitten * 10) / 10;

  // Toont aantal macro's aan.

  console.log("Macro's totaal:");
  
  if (TDEE > calorieën) {
    console.log("Calorieën: " + calorieën + " (" + (TDEE - calorieën) + " calorieën te gaan om je doel te bereiken)");
  } else if (TDEE == calorieën) {
    console.log("Calorieën: " + calorieën);
    console.log("Je hebt je dagelijkse calorie-doel behaald!");
  } else if(TDEE < calorieën) {
    console.log("Calorieën: " + calorieën + " (" + (calorieën - TDEE) + " teveel)");
  }
  
  console.log("Koolhydraten: " + koolHydraten);
  console.log("Vetten: " + vetten);
  console.log("Eiwitten/Proteïne: " + eiwitten);

  console.log("\n");

  // Hier wordt gevraagd of de gebruiker heeft gegeten (+ calorieën, koolhydraten, vetten, eiwitten) of getraind (- calorieën)
  
  let gegetenOfGetraind = prompt("Heb je gegeten of getraind? ");

  /*

  In plaats van

  if (gegetenOfGetraind == "gegeten") { ... }

  wordt er gecheckt of het "eten" bevat of "train", zodat als de gebruiker een typfout maakt (maar de string bevat wel één van de twee dingen), weet het programma welk woord de gebruiker bedoelt.

  Bijvoorbeeld:

  gefeten -> + calorieën
  gwtrainf -> - calorieën

  Dit wordt bereikt door x.includes(y)
  
  */
  
  if (gegetenOfGetraind.includes("eten") && !gegetenOfGetraind.includes("train")) {
    console.log("Typ 'lijst' om de lijst met beschikbare voedingsstoffen te zien.");
    let voedingsStof = prompt("Wat heb je gegeten/gedronken? ");
    
    // Check of ingevulde waarde in dictionary ids[key] zit
    
    if (ids[voedingsStof.toLowerCase().replaceAll(" ", "")] == undefined && voedingsStof != "lijst") {
      console.log("'" + voedingsStof + "' is geen geldige voedingsstof (zit niet in onze database).");
      continue;
    } else if (voedingsStof == "lijst") {
      console.log("Hieruit kun je kiezen:\n");
      console.log(voedingsStoffen);
    } else {
      console.log("Macro's voor " + voedingsStof + ":");
      console.log("Calorieën: " + VoedingsWaarde(voedingsStof)[0]);
      console.log("Koolhydraten: " + VoedingsWaarde(voedingsStof)[1]);
      console.log("Vetten: " + VoedingsWaarde(voedingsStof)[2]);
      console.log("Eiwitten/Proteïne: " + VoedingsWaarde(voedingsStof)[3]);

      VoegCalorieënToe(VoedingsWaarde(voedingsStof)[0]);
      VoegKoolhydratenToe(VoedingsWaarde(voedingsStof)[1]);
      VoegVettenToe(VoedingsWaarde(voedingsStof)[2]);
      VoegEiwittenToe(VoedingsWaarde(voedingsStof)[3]);
    }
  }
  else if (gegetenOfGetraind.includes("train") && !gegetenOfGetraind.includes("eten")) {
    let aantalVerbrand = prompt("Hoeveel calorieën heb je verbrand? ");
    
    // Check of ingevulde waarde een getal is.
    
    if (!isNaN(aantalVerbrand)) {
      
      // Als het een getal is, Trek het van calorieën af (verbrande calorieën)
      
      calorieën -= aantalVerbrand;
    } else {
      console.log("'" + aantalVerbrand + "' is geen geldig getal.");
    }
  } else {
    console.log("'" + gegetenOfGetraind + "' is geen geldig antwoord. Kies uit 'gegeten' en 'getraind'.");
  }
}