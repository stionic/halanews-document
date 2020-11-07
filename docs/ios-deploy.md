---
id: ios-deploy
title: iOS Deploy
sidebar_label: Deploy
---

Run everytime before you build want to build app in XCode when have changed code in `/src`

```
ionic cordova prepare ios --prod
```

If building debug version then you should not use `--prod` for save time

## Opening a Project in XCode

Simple open `.xcworkspace` file in `/platforms/ios/` with Xcode.

## Build and Run your app

There are too many documents about Build and Run application in XCode. You can easy search and read [Official XCode document](https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/BuildingYourApp.html)

## OneSignal iOS Service Extensions (Optional)

Our app support send notifications to users mobile device using [OneSignal](guides-push-notification.md).

It already setup and working fine, but in iOS if you want support more advanced notification features then need config more by yourself.

1. Setup <a href="https://documentation.onesignal.com/docs/cordova-sdk-setup#ios-service-extensions" target="_blank">iOS Service Extensions</a> (from 4.3 to 4.10). Make sure to use `Objective-C` language.

2. After done above, continue setup <a href="https://documentation.onesignal.com/docs/ios-sdk-app-groups-setup#2-enable-app-groups-capability" target="_blank">iOS SDK App Groups</a> (only step 2)
