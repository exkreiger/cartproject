// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));




// Only change code below this line

/*If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.*/

    function updateRecords(id, prop, value) {
    var temp = [];
    var idIndex = collection.indexOf(id);    
    var propIndex = collection.indexOf(prop);
    var valueIndex = collection.indexOf(value);

    if (idIndex < 0){
        collection.push([id][prop][value]);
        return collection;
    }
    if (propIndex < 0 && prop != "tracks"){
        collection[id].shift(prop);
    }
    
    if (prop == "tracks" && !collection[id][prop]){
        collection[id] = id;
        temp.push(prop);
        collection[id][prop] = temp;
    }
    if (prop == "tracks" && value != ""){
        collection[id][prop][value]=value;
    }
    if (value == "" && prop != "tracks"){
        delete collection[id][prop][0];
    }else{
        collection[id]=id;
        collection[id][prop]= prop;
        collection[id][prop][value] = value;
    }  

    temp = [];
    return collection;
    }

    // Alter values below to test your code
    updateRecords(5439, "artist", "ABBA");
