/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Tristan Galloway",
    photo: "images/profile_picture.jpg",
    favoriteFoods: [
        "Wings",
        "Pizza",
        "Chicken Alfredo"
    ],
    hobbies: [
        "Gaming",
        "Movies",
        "Working out"
    ],
    placesLived: []
    
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {place: "Kent, Washington",
    length: "16 years"},
    {place: "Rexburg, Idaho",
    length: "5 years"},
    {place: "Pocatello, Idaho",
    length: "2 Months"}
);


/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;


/* Photo with attributes */
document.getElementById('photo').setAttribute('src', myProfile.photo)
document.getElementById('photo').setAttribute('alt', myProfile.name)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li)
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li)
})

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.getElementById('places-lived').appendChild(dt)
    document.getElementById('places-lived').appendChild(dd)
})

