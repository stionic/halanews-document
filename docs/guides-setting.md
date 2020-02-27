---
id: guides-setting
title: Guides Setting
sidebar_label: Setting on Website
---

The application is built for easy configuration and flexibility, settings on the website will sync with the application.

Login to the WordPress Dashboard, then choose Stionic menu

## General Setting

- Maintenance: show alert maintenance and disable endpoint WP REST API

- [Google Admob](guides-admob-ads.md): config Google Admob Ad Unit ID will display in the application

- Testing Ads: check to show Testing ads

- Ads after: After how many views the post will display ads (for Interstitial)

- [Google Analytics](guides-google-analytics.md): Tracking ID tracks customer usage of the app

- Application: configuration Android package and Apple app id, for Rate App, Update application and DeepLinks.

- Request timeout: maximum time per request in application (ms). The application canceled the request and notifies the user if the requested time is up to the limit.

- Root endpoint: useful in case you change website but don't want to update website in translated file [language].json

- Share: content when using the Share application function

- Version: the latest version of the app, older versions will display an update prompt.

- Header Allow Origin: customize Origin header, if empty will be request origin

- Extended Config: Other config in JSON format can get in application for easy customize

```
import { CoreProvider } from '../../providers/core/core';

constructor(core: CoreProvider) {
  let extended = core.getConfig('extended') || {}
}
```

## Categories Setting

Allow control categories page in application

- `Show all categories in categories page` option, if check it categories page in application will list all categories included all parents and all childs. Else show parents only.

- `Selected categories below will show in application` option, if check it only categories selected in list below will show in categories page. Else will hide all categories checked in categories list.

- `Drag and drop then Update to sort the categories shown in the app` you can drag and drop list categories for sorting in categories page. Sorting by users in application will override it.

    Check on checkbox categories will affect by `Selected categories below will show in application` option above.

## Media Setting

- `Thumbnail size` size of thumbnail image for list posts in application. Template `Column`, `Card`

- `Thumbnail square size` size of thumbnail image for list posts in application. Template `List`, `Reverse`

> Small size for performance, Big size for quality. After change need [regenerate thumbnail](https://www.google.com/search?q=wordpress+regenerate+thumbnails) old images

- `Disable featured images in application detail page` option, if check it will default hide Thumbnail image on top of Detail posts page in application. Setting in posts will override it.

## Deeplinks Setting

> Required [General setting](guides-setting.md#general-setting) Application package or App ID

- `URL SCHEME` (required) which you define in [Config Deeplinks](getting-started-config.md#deeplinks-optional)

- `Show button "Application" on bottom screen` option, if check will show deeplinks button in your website

- `Auto open application` option, if check when open your website in browser, will auto open your application

## OneSignal Setting

Configure OneSignal to send notifications when saving posts.

To get Keys and IDs, you need login to [OneSignal](https://onesignal.com/). Then select your app -> App Settings -> Keys & IDs.

- `Message format` is message when send notification, use `{{title}}` for placeholder post title. If empty message will be post title.

    Example you want default add `New post added:` prefix to message when send notification then setting it to `New post added: {{title}}`

    Setting when add/edit post will override it.

- `Include Player IDs` use for Testing only, when publishing need to delete this field. Player Id get in the OneSignal `App Dashboard -> Audience -> VIEW ALL USERS`, separated by ","

    When setting it, notification will only send to users match Player ID.