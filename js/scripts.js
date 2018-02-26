$(document).ready(function() {

  // Google Analytics
  (function ( i, s, o, g, r, a, m ) {
    i[ 'GoogleAnalyticsObject' ] = r;
    i[ r ] = i[ r ] || function () {
      (i[ r ].q = i[ r ].q || []).push( arguments )
    }, i[ r ].l = 1 * new Date();
    a = s.createElement( o ),
      m = s.getElementsByTagName( o )[ 0 ];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore( a, m )
  })( window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga' );

  ga( 'create', 'UA-81822884-1', 'auto' );
  ga( 'send', 'pageview' );

  // Rainbow
  var rainbow = [ '#f00', '#ff0', '#00FF00', '#00ffff', '#0000ff', '#f0f' ];
  var dawn = [ '#718ec4', '#dc8998', '#fec5b9' ];
  var noon = [ '#a5f0ff', '#fb9300', '#dd8c08' ];
  var dusk = [ '#1d205e', '#ffb85b', '#874444' ];
  var midnight = [ '#8da3a8', '#026072', '#00303a' ];

  // Greetings
  var greetings = [ "Ciao", "Nǐ hǎo", "Hujambo", "Kon'nichiwa", "Hallo", "Hallo", "Hallo", "Hola", "Yá’át’ééh", "Svāgatam" ];

  //jQuery Selectors
  var body = $( '.body' );
  var mainLink = $( '.main-link' );

  // Make links change color on :hover
  mainLink.hover( handleChangeLinkColor, restoreLinkColor );

  //
  // function changeLinkColor( palette ) {
  //   console.log( 'change link color; palette = ', palette );
  //   $( this ).css( {
  //     transition: 'color 1s ease-in-out',
  //     color: palette[ Math.floor( Math.random() * palette.length ) ]
  //   } );
  // }

  // TODO Dry this up
  function handleChangeLinkColor() {
    if ( body.hasClass( 'mod-dawn' )) {
      $( this ).css({
        transition: 'color 1s ease-in-out',
        color: dawn[ Math.floor( Math.random() * dawn.length ) ]
      })
    }
    else if ( body.hasClass( 'mod-noon' )) {
      $( this ).css({
        transition: 'color 1s ease-in-out',
        color: noon[ Math.floor( Math.random() * noon.length ) ]
      })
    }
    else if ( body.hasClass( 'mod-dusk' )) {
      $( this ).css({
        transition: 'color 1s ease-in-out',
        color: dusk[ Math.floor( Math.random() * dusk.length ) ]
      })
    }
    else if ( body.hasClass( 'mod-midnight' )) {
      $( this ).css({
        transition: 'color 1s ease-in-out',
        color: midnight[ Math.floor( Math.random() * midnight.length ) ]
      })
    }
    else {
      $( this ).css({
        transition: 'color 1s ease-in-out',
        color: rainbow[ Math.floor( Math.random() * rainbow.length ) ]
      })
    }
  }

  function restoreLinkColor() {
    $( this ).css( 'color', '#fff' );
  }

  mainLink.hover( handleChangeLinkColor, restoreLinkColor );

 $( '.salutation' ).hover(
      function() {
        $( this )
          .html( greetings[ Math.floor( Math.random() * greetings.length )] + '!' )
          // .css( "color", colors[ Math.floor( Math.random() * colors.length )])
      },
      function() {
        $( this ).html( 'Hiya!' );
      }
    );

  $( '.theme-button' ).click( changeColorTheme );

  function changeColorTheme( e ) {
    handleChangeLinkColor();
    switch( e.target.value ) {
      case 'dawn':
        body.attr( 'class', 'body mod-dawn' );
        break;
      case 'noon':
        body.attr( 'class', 'body mod-noon' );
        break;
      case 'dusk':
        body.attr( 'class', 'body mod-dusk' );
        break;
      case 'midnight':
        body.attr( 'class', 'body mod-midnight' );
        break;
      case 'clear':
        body.attr( 'class', 'body' );
        break;
    }
  }
});
