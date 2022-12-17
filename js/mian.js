
const theInput = document.querySelector(".get-repost input");
const getBtn = document.querySelector(".get-botton");
const showData = document.querySelector(".show-data")

getBtn.addEventListener("click",getRepo);

function getRepo(){
    if(theInput.value ==""){
        showData.innerHTML =`please Enter your Github username`
    }else(

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
  .then((response) => response.json())
  .then((repositeries) => {
    showData.innerHTML="";
    repositeries.forEach(repo => {
        let mainDiv = document.createElement("div");
        let repoName= document.createTextNode(repo.name)
        mainDiv.appendChild(repoName);
        //add link
        let theUrl = document.createElement('a');
        let theUrlText =document.createTextNode("viste");
        theUrl.appendChild(theUrlText);
        //https://github.com/Yousef-abdelwahed/Bookmark
        // theUrl.href=`https://github.com/yousef-abdelwahed/${repo.name}`;
        theUrl.href= repo.html_url;
        theUrl.setAttribute("target","_blank")
        mainDiv.appendChild(theUrl)
        //

        showData.appendChild(mainDiv);
    });
  })
    )
}