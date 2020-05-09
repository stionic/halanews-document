/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    "Introduction": ["introduction"],
    "Getting Started": ["installation", "config", "customize"],
    "Build": [
      "build",
      {
        type: "category",
        label: "Android",
        items: ["android-installation", "android-prepare", "android-deploy"]
      },
      {
        type: "category",
        label: "iOS",
        items: ["ios-installation", "ios-prepare", "ios-deploy"]
      }
    ],
    "Guides": [
      "guides-setting",
      "guides-admob",
      "guides-google-analytics",
      "guides-notification",
      "guides-others"
    ],
    "Help / Problems": ["help-problems", "help-release-notes", "contact"]
  }
};
