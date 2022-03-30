# Canvas 
Ein Canvas ist im Javascript-Context quasi ein Zeichenbrett. Auf diesem Zeichenbrett können wir nun unsere verschiedenen Figuren zeichnen und animieren. 

## Ein Canvas anlegen
Um auf ein Canvas zu zeichnen, brauchen wir zuerst natürlich ein Canvas. Dafür öffnen wir unsere `.html` Datei und schreiben folgende Zeile in dem body:

```html
<canvas id="game"></canvas>
```
> Ein neues leeres Canvas mit der id: game

Diese Zeile erstellt ein neues Canvas mit der Identifikation (kurz: id) game. Die ID vergeben wir damit wir Sie in Javascript leichter referenzieren können.

## Das canvas stylen
Um das Canvas zu stylen um z.B. die größe und breite zu ändern, können wir das ganze canvas mit CSS weiter anpassen.
Dafür schreiben wir in den Head-Bereich einen neuen Tag mit dem Namen style und fügen dort den Canvas ein.

```css
<style>
  body {
    margin: 0px;
    padding: 0px;
  }

  canvas {
    background: grey;
    width: 1600px;
    height: 800px;
  }
</style>
```
Damit wird der Abstand vom body (dem ganzen Dokument) auf 0 gesetzt und zusätzlich der canvas auf einen grauen Hintergrund und die Breite auf 1600px und die höhe auf 800px.

## Ganzer HTML-Code

Der ganze Code in der `index.html` sieht damit wie folgt aus:

```html
<!DOCTYPE html>
<html>

<head>
  <title>Mein erstes Spiel</title>
  <style>
    body {
      margin: 0px;
      padding: 0px;
    }

    canvas {
      background: grey;
      width: 1600px;
      height: 800px;
    }
  </style>
</head>

<body>
  <canvas id="game"></canvas>
  <script src="game.js"></script>
</body>

</html>
```

## Auf dem Canvas zeichnen
Um auf dem Canvas zu zeichnen brauchen wir zuerst eine Referenz auf den Canvas. Dafür können wir eine neue Variable anlegen und ihr die Referenz auf das Canvas mit der Id `game` geben. Dafür gibt es im globalen Objekt `document` die Funktion `getElementById`.

Danach müssen wir den Context des Canvas definieren. Hier gibt es 2d und 3d. Der Code dafür sieht also nun so aus:

```js
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
```

Jetzt definieren wir noch um damit später leichter zu arbeiten die höhe und breite des canvas in zusätzlichen Variablen:

```js
var WINDOWS_WIDTH = canvas.width;
var WIDOWS_HEIGHT = canvas.height;
```

Als nächstes können wir unser erstes Objekt auf dem canvas zeichnen.

Dafür wird zuerst die Methode vom unserem Canvas `beginPath` benutzt. Als letztes muss `closePath` geschrieben. Alles was nun dazwischen liegt wird zu dem Objekt gezählt welches gezeichnet werden soll. Das ist wichtig, damit der Browser weiß welche Farbe, Form und Style das jeweilige Objekt haben soll ohne durcheinander zu geraten.

```js
ctx.beginPath();
// rect ist eine Funktion, die folgende Werte bekommt.
// 1. die x Position des Elements
// 2. die y Position des Elements
// 3. die breite des Elements
// 4. die höhe des Elements
ctx.rect(10,10 50, 50);
// fillStyle gibt die Farbe wieder, die das Element annehmen soll
ctx.fillStyle = '#FFFFFF';
ctx.fill();
ctx.closePath();
```

## Das canvas leeren
Das Canvas kann mittels folgender Funktion wieder geleert werden. Das ist dafür wichtig um später die Bewegung darstellen zu können. Damit wird dann quasi die vorherige Position wieder gelöscht. 

```js
ctx.clearRect(0, 0, canvas.width, canvas.height);
```
Hier wird die Position eingegrenzt worin alles geleert wird. Dafür geben wir die x und y Koordinate des Anfangs an und die x und y Koordinate des Endes an. Das können wir ganz einfach machen, indem wir den kompletten Bildschirm nehmen, welches dann von 0,0 bis zur maximalen Breite und Länge unseres Canvas geht.

