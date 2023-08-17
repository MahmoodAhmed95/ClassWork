


document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
      e.preventDefault();
      let navSet = document.querySelectorAll('.trulia-nav > nav ul');
  
      for(let n=0;n<navSet.length;n++){
          navSet[n].classList.toggle('trulia-nav-mobilehide');
      }
  
  });
});