---
id: build
title: Build Notes
sidebar_label: Notes
---

## Only build after done all config step

Build step take long time, computer will cache for save time. So you need make sure that already done all [Config step](getting-started-config.md) before build.

Because after first time build your changes in `/package.json > .cordova` will not update.

If you want change `/package.json > .cordova` after first build then need remove `/platforms`, `/plugins` folder then do all step in Build section again.

## Do Installation and Prepare step one time

Document below for each platforms will have `Installation`, `Prepare` and `Deploy`

Only `Deploy` step can do loop. Other just do one time.