// Shared nav behavior for standalone GENREV!™ pages
function toggleMob(){document.getElementById('mobMenu').classList.toggle('open');}
function closeMob(){document.getElementById('mobMenu').classList.remove('open');}

// FAQ accordion toggle
function toggleFi(i){
  var fi = document.getElementById('fi'+i);
  if(!fi) return;
  fi.classList.toggle('open');
}

// Insights category filter
function filterIns(cat,btn){
  document.querySelectorAll('.ins-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('.ins-card').forEach(function(c){
    if(cat==='all'||c.dataset.cat===cat){c.style.display='';} else{c.style.display='none';}
  });
}

// Close mobile menu after tapping a link
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('#mobMenu a').forEach(function(a){
    a.addEventListener('click', closeMob);
  });
});
