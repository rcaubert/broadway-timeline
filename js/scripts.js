$(document).ready(function(){
  console.log('DOM loaded');

// timeline.
$('#circle1').mouseenter(function(){
  console.log('mouse over the circle');
  $(this).css('fill','#FFF223');
  $('#hidden-text1').fadeToggle();
});

$('#circle1').mouseout(function(){
  $(this).css('fill', '#fffdc9');
  $('#hidden-text1').fadeToggle();
});

$('#circle2').mouseenter(function(){
  console.log('mouse over the circle');
  $(this).css('fill','#FFF223');
  $('#hidden-text2').fadeToggle();
});

$('#circle2').mouseout(function(){
  $(this).css('fill', '#fffdc9');
  $('#hidden-text2').fadeToggle();
});

$('#circle3').mouseenter(function(){
  console.log('mouse over the circle');
  $(this).css('fill','#FFF223');
  $('#hidden-text3').fadeToggle();
});

$('#circle3').mouseout(function(){
  $(this).css('fill', '#fffdc9');
  $('#hidden-text3').fadeToggle();
});

$('#circle4').mouseenter(function(){
  console.log('mouse over the circle');
  $(this).css('fill','#FFF223');
  $('#hidden-text4').fadeToggle();
});

$('#circle4').mouseout(function(){
  $(this).css('fill', '#fffdc9');
  $('#hidden-text4').fadeToggle();
});

$('#circle5').mouseenter(function(){
  console.log('mouse over the circle');
  $(this).css('fill','#FFF223');
  $('#hidden-text5').fadeToggle();
});

$('#circle5').mouseout(function(){
  $(this).css('fill', '#fffdc9');
  $('#hidden-text5').fadeToggle();
});

$('#circle6').mouseenter(function(){
  console.log('mouse over the circle');
  $(this).css('fill','#FFF223');
  $('#hidden-text6').fadeToggle();
});

$('#circle6').mouseout(function(){
  $(this).css('fill', '#fffdc9');
  $('#hidden-text6').fadeToggle();
});

// Google Chart.
function drawChart() {
            // Defining the parameters.
            var data = google.visualization.arrayToDataTable([
              ['Title', 'Performances', { role: 'style' }],
              ['Les Misérables', 6680, '#FF795A'],
              ['Cats', 7485, '#FF795A'],
              ['The Lion King', 8348, '#FF795A'],
              ['Chicago', 8747, '#FF795A'],
              ['The Phantom of the Opera', 12422, '#FF795A']

            ]);

            var options = {
              title: 'Longest running plays in Broadway (in number of performances)',
              colors: ['#FF795A']
            };

            // Draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('containerchart'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawChart);

// Lightbox desktop.
  var btnDesktop = document.getElementById('sources-button');
  var boxDesktop = document.getElementById('lightbox');
  var bgTextDesktop = document.getElementById('blurr');
  var closeBtnDesktop= document.getElementById('close');

  btnDesktop.addEventListener('click', function(){
    console.log('testing');
    boxDesktop.style.opacity=1;
    bgTextDesktop.style.opacity=0.3;
});

  closeBtnDesktop.addEventListener('click', function(){
    boxDesktop.style.opacity=0;
    bgTextDesktop.style.opacity=1;
});

// Accordion.
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

// Lightbox mobile.
         var btn = document.getElementById('sources-button-mobile');
         var box = document.getElementById('lightbox-mobile');
         var bgText = document.getElementById('blurr-mobile');
         var closeBtn= document.getElementById('close-mobile');

         btn.addEventListener('click', function(){
           console.log('testing');
           box.style.opacity=1;
           bgText.style.opacity=0.3;
         });

         closeBtn.addEventListener('click', function(){
           box.style.opacity=0;
           bgText.style.opacity=1;
         });

});
