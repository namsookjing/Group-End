function topNav() 
{
    var x = document.getElementById("top");
    var y = document.getElementById("social");
    if (x.className === "top-nav") {
        x.classList.toggle("responsive");
        if(y.className === "social-icon")
        {
            y.classList.toggle("responsive");
        } else {
            y.className = "social-icon";
        }
    } else {
        x.className = "top-nav";
        y.className = "social-icon";
    }
}

function menu(x) 
{
    x.classList.toggle("change");
}



function showGithubAcc(event) 
{
    event.stopPropagation();
    closeAllDropdowns()
    document.getElementById("githubAcc").classList.toggle("show");
}
    
function showFbAcc(event) 
{
    event.stopPropagation();
    closeAllDropdowns()
    document.getElementById("fbAcc").classList.toggle("show");
}
    
function showLinkedinAcc(event) 
{
    event.stopPropagation();
    closeAllDropdowns()
    document.getElementById("LinkedInAcc").classList.toggle("show");
}
    
function closeAllDropdowns() 
{
    var dropdowns = document.getElementsByClassName("Myacc");
    for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove('show');
    }
}

window.addEventListener('click', function () {
    closeAllDropdowns();
});
