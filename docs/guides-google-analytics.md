---
id: guides-google-analytics
title: Guides Google Analytics
sidebar_label: Google Analytics
---

Google Analytics is a freemium analytics service, that tracks and reports traffic. You can use this great service to track user behavior, also of concern on WordPress mobile app to have good tactics.

Our app use Google Firebase Analytics for tracking users behavior.

First, login to [Firebase console](https://console.firebase.google.com/), if you never used before, click `Sign Up`. Otherwise, you can create a new project or select project you want use for application.

![](/halanews-document/docs/assets/guides-google-analytics-project.png)

Click `+ Add app` then select platform. Our app support Android and iOS

![](/halanews-document/docs/assets/guides-google-analytics-create-app.png)

* For Android platform you just fill package id you [config in /config.xml](getting-started-config.md#app-information). 

![](/halanews-document/docs/assets/guides-google-analytics-android.png)

* Then you just download config file and copy it to root project folder (/Sources)

![](/halanews-document/docs/assets/guides-google-analytics-android-download.png)

* Click `+ Add app` again then do same.

![](/halanews-document/docs/assets/guides-google-analytics-ios-download.png)

Final you will have 2 file in root project folder like below image

![](/halanews-document/docs/assets/guides-google-analytics-config-file.png)
