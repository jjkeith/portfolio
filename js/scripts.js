$(document).ready(function() {

  // Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-81822884-1', 'auto');
  ga('send', 'pageview');

  // Rainbow
  var colors = [ '#f00', '#ff0', '#00FF00', '#00ffff', '#0000ff', '#f0f' ];

  // Greetings
  var greetings = [ "Ciao", "Nǐ hǎo", "Hujambo", "Kon'nichiwa", "Hallo", "Hallo", "Hallo", "Hola", "Yá’át’ééh", "Svāgatam" ];

  // Make links colors on hover
  $( ".topbar-link" ).hover(
    function() {
      $( this ).css({
        transition: 'color 1s ease-in-out',
        color: colors[ Math.floor( Math.random() * colors.length ) ]
      });
    },
    function() {
      $( this ).css( "color", "#fff" );
    });

    $( ".salutation" ).hover(
      function() {
        $( this )
          .html( greetings[ Math.floor( Math.random() * greetings.length )] + '!' )
          .css( "color", colors[ Math.floor( Math.random() * colors.length )])
      },
      function() {
        $( this ).html( 'Hiya!' ).css( "color", "#000" );
      }
    )
});

