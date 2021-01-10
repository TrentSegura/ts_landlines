import React, { Component } from 'react'
import mapbox from 'mapbox-gl' 
import './Marker.css';
import { placeData } from "../data/data"





export class Marker extends Component {


    render() {
        const app = this.props.app
        const map = app.state.map

        if (map){
        
            placeData.forEach(place => {
                const coord = [place.longitude, place.latitude]
            
                const popup = new mapbox.Popup()
                popup.setMaxWidth("300px")

                popup.setHTML(

                    place.image ?
                        
                    `
                    <div class="mapboxgl-popup-content-header">
                    <h3>${place.name}</h3>
                    ${place.contributor}
                    </div>
                    <div class="description">
                    <img alt="${place.name}" src="http://richardsaxton.org/websites/m12_landlines/${place.image}" />

                    ${place.description}

                    </div>
                    ` 
                    :
                    `<div class="mapboxgl-popup-content-header">
                    <h3>${place.name}</h3>
                    ${place.contributor}
                    ${place.description}
                    </div>`
                )

                popup.on('open', function(){
                    map.flyTo({
                        center: [place.longitude, (place.latitude + .025)],
                        zoom: 12,
                    })
                });
                popup.on('close', function(){
                    map.flyTo({
                        center: [app.state.longitude, app.state.latitude],
                        zoom: 9,
                    })
                });

                var el = document.createElement('div');
                el.id = 'marker';
                el.innerHTML = `<div id="blue-circle"></div>`;
                
                const marker = new mapbox.Marker(el)
                marker.setPopup(popup)
                marker.setLngLat(coord)
                marker.addTo(map)
            })
        }
        return (
            <div>
            </div>
        )      
      }
}


export default Marker



