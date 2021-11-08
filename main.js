var container = document.getElementById("container");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json');

    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].ContactURL + "<p>";

        console.log(data[i].ContactURL);
    };

    container.insertAdjacentHTML('beforeend', htmlString);
};

function progressBar() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 0);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    };
};