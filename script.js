// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// COUNTER
document.querySelectorAll(".counter").forEach(counter=>{
  let update=()=>{
    let target=+counter.dataset.target;
    let count=+counter.innerText;
    let speed=target/100;
    if(count<target){
      counter.innerText=Math.ceil(count+speed);
      setTimeout(update,20);
    }
  };
  update();
});

// MAP
function openMap(){
  document.getElementById("mapPopup").style.display="block";
}
function closeMap(){
  document.getElementById("mapPopup").style.display="none";
}
