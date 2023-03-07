# Calorie-Tracker

Bereken je TDEE en hou bij hoeveel je eet! \
Gemaakt door Georges Abdulahad en Christian Abdalla.

## Gebruiksaanwijzing

Als eerst wordt er gevraagd hoeveel je weegt. Dit is nodig om te weten wat je BMR (Basic Metabolic Rate) is.
Dit getal wordt gebruikt om uit te rekenen hoeveel calorieën je dagelijks nodig hebt. \
`Hoeveel weeg je? > 55`

Daarna wordt er gevraagd hoe intens je traint. Je hebt vier opties om uit te kiezen:
- niet
- normaal
- tussenliggend
- intens

`Hoe intens train je? Kies uit niet, normaal, tussenliggend en intens. > intens`

De laatste vraag die gesteld wordt om je TDEE te berekenen, is hoe vaak je wekelijks traint. Je hebt vijf opties om uit te kiezen:
- 0
- 1-2
- 3-5
- 6-7
- atleet

Als je vaker dan 7 keer per week traint, kies 'atleet'.

`Hoe vaak train je per week? Kies uit 0, 1-2, 3-5, 6-7. Als je vaker dan 7 keer per week traint, kies 'atleet'. > 6-7`

Nu begint het proces van de calorie tracker. Dit gaat voor altijd door (tot je de app sluit). \
Er wordt als eerst gevraagd of je hebt gegeten of getraind.
`Heb je gegeten of getraind? > ...`
### Getraind
Als je 'getraind' kiest, word er gevraagd hoeveel calorieën je hebt verbrand. Het aantal die je dan intypt, wordt van je totale aantal calorieën afgetrokken.

`Heb je gegeten of getraind? > getraind`
### Gegeten
Als je 'gegeten' kiest, heb je veel opties om uit te kiezen. \
Wil je de lijst met alle voedingsmiddelen die je in kan vullen zien? Typ dan 'lijst'.

```
Heb je gegeten of getraind? > gegeten
Typ 'lijst' om de lijst met beschikbare voedingsstoffen te zien.
Wat heb je gegeten/gedronken? > lijst
Hieruit kun je kiezen:

...
```

Dit is de lijst:
- Glas Ice Tea
- Blikje Red Bull
- Oreo Donut
- Banaan
- Pizza
- American Cookie
- Scharrel ei
- Glas Fristi
- Roomboter Cakeje
- Glas Cola
- Ferrero Rocher
- Caprisun
- Roomboter Croissant
- Donut
- McFries
- McDonalds Hamburger
- McNuggets
- Flesje Aquarius
- Magnum
- Fish Sticks
- Eierkoek
- Kaiserbroodje
- Zakje M&M's
- Danoontje
- Proteïne Reep
- Flesje Aa
- Choco Pepernoten
- Zakje Amandelen
- Reep Twix
- Hotelcake
- Kom Linzensoep

Wanneer je één van deze voedingsmiddelen invult, komen de macro's van dat voedingsmiddel op het scherm te staan. Ze worden daarna toegevoegd aan je totale macro's.

Hier is een voorbeeld van hoe de app eruitziet:

```
Hoeveel weeg je? > 55
Hoe intens train je? Kies uit niet, normaal, tussenliggend en intens. > intens
Hoe vaak train je per week? Kies uit 0, 1-2, 3-5, 6-7. Als je vaker dan 7 keer per week traint, kies 'atleet'. > 6-7
Jouw dagelijkse calorie-doel om je gewicht te onderhouden is 2110.

Macro's totaal:
Calorieën: 0 (2110 calorieën te gaan om je doel te bereiken)
Koolhydraten: 0
Vetten: 0
Eiwitten/Proteïne: 0

Heb je gegeten of getraind? > gegeten
Typ 'lijst' om de lijst met beschikbare voedingsstoffen te zien.
Wat heb je gegeten/gedronken? > oreo donut

Macro's voor oreo donut:
Calorieën: 483
Koolhydraten: 51.3 g
Vetten: 28 g
Eiwitten/Proteïne: 5.2 g

Macro's totaal:
Calorieën: 483 (1627 calorieën te gaan om je doel te bereiken)
Koolhydraten: 51.3 g
Vetten: 28 g
Eiwitten/Proteïne: 5.2 g

Heb je gegeten of getraind? > getraind
Hoeveel calorieën heb je verbrand? > 177

Calorieën: 306 (1804 calorieën te gaan om je doel te bereiken)
Koolhydraten: 51.3 g
Vetten: 28 g
Eiwitten/Proteïne: 5.2 g

...
```
