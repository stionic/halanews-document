---
id: ios-installation
title: iOS Installation
sidebar_label: Installation
---

This guide shows how to set up your SDK development environment to deploy Cordova apps for iOS devices such as iPhone and iPad. You need to install the SDK tools regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read [Official document](https://cordova.apache.org/docs/en/9.x/guide/platforms/ios/index.html)

## Requirements and Support

Apple® tools required to build iOS applications only run on the OS X operating system on Intel-based Macs. Xcode® 8.0 (the minimum required version) runs only on OS X version 10.11.5 (El Capitan) or greater, and includes the iOS 10 SDK (Software Development Kit). To submit apps to the Apple App Store℠ requires the latest versions of the Apple tools.

You can test many of the Cordova features using the iOS simulator installed with the iOS SDK and Xcode, but you need an actual device to fully test all of the app's device features before submitting to the App Store. The device must have at least iOS 9 installed, the minimum iOS version supported since the release of cordova-ios v4.4.0.

## Install XCode

There are two ways to download Xcode:

* from the [App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12), available by searching for "Xcode" in the App Store application.

* from [Apple Developer Downloads](https://developer.apple.com/downloads/index.action), which requires registration as an Apple Developer.

Once Xcode is installed, several command-line tools need to be enabled for Cordova to run. From the command line, run:

```
xcode-select --install
```

## Deployment Tools

The [ios-deploy](https://www.npmjs.org/package/ios-deploy) tools allow you to launch iOS apps on an iOS Device from the command-line.

To install it, run the following from command-line terminal:

```
npm install -g ios-deploy
```

## Install Cocoapods

If your Mac don't have Cocoapods so you need install it first for OneSignal Push Notification Cordova plugin.

```
sudo gem install cocoapods
pod setup
pod repo update
```

![](/halanews-document/docs/assets/build-ios-pod-repo-update.png)