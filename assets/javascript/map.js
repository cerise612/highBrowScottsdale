        // Initialize and add the map
        function initMap() {
            var styledMapType = new google.maps.StyledMapType(
                [
                    {
                        "featureType": "administrative",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "lightness": -100
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": -8
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": -100
                            },
                            {
                                "visibility": "off"
                            },
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": -100
                            },
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#909090"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": -100
                            },
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#000000"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": -100
                            },
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#b0b0b0"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "hue": "#ff0000"
                            },
                            {
                                "lightness": -100
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#d9d9d9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 100
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#e0e0e0"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "hue": "#000000"
                            },
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": -100
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ],
                {name: 'Styled Map'});
            // The location of High Brow Scottdale
            var highBrowScottsdale = {lat: 33.492460, lng: -111.927120};
            // The map, centered at High Brow Scottdale
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 33.492460, lng: -111.927120},
                zoom: 18,
                        });
            // The marker, positioned at High Brow Scottdale
            var marker = new google.maps.Marker({
                position: highBrowScottsdale,
                icon: URL="www.highbrowscottsdalassets/icons/favicon-32x32.pnge.com",
                map: map
              });

            //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
          }
