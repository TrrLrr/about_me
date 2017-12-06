'use strict';

var kewl = prompt('I\'m going to ask a a few yes/no questions to see how well you know me. Sound cool?');
console.log('Did it sound cool to them?:', kewl);

if (kewl.toLowerCase == 'y' || kewl.toLowerCase == 'yes') {
  alert('Good, that\'s because it is');
} else {
  alert('Bummer, because we\'re doing it anyway.');
}

var iowa = prompt('I\'m from small town Iowa?');
console.log('They knew I wasn\'t from Iowa:', iowa);

if (iowa.toLowerCase === 'y' || iowa.toLowerCase === 'yes') {
  alert('NO! I\'m from Idaho, not Iowa. Don\'t feel too bad, alot of people make that mistake');
} else {
  alert('You\'ve correctly answered my trick question, I will grant you safe passage to question 3(I was going to anyway...)');
}

var xmas = prompt('I love me some Christmas music...');
console.log('They didn\'t know my hatred of Xmas music:', xmas);

if (xmas.toLowerCase === 'y' || xmas.toLowerCase === 'yes') {
  alert('NO! Christmas music be harshin\' my mellow.')
} else {
  alert('Das wassup')
}

var bread = prompt('Bread makes you fat.');
console.log('Bread makes you fat:', bread);

if (bread.toLowerCase === 'y' || bread.toLowerCase === 'yes') {
  alert('BREAD MAKES YOU FAT?!?!');
}
