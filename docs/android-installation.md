---
id: android-installation
title: Android Installation
sidebar_label: Installation
---

This guide shows how to set up your SDK environment to deploy apps for Android devices. You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read [Official document](https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html)

## Install Android Studio

Install [Android Studio](https://developer.android.com/studio/index.html). Follow the instructions at the linked Android Developer site to get started. Opening Android Studio for the first time will guide you through the process of installing the Android SDK.

## Adding SDK Packages

After installing the Android SDK, you must also install the packages for whatever API level you wish to target. It is `recommended that you install the highest SDK version` that your version of cordova-android supports (see [Requirements and Support](https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html#requirements-and-support)).

Example, cordova-android@9 support Android API 29. So you need install SDK Platform for API Level 29

Open the Android SDK Manager by click Configure -> SDK Manager

(if you are openning project then it should be Tools > SDK Manager)

and make sure the following are installed:

1. In tab `SDK Platforms` install Android Platform SDK for your targeted version of Android

1. In tab `SDK Tools` install/update follow:
    * Android SDK Build-Tools version 19.1.0 or higher
    * Android SDK Platform-Tools
    * Android SDK Tools
    * Google Play Services

![](/halanews-document/docs/assets/build-android-sdk-platform.png)

![](/halanews-document/docs/assets/build-android-sdk-tools.png)

See Android's documentation on [Installing SDK Packages](https://developer.android.com/studio/intro/update#sdk-manager) for more details.