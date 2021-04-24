$(document).ready(function(){
    gitHover(); 
    linkedinHover();
    facebookHover();
    twitterHover();
    instagramHover(); 
    ajaxStuff();
});

function gitHover(){
    $("#gitLogo").hover(function(){
        $(this).css("transform", "scale(1.1, 1.1)");
        }, function(){
            $(this).css("transform", "scale(1, 1)");
        })
}
function linkedinHover(){
    $("#linkedinLogo").hover(function(){
        $(this).css("transform", "scale(1.03, 1.1)");
        }, function(){
            $(this).css("transform", "scale(1, 1)");
        })
}
function facebookHover(){
    $("#facebook").hover(function(){
        $(this).css("transform", "scale(1.15, 1.15)");
        }, function(){
            $(this).css("transform", "scale(1, 1)");
        })
}
function twitterHover(){
    $("#twitter").hover(function(){
        $(this).css("transform", "scale(1.15, 1.15)");
        }, function(){
            $(this).css("transform", "scale(1, 1)");
        })
}
function instagramHover(){
    $("#instagram").hover(function(){
        $(this).css("transform", "scale(1.15, 1.15)");
        }, function(){
            $(this).css("transform", "scale(1, 1)");
        })
}

let gitHubRequest = new XMLHttpRequest();
function ajaxStuff(){
    gitHubRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let gitObject = JSON.parse(this.responseText);
          let parent = document.getElementById("gitList");
          for (let i = 0; i < gitObject.length; i++){
            let newEl = document.createElement("a");
            let br = document.createElement("br");
            newEl.href = gitObject[i].html_url;
            newEl.innerHTML = gitObject[i].name;
            newEl.className = "gitLinks";
            parent.appendChild(newEl);
            parent.appendChild(br);
          }
        }
      };
      gitHubRequest.open("GET", "https://api.github.com/users/cleanjawn/repos", true);
      gitHubRequest.send();
}
