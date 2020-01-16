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