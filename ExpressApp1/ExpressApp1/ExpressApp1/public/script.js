function initXHR(x) {
    console.log(x);
    if (x == 'home') {
        document.getElementById("home").style.display = "block";
        document.getElementById("yummlyRecipes").style.display = "none";
        document.getElementById("profile").style.display = "none";
        document.getElementById("favRecipes").style.display = "none";
    }
    else if (x == 'yummlyRecipes') {
        retrieveTopRecipePhotosFromYummlyApi(yummlyUrl);
        document.getElementById("home").style.display = "none";
        document.getElementById("yummlyRecipes").style.display = "block";
        document.getElementById("profile").style.display = "none";
        document.getElementById("favRecipes").style.display = "none";
    }
    else if (x == 'favRecipes') {
        retrieveFavoritecipePhotosFromServer('app/json/responseSample.json');
        document.getElementById("home").style.display = "none";
        document.getElementById("yummlyRecipes").style.display = "none";
        document.getElementById("profile").style.display = "none";
        document.getElementById("favRecipes").style.display = "block";
    }
    else if (x == 'profile') {
        retrieveUserInfo();
        document.getElementById("home").style.display = "none";
        document.getElementById("yummlyRecipes").style.display = "none";
        document.getElementById("profile").style.display = "block";
        document.getElementById("favRecipes").style.display = "none";
    }
    else {
        document.getElementById("home").style.display = "block";
        document.getElementById("yummlyRecipes").style.display = "none";
        document.getElementById("profile").style.display = "none";
        document.getElementById("favRecipes").style.display = "none";
    }
}

function retrieveTopRecipePhotosFromYummlyApi(url) {
    var xmlhttp = new XMLHttpRequest();
    var lists;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var lists = JSON.parse(xmlhttp.responseText);
            console.log(lists);
            populateListsView('yummlyRecipes', lists, "Most picked recipes");
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function retrieveFavoritecipePhotosFromServer(url) {
    var xmlhttp = new XMLHttpRequest();
    var lists;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var lists = JSON.parse(xmlhttp.responseText);
            console.log(lists);
            populateListsView('favRecipes', lists, "My Favorite Recipes");
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function populateListsView(elementId, lists, title) {
    var element = document.getElementById(elementId);
    var newElement = "<h3 class=\"panel-heading\">" + title + "</h3>";

    for (var i = 0; i < lists.length; i++) {
        // extracting information 
        var id = lists[i].recipeId;
        var name = lists[i].name;
        var url = lists[i].url;
        // switching to new row when a row is filled with 4 pictures (4 columns)
        if (i % 4 == 0)
            newElement += "<div class='row'>";
        // filling pictures into columns
        newElement += "<div class='col-sm-3'>";
        newElement += "<a href='javascript: initXHR('favRecipes')' class='thumbnail'>";
        newElement += "<h3 class='text-center'>" + name + "</h3>"
        newElement += "<img title='" + name + "' src='" + list[url] + "' class='img-responsive'>";
        newElement += "</a>";
        newElement += "</div>";
    }
    console.log(title + "\n" + newElement);
    element.innerHTML = newElement;
}

function retrieveTransportationListsFromServer(url) {
    var xmlhttp = new XMLHttpRequest();
    var lists;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var lists = JSON.parse(xmlhttp.responseText);
            console.log(lists);
            populateTransportView('transport', lists);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function populateTransportView(elementId, lists) {
    element = document.getElementById(elementId);
    var newElement = "<h3 class=\"panel-heading\">Transportation Lists</h3>";

    for (var i = 0; i < lists.length; i++) {
        newElement += "<div class=\"panel panel-default\">";
        newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
        newElement += "<tbody>";
        newElement += "<tr>";
        newElement += "<td>Vehicle Name: <span>" + lists[i].vehicle + "</span></td>";
        newElement += "<td align=\"right\">Speed: <span class=\"badge\">" + lists[i].speed + "</span></td>";
        newElement += "</tr>";
        newElement += "</tbody>";
        newElement += "</table>";
        newElement += "</div>";
    }

    element.innerHTML = newElement;
}
