import {decode} from '@mapbox/polyline';

export default getDirection = async (startLoc, destinationLoc) => {
  console.log('startLoc: ', startLoc);
  console.log('destinationLoc: ', destinationLoc);

  try {
    const KEY = 'AIzaSyD3Qzj6TK9-76bYG1TLpt2IJ5CpXXljHTI';
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
