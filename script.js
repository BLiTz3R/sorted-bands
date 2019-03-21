// Bands array
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Sort bands, strip articles
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Strip function
function strip(str) {
    return str.replace(/^(a |an |the )/i, '').trim();
}

// Make an array of list items from sortedBands and show them in the DOM
document.querySelector('#bands').innerHTML = sortedBands.map(band => `
    <li>${band}</li>
`).join('');