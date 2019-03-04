import firebase from "firebase";

const googleApiKey = 'AIzaSyAUsnERWvgUrNKQy4YvHAaeg99HdhJLpTM';

export const getGeoLocation = () => {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=`)
    .then(response => response.json())
}

export const getCustomersPromise = () =>
firebase
.database()
.ref("customers")
.once("value")
.then(snapshot => snapshot.val())
    .then(data =>
      Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value
      }))
    );

export const getPackagesPromise = () =>
  firebase
    .database()
    .ref("packages")
    .once("value")
    .then(snapshot => snapshot.val())
    .then(data =>
      Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value
      }))
    )

export const updatePackagePromise = (client_id, status) =>
  firebase
    .database()
    .ref("packages")
    .child(client_id)
    .update({
      status
    });
