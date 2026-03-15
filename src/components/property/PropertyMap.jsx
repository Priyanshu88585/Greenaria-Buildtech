'use client'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
const mapContainerStyle = { width: '100%', height: '300px' }
export default function PropertyMap({lat,lng}){
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY })
  if(!isLoaded) return <p>Map loading...</p>
  return <GoogleMap zoom={14} center={{lat, lng}} mapContainerStyle={mapContainerStyle}><Marker position={{lat,lng}}/></GoogleMap>
}
