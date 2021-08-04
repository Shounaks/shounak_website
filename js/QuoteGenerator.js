//<!-- =========================================================================================================================================== -->
/**
 * @description Random Quote Generator
 * @author Shounak Bhalerao
 */

 let quotes =[
    'Learning does not make one learned: there are those who have knowledge and those who have understanding. The first requires memory and the second philosophy.',
    'I don’t think man was meant to attain happiness so easily. Happiness is like those palaces in fairy tales whose gates are guarded by dragons: we must fight in order to conquer it.',
    'There is neither happiness nor unhappiness in this world; there is only the comparison of one state with another. Only a man who has felt ultimate despair is capable of feeling ultimate bliss. It is necessary to have wished for death in order to know how good it is to live.....the sum of all human wisdom will be contained in these two words: Wait and Hope.',
    'I hate this life of the fashionable world, always ordered, measured, ruled, like our music-paper. What I have always wished for, desired, and coveted, is the life of an artist, free and independent, relying only on my own resources, and accountable only to myself.',
    'I have no fear of ghosts, and I have never heard it said that so much harm had been done by the dead during 6,000 years as it brought by the living in a single day.',
  ];
  function getNewQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quotes').innerText = "\"" + quotes[randomNumber] + "\"";
  }
  