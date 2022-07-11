importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "",
    apiKey: "",
    projectId: "",
    appId: "",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload.data.notification,
    );
    const notification = JSON.parse(payload.data.notification);
    // Customize notification here
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: notification.icon,
    };

    // Sự kiện click thông báo
    self.addEventListener("notificationclick", () => {
        console.log("SFASF");
        window.open(notification.click_action);
    });

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
