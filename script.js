let userGithub = 'Yipieight'

getRepositorie();

function getRepositorie() {
    var request = new XMLHttpRequest();
    var search = userGithub;
    request.open("GET", "https://api.github.com/users/" + search + "/repos", true);
    request.onload = () => show_list(JSON.parse(request.responseText));
    console.log("consola" + request.responseText);
    console.log("GET", "https://api.github.com/users/" + search + "/repos", true);
    request.send();
}

function show_list(user) {
    var userList = document.querySelector(".menu-card");
    
    for (var i in user) {
        var userLink = document.createElement("a");
        userLink.textContent = user[i].name;
        userLink.classList.add("card"); 
        userLink.href = user[i].html_url;
        
        userList.appendChild(userLink);
    }
}