import firebase from 'firebase'

const config =  {
    apiKey: "AIzaSyBm9MIvtDnkUTrODPIuZjyWf7le2FgumDg",
    authDomain: "gallery-f3d5a.firebaseapp.com",
    databaseURL: "https://gallery-f3d5a.firebaseio.com",
    projectId: "gallery-f3d5a",
    storageBucket: "gallery-f3d5a.appspot.com",
    messagingSenderId: "921059912883",
    appId: "1:921059912883:web:1f23b8620bde80e97f14c6"
  }

  const fire = firebase.initializeApp(config)

  export default fire