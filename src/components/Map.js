import mmrgl from 'mmr-gl';
import { useEffect } from 'react'
 
import 'mmr-gl/dist/mmr-gl.css';
 
export function Map() {
  useEffect( () => {
    mmrgl.accessToken = 'accessToken';
 
    const map = new mmrgl.Map({
      container: 'map',
      zoom: 8,
      center: [37.6165, 55.7505],
      style: 'mmr://api/styles/main_style.json',
      hash: true,
    })
 
    return () => {
      if (map) map.remove();
    }
  })
 
  return <div id="map" style={{ width: '800px', height: '600px'}} />
}