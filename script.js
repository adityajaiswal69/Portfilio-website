var typed = new Typed('#element', {
    strings: ['Frontend Web developer.', '&amp; Web Designer.'],
    typeSpeed: 50,
    loop:true,
  });
console.log("welcome! to My portfolio");

var sidemenu = document.getElementById("sidebar");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}