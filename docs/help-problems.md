---
id: help-problems
title: Problems
sidebar_label: Problems
---

All problems will update here. Please try find your problems before [contact us](contact.md)

> Make sure you have same error message and platform

## iOS only

### An error occurred while running subprocess cordova

#### Failed to install 'onesignal-cordova-plugin': Error: pod: Command failed with exit code 31

![](/halanews-document/docs/assets/problems-pod-install-code-31.png)

Reason: your Mac don't have Cocoapods or need update Cocoapods

Solution:

* Run `pod repo update`
* If you get error `pod: command not found` then you need [install Cocoapods](ios-installation.md#install-cocoapods) first
* Remove iOS platform and add again

    ```
    ionic cordova platform rm ios
    ionic cordova platform add ios
    ```