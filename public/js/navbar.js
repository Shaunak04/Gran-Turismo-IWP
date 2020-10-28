const mobileTray = document.querySelector(".mobiletray");
const hamlogo = document.querySelector(".logo");

function func(x) {
  if (x.matches) { 
    hamlogo.addEventListener("click", () => {
			if (mobileTray.classList.contains("slide-up")) {
				mobileTray.classList.add("slide-down");
				mobileTray.classList.remove("slide-up");
				console.log("yes");
			}else {
				mobileTray.classList.add("slide-up");
				mobileTray.classList.remove("slide-down");
				console.log("no");
			}	
		});
  } else {
  	mobileTray.style.display = "none"
  }
}

var x = window.matchMedia("(max-width: 768px)");
func(x);
x.addListener(func);