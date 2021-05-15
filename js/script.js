window.addEventListener(
  "load",
  function(){
    document.querySelector("#close")
      .addEventListener(
        "click", 
        function(){ document.querySelector("#window").hidden = true; }
      )
  }
)