import React, {useState, useRef, useEffect} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {Button, StyleSheet, View} from 'react-native';
import mapStyle from './mapStyles';
// import getDirection from './getDirection';
import getDirections from 'react-native-google-maps-directions';

const Direction = () => {
  const [coords, setCoords] = useState([]);
  const [state, setState] = useState({
    pickupLocation: {
      latitude: 24.8607,
      longitude: 67.0011,
      latitudeDelta: 0.0422,
      longitudeDelta: 0.0421,
    },
    dropoffLocation: {
      latitude: 25.396,
      longitude: 68.3578,
      latitudeDelta: 0.0422,
      longitudeDelta: 0.0421,
    },
  });

  const {pickupLocation, dropoffLocation} = state;
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCmECBK4cCTT0c_LM6K9LFpBNpzOc3bF34';
  // useEffect(() => {
  //   getDirection('24.8607,67.0011', '25.396,68.3578')
  //     .then(coords => setCoords(coords))
  //     .catch(err => console.log('Something went wrong', err));
  // }, []);
  // const callLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const currentLongitude = JSON.stringify(position.coords.longitude);
  //       const currentLatitude = JSON.stringify(position.coords.latitude);
  //       setState({
  //         pickupLocation: {
  //           latitude: parseFloat(currentLongitude, 10),
  //           longitude: parseFloat(currentLatitude, 10),
  //         },
  //       });
  //     },
  //     error => alert(error.message),
  //     {enableHighAccuracy: true, timeout: 20000},
  //   );
  // };
  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Access Required',
  //           message: 'This App needs to Access your location',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         callLocation();
  //       } else {
  //         alert('Permission Denied');
  //       }
  //     } catch (err) {
  //       alert('err', err);
  //       console.warn(err);
  //     }
  //   };
  //   requestLocationPermission();
  // }, []);
  return (
    <>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={pickupLocation}>
        <Marker
          coordinate={{
            latitude: pickupLocation.latitude,
            longitude: pickupLocation.longitude,
          }}
        />

        <Marker
          coordinate={{
            latitude: dropoffLocation.latitude,
            longitude: dropoffLocation.longitude,
          }}
        />
        <Polyline
          coordinates={[pickupLocation, dropoffLocation]}
          strokeColor="gray"
          strokeWidth={6}
        />

        {/* {coords.length > 0 && <Polyline coordinates={coords} />} */}
        {/* <MapViewDirections
        origin={pickupLocation}
        destination={dropoffLocation}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="red"
      /> */}
      </MapView>
    </>
  );
};

export default Direction;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
