//maak van de big-five-button een variabele
const bigFiveButtons = document.querySelectorAll(".big-five-button");

Array.from(bigFiveButtons).forEach(function (animal) {  //zet om in array en pas forEach toe
    console.log(animal);
    animal.addEventListener('click', function (e) { //maak clickevent vast aan button
        const nameAnimal = e.target.textContent; //zet naam dier in variabele
        console.log(nameAnimal);

        const newLi = document.createElement('li'); //maak nieuw li
        console.log(newLi);

        newLi.appendChild(document.createTextNode(nameAnimal)); //vernoem li naar gekozen dier
        console.log(newLi);

        const spotList = document.getElementById('spotted-animals-list');  //selecteer parent
        console.log(spotList);
        spotList.appendChild(newLi); //maak nieuw li vast aan lijst
    })
})

//maak van remove-first-button een variabele
const removeFirstButton = document.getElementById('remove-first-item-button');
console.log(removeFirstButton);

removeFirstButton.addEventListener('click', function () { //maak clickevent vast aan button
    const spotList = document.getElementById('spotted-animals-list'); //selecteer parent
    console.log(spotList);

    const firstLi = spotList.getElementsByTagName('li')[0];//selecteer child
    console.log(firstLi);

    spotList.removeChild(firstLi); //verwijder child
})

//maak van remove-all-button een variabele
const removeAllButton = document.getElementById('remove-all-button');
console.log(removeAllButton);

removeAllButton.addEventListener('click', function () { //maak clickevent vast aan button
    const spotList = document.getElementById('spotted-animals-list'); //selecteer parent
    console.log(spotList);
    spotList.innerHTML = ''; //maak de lijst leeg
})


