var typed = new Typed('#element', {
    strings: ['Frontend Web developer.', '&amp; Web Designer'],
    typeSpeed: 50,
    loop:true,
  });

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-cont");
  function opentab(tabname){    
    for(tablink of tablinks){
      tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab")
    }
    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add(" active-tab")
    

  }