import React, {useState, useRef, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import mapStyles from './mapStyles';

const MapTestScreen = () => {
  const [latitude, setLatitude] = useState(40.758896);
  const [longitude, setLongitude] = useState(-73.98513);
  const callLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setLongitude(parseFloat(currentLongitude, 10));
        setLatitude(parseFloat(currentLatitude, 10));
        console.log('success');
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000},
    );
  };
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          callLocation();
        } else {
          alert('Permission Denied');
        }
      } catch (err) {
        alert('err', err);
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);
  return (
    <MapView
      style={styles.map}
      customMapStyle={mapStyles}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={{latitude, longitude}} />
    </MapView>
  );
};

export default MapTestScreen;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
