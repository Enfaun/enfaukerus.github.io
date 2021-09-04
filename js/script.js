window.addEventListener(
  "load",
  function(){
    document.querySelector("#minimized").style = "";
    document.querySelector("#close")
      .addEventListener(
        "click", 
        function(){ document.querySelector("#window").hidden = true; }
      );
    document.querySelector("#closeMinimized")
      .addEventListener(
        "click", 
        function(){ document.querySelector("#minimized").hidden = true; }
      );
    document.querySelector("#minimize")
      .addEventListener(
        "click", 
        function(){ document.querySelector("#window").hidden = true; document.querySelector("#minimized").hidden = false; }
      );
    document.querySelector("#restore")
      .addEventListener(
        "click", 
        function(){ document.querySelector("#window").hidden = false; document.querySelector("#minimized").hidden = true; }
      );
  }
)