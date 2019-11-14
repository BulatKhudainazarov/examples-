var drasnWordOne = ["жадиная", "турецкая", "злая", "сердитая", "глупая"]
var drasnWordTwo = ["муха", "выдра", "дубина", "мартышка", "крыса"]
var draznilka1 = drasnWordOne[Math.floor(Math.random(drasnWordOne) * drasnWordOne.length)];
var draznilka2 = drasnWordTwo[Math.floor(Math.random(drasnWordTwo) * drasnWordTwo.length)];
var firstWord = draznilka1[0].toUpperCase();
var restOfString = draznilka1.slice(1);
var firstWordEnd = firstWord + restOfString;
var end = [firstWordEnd, draznilka2].join(" ");
end;