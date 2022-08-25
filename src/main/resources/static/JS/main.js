var searchTweenActive;

/* //previous iteration of tweening now using css to tween searchbar

function hideShowSearch(element){
    var searchBarTween = null;
    var ele = document.getElementsByClassName(element)[0];
    var wid = ele.style.width;
    console.log(wid)
    if(wid.charAt(wid.length - 1) == '%'){
        wid = wid.substring(0, wid.length - 1);
    }
    if (searchTweenActive !== true) {
        clearInterval(searchBarTween)
        if(ele.style.display != "inline"){
            searchTweenActive = true;
            ele.style.display = "inline";
            searchBarTween = setInterval(function(){
                if(wid >= 55){
                    clearInterval(searchBarTween);
                }else{
                    console.log(wid);
                    wid++;
                    ele.style.width = wid + '%';
                }
            }, 25);
        }else{
            if(ele.style.display == "inline"){
                searchTweenActive = true;
                searchBarTween = setInterval(function(){
                    if(wid <= 0){
                        ele.style.display = "none";
                        clearInterval(searchBarTween);
                    }else{
                        console.log(wid);
                        wid = parseInt(wid) -1;
                        ele.style.width = wid + '%';
                    }
                }, 25);
            }
        }
    }
    searchTweenActive = false;
} */

/* new iteration of tweening for seachBar */
function tweenSearch(element) {
    let searchBar = document.getElementsByClassName("searchBar")[0];
    if (searchBar.classList.contains("expanded")) {
      searchBar.classList.remove("expanded");
    } else {
      searchBar.classList.add("expanded");
    }
  }

function highlightSwap(element1, element2, boolean){
    var element1 = document.getElementById(element1);
    var element2 = document.getElementsByClassName(element2)[0];
    if(boolean == true){
        element2.style.outline ="none";
        element1.style.borderColor ="#4285F4";
        element1.style.borderWidth = "0.2em";
    }else{
        if(boolean == false){
            element1.style.borderColor="white";
            element1.style.borderWidth = "1px";
        }
    }
    
}

function DisplayBlock(element, type){
	if(type == 1){
		if (element.style.display == "none") {
			element.style.display = "block";	
		} else {
			element.style.display = "none";
		}	
	}
	if(type == 2){
		element.style.display = "none";
	}
	if (type == 3){
		element.style.display = "block";
	}
}

const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navLinks = document.getElementsByClassName('navLinks')[0]

toggleButton.addEventListener('click',() =>{
    navLinks.classList.toggle('active')
})