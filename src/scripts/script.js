import pointImageURL from '../images/point.png'

window.addEventListener('scroll', scroll)

scroll()

function scroll() {
  const intro = document.querySelector('.intro')
  if (intro === null) return

  const _top = document.documentElement.scrollTop
  intro.style.backgroundPosition = '50% ' + _top * 0.6 + 'px'
}

const coords = '60.000132, 30.256602'
initMap(coords)
function initMap(coords) {
  const _coords = coords.split(',')
  const coord = _coords[0]
  const coord2 = _coords[1]

  const styleArray = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#23252d'
        }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#746855'
        }
      ]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#202731'
        }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c'
        }
      ]
    }
  ]

  const mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(coord, coord2),
    scrollwheel: false,

    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArray,
    disableDefaultUI: true
  }

  const map = new google.maps.Map(document.getElementById('map'), mapOptions)
  const myLatLng = new google.maps.LatLng(coord, coord2)

  const mapPointer = new google.maps.MarkerImage(
    pointImageURL,
    new google.maps.Size(35, 44),
    new google.maps.Point(0, 0),
    new google.maps.Point(17, 44),
    new google.maps.Size(35, 44)
  )
  const marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(coord, coord2),
    map: map,
    icon: mapPointer
  })
}

google.maps.event.addDomListener(window, 'load', initMap(coords))
