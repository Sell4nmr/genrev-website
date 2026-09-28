// Shared nav behavior for standalone GENREV!™ pages
function toggleMob(){document.getElementById('mobMenu').classList.toggle('open');}
function closeMob(){document.getElementById('mobMenu').classList.remove('open');}

// Close mobile menu after tapping a link
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('#mobMenu a').forEach(function(a){
    a.addEventListener('click', closeMob);
  });
});
