var adjectives = [
  'ugly',
  'bad',
  'disgusting',
  'nasty',
  'repulsive',
  'obscene',
  'detestable',
  'repugnant',
  'hideous',
  'offensive',
  'despicable',
  'villainous',
  'undesirable',
  'abominable',
  'appalling',
  'loathsome',
  'sickening'
];

var nouns = [
  'cat',
  'dog',
  'rat',
  'hamster',
  'ostrich',
  'cow',
  'horse',
  'duck',
  'sheep',
  'koala',
  'gazelle',
  'crocodile',
  'bat',
  'octopus',
  'spider',
  'pig',
  'bear'
];

function formatName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomUsername() {
  var adjective = Math.floor(Math.random()*adjectives.length);
  var noun = Math.floor(Math.random()*nouns.length);

  return formatName(adjectives[adjective]) + ' ' + formatName(nouns[noun]);
}

module.exports = {
  randomUsername: randomUsername
}
