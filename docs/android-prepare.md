---
id: android-prepare
title: Android Prepare
sidebar_label: Prepare
---

## Add Android platform

For build Ionic/Cordova sources to Android project simple run follow command:

```
ionic cordova platform add android
```

After run command, it will create `/platforms/android`

![](/halanews-document/docs/assets/build-android-add-platform.png)

> This add platform step need complete without any problem!

![](/halanews-document/docs/assets/build-android-add-platform-complete.png)

## Change Icons and Splash screens

Icons means that the image represents your application, while the splash screens is the image that shows when you open the application.

In essence you just change the image in the `/resources/android` folder.

It’s great that Ionic offers a tool for creating icons and splash screens automatically.

1. Install cordova-res IF not installed yet by run `npm i -g cordova-res`

2. Replace `/resources/icon.png` and `/resources/splash.png` by your image.

3. Run `ionic cordova resources android` create image assets

4. Run `cordova prepare android` update image assets to Android platform

## Android notifications Icon

You can change the Android notifications icon of application in `/resources/stionic`

"ic_onesignal_large_icon_default" is large left icon show in notifications when you dropdown.

images in res folder is icon show in statusbar when get notifications.

Make sure your image has only "one layer" to support entire device, including the low version Android.

> You can also use the [Android assets studio tools](http://romannurik.github.io/AndroidAssetStudio/icons-notification.html#source.type=image&source.space.trim=1&source.space.pad=0&name=ic_stat_onesignal_default), after downloading the .zip file, extract to `/resources/stionic` folder.

![](/halanews-document/docs/assets/build-android-notification-icon.png)