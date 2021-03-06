import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// apikeymarkers=https://maps.googleapis.com/maps/api/geocode/json?address=negocios%20bogot%C3%A1&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw
import { useAuth0 } from '@auth0/auth0-react';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 4.6560716,
  lng: -74.0595918,
};

function MapContainer() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <>
      <LoadScript googleMapsApiKey='AIzaSyCfVtj72DFjgWAQIcw8AvKKx9gNOZaEv0U'>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker
            title='Platzi HQ Bogotá'
            position={{ lat: 4.6560716, lng: -74.0595918 }}
          />
          <Marker
            title='Hilton Garden Inn Bogotá Airport'
            position={{ lat: 4.67492, lng: -74.1165575 }}
          />
          <Marker
            title='Movistar Arena'
            position={{ lat: 4.649753, lng: -74.0775048 }}
          />
          <Marker
            title='Carulla Pablo VI'
            position={{ lat: 4.64904, lng: -74.08724 }}
          />
          <Marker
            title='Supermercado Colsusidio'
            position={{ lat: 4.65174, lng: -74.07281 }}
          />
          <Marker
            title='Carulla Galerias'
            position={{ lat: 4.64293, lng: -74.07556 }}
          />
          <Marker
            title='El Corral Gran Estacion'
            position={{ lat: 4.64869, lng: -74.1015 }}
          />
          <Marker
            title='Teriyaki Sushi Bar Gran Estacion'
            position={{ lat: 4.64747, lng: -74.10175 }}
          />
          <Marker
            title='Luxury House'
            position={{ lat: 4.64776, lng: -74.08518 }}
          />
          <Marker
            title='Clinica Nueva el lago'
            position={{ lat: 4.66309, lng: -74.05971 }}
          />
          <Marker
            title='Agro Campo'
            position={{ lat: 4.66165, lng: -74.06177 }}
          />
          <Marker
            title='Carulla Nogal'
            position={{ lat: 4.66165, lng: -74.0562 }}
          />
          <Marker
            title='Unilago '
            position={{ lat: 4.66546, lng: -74.05783 }}
          />
          <Marker
            title='Centro Comercial Andino '
            position={{ lat: 4.66741, lng: -74.05345 }}
          />
          <Marker
            title='Colmedicos '
            position={{ lat: 4.6644, lng: -74.0602 }}
          />
          <Marker
            title='pinturas Tito Pavon '
            position={{ lat: 4.66942, lng: -74.06483 }}
          />
          <Marker
            title='Select Muebles'
            position={{ lat: 4.67053, lng: -74.07193 }}
          />
          <Marker
            title='Funeraria Capillas de la Fe'
            position={{ lat: 4.66567, lng: -74.07736 }}
          />
          <Marker
            title='Transportes y Mudanzas El chico'
            position={{ lat: 4.67356, lng: -74.07478 }}
          />
          <Marker
            title='El turco Accesorios'
            position={{ lat: 4.66678, lng: -74.08382 }}
          />
          <Marker
            title='Cafam Floresta'
            position={{ lat: 4.68825, lng: -74.07335 }}
          />
          <Marker
            title='Davivienda'
            position={{ lat: 4.68107, lng: -74.08861 }}
          />
          <Marker
            title='KFC Santa Helenita'
            position={{ lat: 4.69275, lng: -74.10194 }}
          />
          <Marker
            title='Centro Comercial San Rafael'
            position={{ lat: 4.72469, lng: -74.05759 }}
          />
          <Marker
            title='Tiendas ara'
            position={{ lat: 4.71954, lng: -74.06755 }}
          />
          <Marker
            title='olimpica'
            position={{ lat: 4.72086, lng: -74.04763 }}
          />
          <Marker
            title='San Andresito de La 38'
            position={{ lat: 4.61709, lng: -74.10269 }}
          />
          <Marker
            title='Plaza de Mercado Paloquemao'
            position={{ lat: 4.61654, lng: -74.08496 }}
          />
          <Marker
            title='Parque Mundo Aventura'
            position={{ lat: 4.6228, lng: -74.13453 }}
          />
        </GoogleMap>
      </LoadScript>
    </>
  ) : (
    <>
      <h2>Para poder ver el mapa necesitas estar logueado</h2>
    </>
  );
}

export default React.memo(MapContainer);
