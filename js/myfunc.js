/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var data = [{ // result[0] ==1
        "1": 0,
        "2": 5,
        "3": 10,
        "4": 15,
        "5": 20,
        "6": 25,
        "7": 30,
        "8": 35,
        "9": 40,
        "10": 45,
        "11": 50,
        "12": 55,
        "id": 1
    },
    {
        "1": 5,
        "2": 5,
        "3": 15,
        "4": 20,
        "5": 25,
        "6": 30,
        "7": 35,
        "8": 40,
        "9": 45,
        "10": 50,
        "11": 55,
        "12": 60,
        "id": 2
    },
    {
        "1": 10,
        "2": 15,
        "3": 10,
        "4": 25,
        "5": 30,
        "6": 35,
        "7": 40,
        "8": 45,
        "9": 50,
        "10": 55,
        "11": 60,
        "12": 65,
        "id": 3
    },
    {
        "1": 15,
        "2": 20,
        "3": 25,
        "4": 15,
        "5": 35,
        "6": 40,
        "7": 45,
        "8": 50,
        "9": 55,
        "10": 60,
        "11": 65,
        "12": 70,
        "id": 4
    },
    {
        "1": 20,
        "2": 25,
        "3": 30,
        "4": 35,
        "5": 20,
        "6": 45,
        "7": 50,
        "8": 55,
        "9": 60,
        "10": 65,
        "11": 70,
        "12": 75,
        "id": 5
    },
    {
        "1": 25,
        "2": 30,
        "3": 35,
        "4": 40,
        "5": 45,
        "6": 25,
        "7": 55,
        "8": 60,
        "9": 65,
        "10": 70,
        "11": 75,
        "12": 80,
        "id": 6
    },
    {
        "1": 30,
        "2": 35,
        "3": 40,
        "4": 45,
        "5": 50,
        "6": 55,
        "7": 30,
        "8": 65,
        "9": 70,
        "10": 75,
        "11": 80,
        "12": 85,
        "id": 7
    },
    {
        "1": 35,
        "2": 40,
        "3": 45,
        "4": 50,
        "5": 55,
        "6": 60,
        "7": 65,
        "8": 35,
        "9": 75,
        "10": 80,
        "11": 85,
        "12": 90,
        "id": 8
    },
    {
        "1": 40,
        "2": 45,
        "3": 50,
        "4": 55,
        "5": 60,
        "6": 65,
        "7": 70,
        "8": 75,
        "9": 40,
        "10": 85,
        "11": 90,
        "12": 95,
        "id": 9
    },
    {
        "1": 45,
        "2": 50,
        "3": 55,
        "4": 60,
        "5": 65,
        "6": 70,
        "7": 75,
        "8": 80,
        "9": 85,
        "10": 45,
        "11": 95,
        "12": 100,
        "id": 10
    },
    {
        "1": 50,
        "2": 55,
        "3": 60,
        "4": 65,
        "5": 70,
        "6": 75,
        "7": 80,
        "8": 85,
        "9": 90,
        "10": 95,
        "11": 50,
        "12": 105,
        "id": 11
    },
    {
        "1": 55,
        "2": 60,
        "3": 65,
        "4": 70,
        "5": 75,
        "6": 80,
        "7": 85,
        "8": 90,
        "9": 95,
        "10": 100,
        "11": 105,
        "12": 55,
        "id": 12
    }
]


let zone1 = [1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1211]
let zone2 = [1219, 1213, 1216, 1220, 1224, 1231]
let zone3 = [1212, 1213, 1215, 1218, 1223, 1225, 1234, 1292]
let zone4 = [1214, 1222, 1226, 1228, 1232, 1293, 1222]
let zone5 = [1217, 1233, 1294, 1256, 1253, 1255]
let zone6 = [1237, 1258, 1242, 1245]
let zone7 = [1241, 1244, 1290]
let zone8 = [1246, 1239, 1288, 1252]
let zone9 = [1243, 1236]
let zone10 = [1286, 1287, 1251]
let zone11 = [1295, 1254, 1237, 1247]
let zone12 = [1285, 1248]
let zone13 = [1281, 1283, 1284]
let zone14 = [1296]



var poids_prices = new Array();
poids_prices["None"] = 0;
poids_prices["0"] = 0;
poids_prices["1"] = 2;
poids_prices["2"] = 4;
poids_prices["3"] = 7;
poids_prices["4"] = 10;
poids_prices["5"] = 13;
poids_prices["6"] = 15;

//Set up an associative array
var type_course = new Array();
type_course["simple"] = 17;
type_course["cargo"] = 34;



var urg_prices = new Array();
urg_prices["rapide"] = 1;
urg_prices["urgent"] = 2;




//






// getTypePrice() finds the price based on infos
// Here, we need to take user's the selection from radio button selection
function getTypePrice() {
    var typePrice = 0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["courseform"];
    //Get a reference to the course the user Chooses name=selectedtype":
    var selectedType = theForm.elements["inputGroupSelect01"];

    // var selectedType theForm.elements["selectedtype"];
    //We loop through each radio buttons
    for (var i = 0; i < selectedType.length; i++) {
        //if the radio button is checked
        if (i == selectedType.selectedIndex) {
            //we set TypePrice to the value of the selected radio button
            //by using the type_course array
            //We get the selected Items value
            //For example type_course["simple".value]"
            //typePrice = type_course[selectedType[i].value];
            typePrice = type_course[selectedType[i].value]
                //If we get a match then we break out of this loop
                //No reason to continue if we get a match
            break;
        }
    }
    //We return the TypePrice
    return typePrice;
}




// getTypePrice() finds the price based on infos
// Here, we need to take user's the selection from radio button selection
function getUrgPrice() {
    var UrgPrice = 0;
    //Get a reference to the form id="courseform"
    var theForm = document.forms["courseform"];
    //Get a reference to the course the user Chooses name=selectedurg":
    var selectedUrg = theForm.elements["inputGroupSelect02"];
    //We loop through each radio buttons
    for (var i = 0; i < selectedUrg.length; i++) {
        //if the radio button is checked
        if (i == selectedUrg.selectedIndex) {
            //we set UrgPrice to the value of the selected radio button
            //by using the type_course array
            //We get the selected Items value
            UrgPrice = urg_prices[selectedUrg[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the UrgPrice
    return UrgPrice;
}

function sortByProperty(property) {
    return function(a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}

//This function finds the poids price based on the 
//drop down selection
function getDistPrice() {
    //Get a reference to the form id="courseform"
    //var pickup = parseInt(courseform.elements.namedItem("pick").value);
    //var pickup = parseInt(pick);
    if (pickup1.lastSelected != null) {
        var pickup = JSON.parse(pickup1.lastSelected).context.sort(sortByProperty("text_en-US"))
        var pickup = parseInt(pickup[0].text)
    }
    //var destin = parseInt(courseform.elements.namedItem("dest").value);
    //var destin = parseInt(deliver);

    if (delivery.lastSelected != null) {
        var destin = JSON.parse(delivery.lastSelected).context.sort(sortByProperty("text_en-US"))
        var destin = parseInt(destin[0].text)
    }


    let idx1 = 0;
    let idx2 = 0;

    if (zone1.indexOf(pickup) >= 0) { idx1 = 0 } else if (zone2.indexOf(pickup) >= 0) { idx1 = 1 } else if (zone3.indexOf(pickup) >= 0) { idx1 = 2 } else if (zone4.indexOf(pickup) >= 0) { idx1 = 3 } else if (zone5.indexOf(pickup) >= 0) { idx1 = 4 } else if (zone6.indexOf(pickup) >= 0) { idx1 = 5 } else if (zone7.indexOf(pickup) >= 0) { idx1 = 6 } else if (zone8.indexOf(pickup) >= 0) { idx1 = 7 } else if (zone9.indexOf(pickup) >= 0) { idx1 = 8 } else if (zone10.indexOf(pickup) >= 0) { idx1 = 9 } else if (zone11.indexOf(pickup) >= 0) { idx1 = 10 } else if (zone12.indexOf(pickup) >= 0) { idx1 = 11 } else { idx1 = null }

    if (zone1.indexOf(destin) >= 0) { idx2 = 1 } else if (zone2.indexOf(destin) >= 0) { idx2 = 2 } else if (zone3.indexOf(destin) >= 0) { idx2 = 3 } else if (zone4.indexOf(destin) >= 0) { idx2 = 4 } else if (zone5.indexOf(destin) >= 0) { idx2 = 5 } else if (zone6.indexOf(destin) >= 0) { idx2 = 6 } else if (zone7.indexOf(destin) >= 0) { idx2 = 7 } else if (zone8.indexOf(destin) >= 0) { idx2 = 8 } else if (zone9.indexOf(destin) >= 0) { idx2 = 9 } else if (zone10.indexOf(destin) >= 0) { idx2 = 10 } else if (zone11.indexOf(destin) >= 0) { idx2 = 11 } else if (zone12.indexOf(destin) >= 0) { idx2 = 12 } else { idx2 = null }


    //set Poid Price equal to value user chose
    DistPrice = data[idx1][idx2];

    //finally we return DistPrice
    return DistPrice;
}


//This function finds the poids price based on the 
//drop down selection
function getPoidsPrice() {
    var PoidsPrice = 0;
    //Get a reference to the form id="courseform"
    var theForm = document.forms["courseform"];
    //Get a reference to the select id="poids"
    var selectedPoids = theForm.elements["inputGroupSelect03"];

    //set Poids Price equal to value user chose
    PoidsPrice = poids_prices[selectedPoids.value];

    //finally we return PoidsPrice
    return PoidsPrice;
}


function doSomething() {
// # let 1219 Châtelaine
// 1213 Petit-Lançy
// 1216 Cointrin
// 1220 Avanchets
// 1224 Chêne-Bougeries
// 1231 Conches
    var TotPrice = ((getTypePrice() + getDistPrice()) * getUrgPrice()) + getPoidsPrice() //+ candlesPrice() + insciptionPrice();
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'block';
    divobj.innerHTML = TotPrice + "  CHF";

    return false;
}

function calculateTotal() {
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    // var TotPrice = (getTypePrice() * getUrgPrice()) + getPoidsPrice() + getDistPrice() //+ candlesPrice() + insciptionPrice();

    // //display the result
    // var divobj = document.getElementById('totalPrice');
    // divobj.style.display='block';
    // divobj.innerHTML = "Prix  "+TotPrice+"  CHF";

}

function hideTotal() {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}

// stop mqruee on scroll
$('#maindiv').width($('#div1').width());


// search box
function init() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: 12.9715987,
            lng: 77.59456269999998
        },
        zoom: 12
    });


    var searchBox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('pac-input'));
    google.maps.event.addListener(searchBox, 'places_changed', function() {
        searchBox.set('map', null);


        var places = searchBox.getPlaces();

        var bounds = new google.maps.LatLngBounds();
        var i, place;
        for (i = 0; place = places[i]; i++) {
            (function(place) {
                var marker = new google.maps.Marker({

                    position: place.geometry.location
                });
                marker.bindTo('map', searchBox, 'map');
                google.maps.event.addListener(marker, 'map_changed', function() {
                    if (!this.getMap()) {
                        this.unbindAll();
                    }
                });
                bounds.extend(place.geometry.location);


            }(place));

        }
        map.fitBounds(bounds);
        searchBox.set('map', map);
        map.setZoom(Math.min(map.getZoom(), 12));

    });
}



// datetime
$('#datetimePick').datetimepicker({
    format: 'hh:mm:ss a'
});

$('#datetimeDeli').datetimepicker({
    format: 'hh:mm:ss a'
});

$('#dateID').datetimepicker({
    "allowInputToggle": true,
    "showClose": true,
    "showClear": true,
    "showTodayButton": true,
    "format": "DD/MM/YYYY",
});


// submit


$(function() {
    function after_form_submitted(data) {
        if (data.result == 'success') {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        } else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors, function(key, val) {
                $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function() {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if (label) {
                    $btn.prop('type', 'submit');
                    $btn.text(label);
                    $btn.prop('orig_label', '');
                }
            });

        } //else
    }

    $('#reused_form').submit(function(e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function() {
            $btn = $(this);
            $btn.prop('type', 'button');
            $btn.prop('orig_label', $btn.text());
            $btn.text('Sending ...');
        });


        $.ajax({
            type: "POST",
            url: 'handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json'
        });

    });
});




// carousel

$('#myCarousel').carousel({
    interval: 10000
  })