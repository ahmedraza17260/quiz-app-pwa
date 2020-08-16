import firebase from 'firebase';
// import 'firebase/<PACKAGE>';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyCehShC7k5EUsNKQI2hyDDEqT7bMM0OwJ0",
        authDomain: "react-quiz-pwa.firebaseapp.com",
        databaseURL: "https://react-quiz-pwa.firebaseio.com",
        projectId: "react-quiz-pwa",
        storageBucket: "react-quiz-pwa.appspot.com",
        messagingSenderId: "822075472878",
        appId: "1:822075472878:web:e5029b3b315dc19eb5ecff",
        measurementId: "G-ZLC44QLC9Y"
    });
}

export const permissionToReceiveNotifications = () => {

    const messaging = firebase.messaging();

    Notification.requestPermission().then(async (permission) => {

        if (permission === 'granted') {

            try {

                const token = await messaging.getToken();

                if (token) {

                    console.log(token);
                    return token;
                }

                else {
                    console.log('No Instance ID token available. Request permission to generate one.');
                }
            }

            catch (error) {

                console.log('An error occurred while retrieving token. ', error);


                //BUT THE NEW TOKEN SUCCESSFULLY FETCHED
                const token = await messaging.getToken();

                if (token) {

                    console.log(token);
                    return token;
                }

                else {
                    console.log('No Instance ID token available. Request permission to generate one.');
                }
            }
        }

    })
        .catch(error => console.log(error));
}

// export const permissionToReceiveNotifications = async () => {
//     try {
//         const messaging = firebase.messaging();
//         await messaging.requestPermission();
//         const token = await messaging.getToken();
//         //console.log('Token:', token);

//         return token;
//     } catch (error) {
//         console.error(error);
//     }
// }



// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();


// export function initNotification() {
//     Notification.requestPermission().then((permission) => {
//         console.log(permission)
//         if (permission === "granted") {
//             messaging.getToken().then((currentToken) => {
//                 if (currentToken) {
//                     console.log("TOKEN")
//                     console.log(currentToken);
//                 } else {
//                     console.log('No Instance ID token available. Request permission to generate one.');

//                 }
//             }).catch((err) => {
//                 console.log('An error occurred while retrieving token. ', err);
//             });
//         }
//     })
// }