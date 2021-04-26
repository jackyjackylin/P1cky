
export const locateCurrentPosition = () => new Promise((resolve,reject)=> {
  navigator.geolocation.getCurrentPosition(
    position => {
      resolve(position);
    },
    error => {
      console.log(error.message);
      reject(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 1000
    }
  );
});

var lat;
var long;

export function getLocation(){
  const pos = locateCurrentPosition().then(position=> {
    lat = position.coords.latitude
    long = position.coords.longitude
  })
} 
