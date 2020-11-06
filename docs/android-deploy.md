---
id: android-deploy
title: Android Deploy
sidebar_label: Deploy
---

Run everytime before you build want to build app in Android Studio when have changed code in `/src`

```
ionic cordova prepare android --prod
```

If building debug version then you should not use `--prod` for save time

## Opening a Project in Android Studio

### Import Project

1. Launch Android Studio.

2. Select `Import Project (Eclipse ADT, Gradle, etc)`

3. Select the Android platform directory in your project `/platforms/android`.

4. If have the Gradle Sync question you can simply answer `Yes`

![](/halanews-document/docs/assets/build-android-import-android-studio.png)

![](/halanews-document/docs/assets/build-android-gradle-sync.png)

### Verifying Gradle Sync

You need make sure that all working fine before continue Deploy Android application.

When Gradle Sync process completed, make sure it show `Project setup: successful` and have no any `WARNING` with RED color

Otherwise, please try [Do Refactor Gradle](android-deploy.md#do-refactor-gradle) first before contact support.

![](/halanews-document/docs/assets/build-android-gradle-good.png)

### Do Refactor Gradle

If your Gralde Sync process have `WARNING` with RED color and failed, can not build application then try Do Refactor:

1. Select `Build` panel and hide `Event Log` panel if it showing

1. Expand `Gradle Sync Issues`

1. Select each issue have `WARNING` icon

1. Check if Android Studio suggest Refactor then click and `Do Refactor`, else select other issue in above step

![](/halanews-document/docs/assets/build-android-refactor.png)

> After check and `Do Refactor` all issues in `Gradle Sync Issues` still not get `Project setup: successful` at [Verifying Gradle Sync](android-deploy.md#verifying-gradle-sync) then you can contact us with screenshot of issues

## Build and Run your app

There are too many documents about Build and Run application in Android Studio. You can easy search and read [Official Android Studio document](https://developer.android.com/studio/run/index.html)