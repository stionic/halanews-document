---
id: ios-prepare
title: iOS Prepare
sidebar_label: Prepare
---


## Add iOS platform

For build Ionic/Cordova sources to iOS XCode project simple run follow command:

```
pod repo update
ionic cordova platform add ios
```

> First time add ios platform maybe take long time for install cocoapods, so please wait...and make sure it complete without any problem

After run command, it will create `/platforms/ios`, like image below is good!

![](/halanews-document/docs/assets/build-ios-add-platform.png)

## Change Icons and Splash screens

Icons means that the image represents your application, while the splash screens is the image that shows when you open the application.

In essence you just change the image in the `/resources/ios` folder.

It’s great that Ionic offers a tool for creating icons and splash screens automatically.

1. Install cordova-res IF not installed yet by run `npm i -g cordova-res`

2. Replace `/resources/ios/icon.png` and `/resources/splash.png` by your image.

> IMPORTANT! icon in iOS need [`avoid transparency`](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/), so replace icon.png in `/resources/ios`

3. Run `ionic cordova resources ios` create image assets

4. Run `cordova prepare ios` update image assets to iOS platform