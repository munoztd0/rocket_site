/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var data = [
    {"1": 0, "2": 5, "3": 10, "4": 15, "5": 20, "6": 25, "7": 30, "8": 35, "9": 40, "10": 45, "11": 50, "12": 55, "id": 1},
    {"1": 5, "2": 5, "3": 15, "4": 20, "5": 25, "6": 30, "7": 35, "8": 40, "9": 45, "10": 50, "11": 55, "12": 60, "id": 2},
    {"1": 10, "2": 15, "3": 10, "4": 25, "5": 30, "6": 35, "7": 40, "8": 45, "9": 50, "10": 55, "11": 60, "12": 65, "id": 3},
    {"1": 15, "2": 20, "3": 25, "4": 15, "5": 35, "6": 40, "7": 45, "8": 50, "9": 55, "10": 60, "11": 65, "12": 70, "id": 4},
    {"1": 20, "2": 25, "3": 30, "4": 35, "5": 20, "6": 45, "7": 50, "8": 55, "9": 60, "10": 65, "11": 70, "12": 75, "id": 5},
    {"1": 25, "2": 30, "3": 35, "4": 40, "5": 45, "6": 25, "7": 55, "8": 60, "9": 65, "10": 70, "11": 75, "12": 80, "id": 6},
    {"1": 30, "2": 35, "3": 40, "4": 45, "5": 50, "6": 55, "7": 30, "8": 65, "9": 70, "10": 75, "11": 80, "12": 85, "id": 7},
    {"1": 35, "2": 40, "3": 45, "4": 50, "5": 55, "6": 60, "7": 65, "8": 35, "9": 75, "10": 80, "11": 85, "12": 90, "id": 8},
    {"1": 40, "2": 45, "3": 50, "4": 55, "5": 60, "6": 65, "7": 70, "8": 75, "9": 40, "10": 85, "11": 90, "12": 95, "id": 9},
    {"1": 45, "2": 50, "3": 55, "4": 60, "5": 65, "6": 70, "7": 75, "8": 80, "9": 85, "10": 45, "11": 95, "12": 100, "id": 10},
    {"1": 50, "2": 55, "3": 60, "4": 65, "5": 70, "6": 75, "7": 80, "8": 85, "9": 90, "10": 95, "11": 50, "12": 105, "id": 11},
    {"1": 55, "2": 60, "3": 65, "4": 70, "5": 75, "6": 80, "7": 85, "8": 90, "9": 95, "10": 100, "11": 105, "12": 55, "id": 12}
];

let zones = {
    1200: 1, 1201: 1, 1202: 1, 1203: 1, 1204: 1, 1205: 1, 1206: 1, 1207: 1, 1208: 1, 1209: 1, 1211: 1,
    1219: 2, 1213: 2, 1216: 2, 1220: 2, 1224: 2, 1231: 2,
    1212: 3, 1215: 3, 1218: 3, 1223: 3, 1225: 3, 1234: 3, 1292: 3,
    1214: 4, 1222: 4, 1226: 4, 1228: 4, 1232: 4, 1293: 4,
    1217: 5, 1233: 5, 1294: 5, 1256: 5, 1253: 5, 1255: 5,
    1237: 6, 1258: 6, 1242: 6, 1245: 6,
    1241: 7, 1244: 7, 1290: 7,
    1246: 8, 1239: 8, 1288: 8, 1252: 8,
    1243: 9, 1236: 9,
    1286: 10, 1287: 10, 1251: 10,
    1295: 11, 1254: 11, 1237: 11, 1247: 11,
    1285: 12, 1248: 12,
    1281: 13, 1283: 13, 1284: 13,
    1296: 14
};

var poids_prices = { "None": 0, "0": 0, "1": 2, "2": 4, "3": 7, "4": 10, "5": 13, "6": 15 };
var type_course = { "simple": 17, "cargo": 34 };
var urg_prices = { "rapide": 1, "urgent": 2 };

function getTypePrice() {
    var typePrice = 0;
    var theForm = document.forms["courseform"];
    var selectedType = theForm.elements["inputGroupSelect01"];
    for (var i = 0; i < selectedType.length; i++) {
        if (i == selectedType.selectedIndex) {
            typePrice = type_course[selectedType[i].value];
            break;
        }
    }
    return typePrice;
}

function getUrgPrice() {
    var urgPrice = 0;
    var theForm = document.forms["courseform"];
    var selectedUrg = theForm.elements["inputGroupSelect02"];
    for (var i = 0; i < selectedUrg.length; i++) {
        if (i == selectedUrg.selectedIndex) {
            urgPrice = urg_prices[selectedUrg[i].value];
            break;
        }
    }
    return urgPrice;
}

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

    var pickupZone = zones[pickup];
    var destinationZone = zones[destin];
    var distPrice = data[pickupZone - 1][destinationZone];
    return distPrice;
}

function getPoidsPrice() {
    var theForm = document.forms["courseform"];
    var selectedPoids = theForm.elements["inputGroupSelect03"];
    return poids_prices[selectedPoids.value];
}

function doSomething() {
    var totPrice = ((getTypePrice() + getDistPrice()) * getUrgPrice()) + getPoidsPrice();
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'block';
    divobj.innerHTML = totPrice + " CHF";
    return false;
}

function calculateTotal() {
    var totPrice = (getTypePrice() * getUrgPrice()) + getPoidsPrice() + getDistPrice();
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'block';
    divobj.innerHTML = "Prix " + totPrice + " CHF";
}

function hideTotal() {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}

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
        }
    }

    $('#reused_form').submit(function(e) {
        e.preventDefault();
        $form = $(this);
        $('button[type="submit"]', $form).each(function() {
            $btn = $(this);
            $btn.prop('type', 'button');
            $btn.prop('orig_label', $btn.text());
            $btn.text('En train de soumettre ...');
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

//This function finds the poids price based on the 
//drop down selection
function getDistPrice() {
  


    let idx1 = 0;
    let idx2 = 0;

    if (zone1.indexOf(pickup) >= 0) { idx1 = 0 } else if (zone2.indexOf(pickup) >= 0) { idx1 = 1 } else if (zone3.indexOf(pickup) >= 0) { idx1 = 2 } else if (zone4.indexOf(pickup) >= 0) { idx1 = 3 } else if (zone5.indexOf(pickup) >= 0) { idx1 = 4 } else if (zone6.indexOf(pickup) >= 0) { idx1 = 5 } else if (zone7.indexOf(pickup) >= 0) { idx1 = 6 } else if (zone8.indexOf(pickup) >= 0) { idx1 = 7 } else if (zone9.indexOf(pickup) >= 0) { idx1 = 8 } else if (zone10.indexOf(pickup) >= 0) { idx1 = 9 } else if (zone11.indexOf(pickup) >= 0) { idx1 = 10 } else if (zone12.indexOf(pickup) >= 0) { idx1 = 11 } else { idx1 = null }

    if (zone1.indexOf(destin) >= 0) { idx2 = 1 } else if (zone2.indexOf(destin) >= 0) { idx2 = 2 } else if (zone3.indexOf(destin) >= 0) { idx2 = 3 } else if (zone4.indexOf(destin) >= 0) { idx2 = 4 } else if (zone5.indexOf(destin) >= 0) { idx2 = 5 } else if (zone6.indexOf(destin) >= 0) { idx2 = 6 } else if (zone7.indexOf(destin) >= 0) { idx2 = 7 } else if (zone8.indexOf(destin) >= 0) { idx2 = 8 } else if (zone9.indexOf(destin) >= 0) { idx2 = 9 } else if (zone10.indexOf(destin) >= 0) { idx2 = 10 } else if (zone11.indexOf(destin) >= 0) { idx2 = 11 } else if (zone12.indexOf(destin) >= 0) { idx2 = 12 } else { idx2 = null }


    //set Poid Price equal to value user chose
    DistPrice = data[idx1][idx2];

    //finally we return DistPrice
    return DistPrice;
}

