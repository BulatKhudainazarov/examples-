var word1 = [ "рука", "нога", "голова", "ручка", "спина", "живот"];
var wordAdjetives = [ "чреватая", "визгливая", "едкая", "не красивая", "ужасная" ];
var animalsPart = ["лапа", "ухо", "рыло", "ступня", "хвост", "клюв" ];
var animals = ["кота", "собаки", "носорога", "кита", "лисицы"];

var some1 = word1[Math.floor(Math.random(word1) * word1.length)];
var some2 = wordAdjetives[Math.floor(Math.random(wordAdjetives) * wordAdjetives.length)];
var some3 = animalsPart[Math.floor(Math.random(animalsPart) * animalsPart.length)];
var some4 = animals[Math.floor(Math.random(animals) * animals.length)];
var randomInsult = "У тебя " + some1 + " еще более " + some2 + " чем " + some3 + " у " + some4;
randomInsult;
