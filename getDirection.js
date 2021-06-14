import {decode} from '@mapbox/polyline';
import config from './config';

export default getDirection = async (startLoc, destinationLoc) => {
  console.log('startLoc: ', startLoc);
  console.log('destinationLoc: ', destinationLoc);
  try {
    const KEY = config.API_KEY1;
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`,
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    console.log('Points', points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1],
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};
