/**
 * Do not edit directly
 * Generated on Thu, 06 Oct 2022 01:50:17 GMT
 */

(function(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else if (typeof exports === "object") {
    exports["_styleDictionary"] = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root["_styleDictionary"] = factory();
  }
}(this, function() {
  return {
  "image": {
    "logo": {
      "value": "assets/svg/logo.svg",
      "filePath": "tokens/asset/svg.json",
      "isSource": true,
      "original": {
        "value": "assets/svg/logo.svg"
      },
      "name": "ImageLogo",
      "attributes": {
        "category": "image",
        "type": "logo"
      },
      "path": [
        "image",
        "logo"
      ]
    },
    "empty": {
      "value": "assets/svg/empty.svg",
      "filePath": "tokens/asset/svg.json",
      "isSource": true,
      "original": {
        "value": "assets/svg/empty.svg"
      },
      "name": "ImageEmpty",
      "attributes": {
        "category": "image",
        "type": "empty"
      },
      "path": [
        "image",
        "empty"
      ]
    },
    "files": {
      "value": "assets/svg/files.svg",
      "filePath": "tokens/asset/svg.json",
      "isSource": true,
      "original": {
        "value": "assets/svg/files.svg"
      },
      "name": "ImageFiles",
      "attributes": {
        "category": "image",
        "type": "files"
      },
      "path": [
        "image",
        "files"
      ]
    }
  },
  "color": {
    "background": {
      "default": {
        "value": "#ffffff",
        "comment": "Background color that will match the current color scheme",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.white.value}",
          "comment": "Background color that will match the current color scheme"
        },
        "name": "ColorBackgroundDefault",
        "attributes": {
          "category": "color",
          "type": "background",
          "item": "default"
        },
        "path": [
          "color",
          "background",
          "default"
        ]
      },
      "primary": {
        "value": "#78b6ff",
        "comment": "Base color for the primary color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.4.value}",
          "comment": "Base color for the primary color"
        },
        "name": "ColorBackgroundPrimary",
        "attributes": {
          "category": "color",
          "type": "background",
          "item": "primary"
        },
        "path": [
          "color",
          "background",
          "primary"
        ]
      },
      "secondary": {
        "value": "#a2adb8",
        "comment": "Base color for the secondary color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.4.value}",
          "comment": "Base color for the secondary color"
        },
        "name": "ColorBackgroundSecondary",
        "attributes": {
          "category": "color",
          "type": "background",
          "item": "secondary"
        },
        "path": [
          "color",
          "background",
          "secondary"
        ]
      },
      "danger": {
        "value": "#ff858b",
        "comment": "Base color for the danger color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.red.4.value}",
          "comment": "Base color for the danger color"
        },
        "name": "ColorBackgroundDanger",
        "attributes": {
          "category": "color",
          "type": "background",
          "item": "danger"
        },
        "path": [
          "color",
          "background",
          "danger"
        ]
      },
      "warning": {
        "value": "#ffe75c",
        "comment": "Base color for the warning color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.yellow.2.value}",
          "comment": "Base color for the warning color"
        },
        "name": "ColorBackgroundWarning",
        "attributes": {
          "category": "color",
          "type": "background",
          "item": "warning"
        },
        "path": [
          "color",
          "background",
          "warning"
        ]
      },
      "success": {
        "value": "#52d9ac",
        "comment": "Base color for the success color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.green.4.value}",
          "comment": "Base color for the success color"
        },
        "name": "ColorBackgroundSuccess",
        "attributes": {
          "category": "color",
          "type": "background",
          "item": "success"
        },
        "path": [
          "color",
          "background",
          "success"
        ]
      },
      "info": {
        "value": "#cce3ff",
        "comment": "Base color for the info color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.2.value}",
          "comment": "Base color for the info color"
        },
        "name": "ColorBackgroundInfo",
        "attributes": {
          "category": "color",
          "type": "background",
          "item": "info"
        },
        "path": [
          "color",
          "background",
          "info"
        ]
      },
      "weak": {
        "default": {
          "value": "#ffffff",
          "comment": "Background color that will match the current color scheme",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.white.value}",
            "comment": "Background color that will match the current color scheme"
          },
          "name": "ColorBackgroundWeakDefault",
          "attributes": {
            "category": "color",
            "type": "background",
            "item": "weak",
            "subitem": "default"
          },
          "path": [
            "color",
            "background",
            "weak",
            "default"
          ]
        },
        "primary": {
          "value": "#abd2ff",
          "comment": "Weak color for the primary color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.blue.3.value}",
            "comment": "Weak color for the primary color"
          },
          "name": "ColorBackgroundWeakPrimary",
          "attributes": {
            "category": "color",
            "type": "background",
            "item": "weak",
            "subitem": "primary"
          },
          "path": [
            "color",
            "background",
            "weak",
            "primary"
          ]
        },
        "secondary": {
          "value": "#c5ced6",
          "comment": "Weak color for the secondary color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.3.value}",
            "comment": "Weak color for the secondary color"
          },
          "name": "ColorBackgroundWeakSecondary",
          "attributes": {
            "category": "color",
            "type": "background",
            "item": "weak",
            "subitem": "secondary"
          },
          "path": [
            "color",
            "background",
            "weak",
            "secondary"
          ]
        },
        "danger": {
          "value": "#ffb5b9",
          "comment": "Weak color for the danger color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.red.3.value}",
            "comment": "Weak color for the danger color"
          },
          "name": "ColorBackgroundWeakDanger",
          "attributes": {
            "category": "color",
            "type": "background",
            "item": "weak",
            "subitem": "danger"
          },
          "path": [
            "color",
            "background",
            "weak",
            "danger"
          ]
        },
        "warning": {
          "value": "#fff4b5",
          "comment": "Weak color for the warning color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.yellow.1.value}",
            "comment": "Weak color for the warning color"
          },
          "name": "ColorBackgroundWeakWarning",
          "attributes": {
            "category": "color",
            "type": "background",
            "item": "weak",
            "subitem": "warning"
          },
          "path": [
            "color",
            "background",
            "weak",
            "warning"
          ]
        },
        "success": {
          "value": "#8debcb",
          "comment": "Weak color for the success color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.green.3.value}",
            "comment": "Weak color for the success color"
          },
          "name": "ColorBackgroundWeakSuccess",
          "attributes": {
            "category": "color",
            "type": "background",
            "item": "weak",
            "subitem": "success"
          },
          "path": [
            "color",
            "background",
            "weak",
            "success"
          ]
        },
        "info": {
          "value": "#e8f3ff",
          "comment": "Weak color for the info color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.blue.1.value}",
            "comment": "Weak color for the info color"
          },
          "name": "ColorBackgroundWeakInfo",
          "attributes": {
            "category": "color",
            "type": "background",
            "item": "weak",
            "subitem": "info"
          },
          "path": [
            "color",
            "background",
            "weak",
            "info"
          ]
        }
      }
    },
    "border": {
      "default": {
        "value": "#2c353d",
        "filePath": "tokens/color/border.json",
        "isSource": true
      },
      "primary": {
        "value": "#1273e6",
        "filePath": "tokens/color/border.json",
        "isSource": true
      },
      "secondary": {
        "value": "#d9e0e6",
        "filePath": "tokens/color/border.json",
        "isSource": true
      },
      "success": {
        "value": "#009f6a",
        "filePath": "tokens/color/border.json",
        "isSource": true
      },
      "danger": {
        "value": "#d9363e",
        "filePath": "tokens/color/border.json",
        "isSource": true
      },
      "warning": {
        "value": "#ffb77c",
        "filePath": "tokens/color/border.json",
        "isSource": true
      },
      "info": {
        "value": "#abd2ff",
        "filePath": "tokens/color/border.json",
        "isSource": true
      },
      "value": "#d9e0e6",
      "filePath": "tokens/color/core.json",
      "isSource": true,
      "original": {
        "default": {
          "value": "{color.black.value}",
          "filePath": "tokens/color/border.json",
          "isSource": true
        },
        "primary": {
          "value": "{color.blue.6.value}",
          "filePath": "tokens/color/border.json",
          "isSource": true
        },
        "secondary": {
          "value": "{color.gray.2.value}",
          "filePath": "tokens/color/border.json",
          "isSource": true
        },
        "success": {
          "value": "{color.green.6.value}",
          "filePath": "tokens/color/border.json",
          "isSource": true
        },
        "danger": {
          "value": "{color.red.6.value}",
          "filePath": "tokens/color/border.json",
          "isSource": true
        },
        "warning": {
          "value": "{color.orange.2.value}",
          "filePath": "tokens/color/border.json",
          "isSource": true
        },
        "info": {
          "value": "{color.blue.3.value}",
          "filePath": "tokens/color/border.json",
          "isSource": true
        },
        "value": "{color.gray.2.value}"
      },
      "name": "ColorBorder",
      "attributes": {
        "category": "color",
        "type": "border"
      },
      "path": [
        "color",
        "border"
      ]
    },
    "default": {
      "value": "#ffffff",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.white.value}"
      },
      "name": "ColorDefault",
      "attributes": {
        "category": "color",
        "type": "default"
      },
      "path": [
        "color",
        "default"
      ]
    },
    "primary": {
      "value": "#1273e6",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.blue.6.value}"
      },
      "name": "ColorPrimary",
      "attributes": {
        "category": "color",
        "type": "primary"
      },
      "path": [
        "color",
        "primary"
      ]
    },
    "secondary": {
      "value": "#818e9a",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.gray.5.value}"
      },
      "name": "ColorSecondary",
      "attributes": {
        "category": "color",
        "type": "secondary"
      },
      "path": [
        "color",
        "secondary"
      ]
    },
    "success": {
      "value": "#009f6a",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.green.6.value}"
      },
      "name": "ColorSuccess",
      "attributes": {
        "category": "color",
        "type": "success"
      },
      "path": [
        "color",
        "success"
      ]
    },
    "danger": {
      "value": "#d9363e",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.red.6.value}"
      },
      "name": "ColorDanger",
      "attributes": {
        "category": "color",
        "type": "danger"
      },
      "path": [
        "color",
        "danger"
      ]
    },
    "warning": {
      "value": "#ffb77c",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.orange.2.value}"
      },
      "name": "ColorWarning",
      "attributes": {
        "category": "color",
        "type": "warning"
      },
      "path": [
        "color",
        "warning"
      ]
    },
    "info": {
      "value": "#abd2ff",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.blue.3.value}"
      },
      "name": "ColorInfo",
      "attributes": {
        "category": "color",
        "type": "info"
      },
      "path": [
        "color",
        "info"
      ]
    },
    "disabled": {
      "value": "#d9e0e6",
      "filePath": "tokens/color/brand.json",
      "isSource": true,
      "original": {
        "value": "{color.gray.2.value}"
      },
      "name": "ColorDisabled",
      "attributes": {
        "category": "color",
        "type": "disabled"
      },
      "path": [
        "color",
        "disabled"
      ]
    },
    "hover": {
      "default": {
        "value": "#f8f8f8",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.0.value}"
        },
        "name": "ColorHoverDefault",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "default"
        },
        "path": [
          "color",
          "hover",
          "default"
        ]
      },
      "dark": {
        "value": "#000000",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "#000000"
        },
        "name": "ColorHoverDark",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "dark"
        },
        "path": [
          "color",
          "hover",
          "dark"
        ]
      },
      "primary": {
        "value": "#0060cc",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.7.value}"
        },
        "name": "ColorHoverPrimary",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "primary"
        },
        "path": [
          "color",
          "hover",
          "primary"
        ]
      },
      "secondary": {
        "value": "#46525c",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.7.value}"
        },
        "name": "ColorHoverSecondary",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "secondary"
        },
        "path": [
          "color",
          "hover",
          "secondary"
        ]
      },
      "success": {
        "value": "#067852",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.green.7.value}"
        },
        "name": "ColorHoverSuccess",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "success"
        },
        "path": [
          "color",
          "hover",
          "success"
        ]
      },
      "danger": {
        "value": "#a12b2b",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.red.7.value}"
        },
        "name": "ColorHoverDanger",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "danger"
        },
        "path": [
          "color",
          "hover",
          "danger"
        ]
      },
      "warning": {
        "value": "#e16f24",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.orange.4.value}"
        },
        "name": "ColorHoverWarning",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "warning"
        },
        "path": [
          "color",
          "hover",
          "warning"
        ]
      },
      "info": {
        "value": "#78b6ff",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.4.value}"
        },
        "name": "ColorHoverInfo",
        "attributes": {
          "category": "color",
          "type": "hover",
          "item": "info"
        },
        "path": [
          "color",
          "hover",
          "info"
        ]
      }
    },
    "down": {
      "default": {
        "value": "#d9e0e6",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.2.value}"
        },
        "name": "ColorDownDefault",
        "attributes": {
          "category": "color",
          "type": "down",
          "item": "default"
        },
        "path": [
          "color",
          "down",
          "default"
        ]
      },
      "primary": {
        "value": "#0060cc",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.7.value}"
        },
        "name": "ColorDownPrimary",
        "attributes": {
          "category": "color",
          "type": "down",
          "item": "primary"
        },
        "path": [
          "color",
          "down",
          "primary"
        ]
      },
      "secondary": {
        "value": "#39444d",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.8.value}"
        },
        "name": "ColorDownSecondary",
        "attributes": {
          "category": "color",
          "type": "down",
          "item": "secondary"
        },
        "path": [
          "color",
          "down",
          "secondary"
        ]
      },
      "success": {
        "value": "#1b5441",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.green.8.value}"
        },
        "name": "ColorDownSuccess",
        "attributes": {
          "category": "color",
          "type": "down",
          "item": "success"
        },
        "path": [
          "color",
          "down",
          "success"
        ]
      },
      "danger": {
        "value": "#80252a",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.red.8.value}"
        },
        "name": "ColorDownDanger",
        "attributes": {
          "category": "color",
          "type": "down",
          "item": "danger"
        },
        "path": [
          "color",
          "down",
          "danger"
        ]
      },
      "warning": {
        "value": "#5c2200",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.orange.8.value}"
        },
        "name": "ColorDownWarning",
        "attributes": {
          "category": "color",
          "type": "down",
          "item": "warning"
        },
        "path": [
          "color",
          "down",
          "warning"
        ]
      },
      "info": {
        "value": "#0060cc",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.7.value}"
        },
        "name": "ColorDownInfo",
        "attributes": {
          "category": "color",
          "type": "down",
          "item": "info"
        },
        "path": [
          "color",
          "down",
          "info"
        ]
      }
    },
    "status": {
      "informative": {
        "value": "#1273e6",
        "comment": "e.g., active, in use, live, published",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.6.value}",
          "comment": "e.g., active, in use, live, published"
        },
        "name": "ColorStatusInformative",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "informative"
        },
        "path": [
          "color",
          "status",
          "informative"
        ]
      },
      "neutral": {
        "value": "#39444d",
        "comment": "e.g., archived, deleted, paused, draft, not started, ended",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.8.value}",
          "comment": "e.g., archived, deleted, paused, draft, not started, ended"
        },
        "name": "ColorStatusNeutral",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "neutral"
        },
        "path": [
          "color",
          "status",
          "neutral"
        ]
      },
      "positive": {
        "value": "#067852",
        "comment": "e.g., completed, finished, success, approved, verified, active, in use, live, published",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.green.7.value}",
          "comment": "e.g., completed, finished, success, approved, verified, active, in use, live, published"
        },
        "name": "ColorStatusPositive",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "positive"
        },
        "path": [
          "color",
          "status",
          "positive"
        ]
      },
      "notice": {
        "value": "#8c40ff",
        "comment": "e.g., in progress, pending, warning, in review, needs approval, scheduled, syncing, indexing",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.purple.6.value}",
          "comment": "e.g., in progress, pending, warning, in review, needs approval, scheduled, syncing, indexing"
        },
        "name": "ColorStatusNotice",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "notice"
        },
        "path": [
          "color",
          "status",
          "notice"
        ]
      },
      "negative": {
        "value": "#a12b2b",
        "comment": "e.g., error, failed, denied, blocked, inactive, not in use, unpublished",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.red.7.value}",
          "comment": "e.g., error, failed, denied, blocked, inactive, not in use, unpublished"
        },
        "name": "ColorStatusNegative",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "negative"
        },
        "path": [
          "color",
          "status",
          "negative"
        ]
      },
      "indigo": {
        "value": "#762c00",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.orange.7.value}"
        },
        "name": "ColorStatusIndigo",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "indigo"
        },
        "path": [
          "color",
          "status",
          "indigo"
        ]
      },
      "celery": {
        "value": "#067852",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.green.7.value}"
        },
        "name": "ColorStatusCelery",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "celery"
        },
        "path": [
          "color",
          "status",
          "celery"
        ]
      },
      "yellow": {
        "value": "#ffda00",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.yellow.3.value}"
        },
        "name": "ColorStatusYellow",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "yellow"
        },
        "path": [
          "color",
          "status",
          "yellow"
        ]
      },
      "magenta": {
        "value": "#a469ff",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.purple.5.value}"
        },
        "name": "ColorStatusMagenta",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "magenta"
        },
        "path": [
          "color",
          "status",
          "magenta"
        ]
      },
      "fuchsia": {
        "value": "#d1347a",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.pink.6.value}"
        },
        "name": "ColorStatusFuchsia",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "fuchsia"
        },
        "path": [
          "color",
          "status",
          "fuchsia"
        ]
      },
      "purple": {
        "value": "#a469ff",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.purple.5.value}"
        },
        "name": "ColorStatusPurple",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "purple"
        },
        "path": [
          "color",
          "status",
          "purple"
        ]
      },
      "seafoam": {
        "value": "#199091",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.teal.6.value}"
        },
        "name": "ColorStatusSeafoam",
        "attributes": {
          "category": "color",
          "type": "status",
          "item": "seafoam"
        },
        "path": [
          "color",
          "status",
          "seafoam"
        ]
      }
    },
    "red": {
      "0": {
        "value": "#fff2f3",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFF2F3"
        },
        "name": "ColorRed0",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "0"
        },
        "path": [
          "color",
          "red",
          "0"
        ]
      },
      "1": {
        "value": "#ffebec",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFEBEC"
        },
        "name": "ColorRed1",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "1"
        },
        "path": [
          "color",
          "red",
          "1"
        ]
      },
      "2": {
        "value": "#ffcfd1",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFCFD1"
        },
        "name": "ColorRed2",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "2"
        },
        "path": [
          "color",
          "red",
          "2"
        ]
      },
      "3": {
        "value": "#ffb5b9",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFB5B9"
        },
        "name": "ColorRed3",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "3"
        },
        "path": [
          "color",
          "red",
          "3"
        ]
      },
      "4": {
        "value": "#ff858b",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FF858B"
        },
        "name": "ColorRed4",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "4"
        },
        "path": [
          "color",
          "red",
          "4"
        ]
      },
      "5": {
        "value": "#ff5760",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FF5760"
        },
        "name": "ColorRed5",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "5"
        },
        "path": [
          "color",
          "red",
          "5"
        ]
      },
      "6": {
        "value": "#d9363e",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#D9363E"
        },
        "name": "ColorRed6",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "6"
        },
        "path": [
          "color",
          "red",
          "6"
        ]
      },
      "7": {
        "value": "#a12b2b",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#A12B2B"
        },
        "name": "ColorRed7",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "7"
        },
        "path": [
          "color",
          "red",
          "7"
        ]
      },
      "8": {
        "value": "#80252a",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#80252A"
        },
        "name": "ColorRed8",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "8"
        },
        "path": [
          "color",
          "red",
          "8"
        ]
      },
      "9": {
        "value": "#5c2121",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#5C2121"
        },
        "name": "ColorRed9",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "9"
        },
        "path": [
          "color",
          "red",
          "9"
        ]
      }
    },
    "orange": {
      "0": {
        "value": "#fff1e5",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#fff1e5"
        },
        "name": "ColorOrange0",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "0"
        },
        "path": [
          "color",
          "orange",
          "0"
        ]
      },
      "1": {
        "value": "#ffd8b5",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#ffd8b5"
        },
        "name": "ColorOrange1",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "1"
        },
        "path": [
          "color",
          "orange",
          "1"
        ]
      },
      "2": {
        "value": "#ffb77c",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#ffb77c"
        },
        "name": "ColorOrange2",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "2"
        },
        "path": [
          "color",
          "orange",
          "2"
        ]
      },
      "3": {
        "value": "#fb8f44",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#fb8f44"
        },
        "name": "ColorOrange3",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "3"
        },
        "path": [
          "color",
          "orange",
          "3"
        ]
      },
      "4": {
        "value": "#e16f24",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#e16f24"
        },
        "name": "ColorOrange4",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "4"
        },
        "path": [
          "color",
          "orange",
          "4"
        ]
      },
      "5": {
        "value": "#bc4c00",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#bc4c00"
        },
        "name": "ColorOrange5",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "5"
        },
        "path": [
          "color",
          "orange",
          "5"
        ]
      },
      "6": {
        "value": "#953800",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#953800"
        },
        "name": "ColorOrange6",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "6"
        },
        "path": [
          "color",
          "orange",
          "6"
        ]
      },
      "7": {
        "value": "#762c00",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#762c00"
        },
        "name": "ColorOrange7",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "7"
        },
        "path": [
          "color",
          "orange",
          "7"
        ]
      },
      "8": {
        "value": "#5c2200",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#5c2200"
        },
        "name": "ColorOrange8",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "8"
        },
        "path": [
          "color",
          "orange",
          "8"
        ]
      },
      "9": {
        "value": "#471700",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#471700"
        },
        "name": "ColorOrange9",
        "attributes": {
          "category": "color",
          "type": "orange",
          "item": "9"
        },
        "path": [
          "color",
          "orange",
          "9"
        ]
      }
    },
    "yellow": {
      "0": {
        "value": "#fffadb",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFFADB"
        },
        "name": "ColorYellow0",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "0"
        },
        "path": [
          "color",
          "yellow",
          "0"
        ]
      },
      "1": {
        "value": "#fff4b5",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFF4B5"
        },
        "name": "ColorYellow1",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "1"
        },
        "path": [
          "color",
          "yellow",
          "1"
        ]
      },
      "2": {
        "value": "#ffe75c",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFE75C"
        },
        "name": "ColorYellow2",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "2"
        },
        "path": [
          "color",
          "yellow",
          "2"
        ]
      },
      "3": {
        "value": "#ffda00",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFDA00"
        },
        "name": "ColorYellow3",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "3"
        },
        "path": [
          "color",
          "yellow",
          "3"
        ]
      },
      "4": {
        "value": "#e3ad0b",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#E3AD0B"
        },
        "name": "ColorYellow4",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "4"
        },
        "path": [
          "color",
          "yellow",
          "4"
        ]
      },
      "5": {
        "value": "#b58c12",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#B58C12"
        },
        "name": "ColorYellow5",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "5"
        },
        "path": [
          "color",
          "yellow",
          "5"
        ]
      },
      "6": {
        "value": "#876a2f",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#876A2F"
        },
        "name": "ColorYellow6",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "6"
        },
        "path": [
          "color",
          "yellow",
          "6"
        ]
      },
      "7": {
        "value": "#614d27",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#614D27"
        },
        "name": "ColorYellow7",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "7"
        },
        "path": [
          "color",
          "yellow",
          "7"
        ]
      },
      "8": {
        "value": "#523e21",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#523E21"
        },
        "name": "ColorYellow8",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "8"
        },
        "path": [
          "color",
          "yellow",
          "8"
        ]
      },
      "9": {
        "value": "#3d3121",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#3D3121"
        },
        "name": "ColorYellow9",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "9"
        },
        "path": [
          "color",
          "yellow",
          "9"
        ]
      }
    },
    "green": {
      "0": {
        "value": "#e8fff7",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#E8FFF7"
        },
        "name": "ColorGreen0",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "0"
        },
        "path": [
          "color",
          "green",
          "0"
        ]
      },
      "1": {
        "value": "#d6fff1",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#D6FFF1"
        },
        "name": "ColorGreen1",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "1"
        },
        "path": [
          "color",
          "green",
          "1"
        ]
      },
      "2": {
        "value": "#b5f5e0",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#B5F5E0"
        },
        "name": "ColorGreen2",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "2"
        },
        "path": [
          "color",
          "green",
          "2"
        ]
      },
      "3": {
        "value": "#8debcb",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#8DEBCB"
        },
        "name": "ColorGreen3",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "3"
        },
        "path": [
          "color",
          "green",
          "3"
        ]
      },
      "4": {
        "value": "#52d9ac",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#52D9AC"
        },
        "name": "ColorGreen4",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "4"
        },
        "path": [
          "color",
          "green",
          "4"
        ]
      },
      "5": {
        "value": "#28bd8b",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#28BD8B"
        },
        "name": "ColorGreen5",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "5"
        },
        "path": [
          "color",
          "green",
          "5"
        ]
      },
      "6": {
        "value": "#009f6a",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#009F6A"
        },
        "name": "ColorGreen6",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "6"
        },
        "path": [
          "color",
          "green",
          "6"
        ]
      },
      "7": {
        "value": "#067852",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#067852"
        },
        "name": "ColorGreen7",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "7"
        },
        "path": [
          "color",
          "green",
          "7"
        ]
      },
      "8": {
        "value": "#1b5441",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#1B5441"
        },
        "name": "ColorGreen8",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "8"
        },
        "path": [
          "color",
          "green",
          "8"
        ]
      },
      "9": {
        "value": "#233b33",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#233B33"
        },
        "name": "ColorGreen9",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "9"
        },
        "path": [
          "color",
          "green",
          "9"
        ]
      }
    },
    "blue": {
      "0": {
        "value": "#f6faff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#F6FAFF"
        },
        "name": "ColorBlue0",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "0"
        },
        "path": [
          "color",
          "blue",
          "0"
        ]
      },
      "1": {
        "value": "#e8f3ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#E8F3FF"
        },
        "name": "ColorBlue1",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "1"
        },
        "path": [
          "color",
          "blue",
          "1"
        ]
      },
      "2": {
        "value": "#cce3ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#CCE3FF"
        },
        "name": "ColorBlue2",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "2"
        },
        "path": [
          "color",
          "blue",
          "2"
        ]
      },
      "3": {
        "value": "#abd2ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#ABD2FF"
        },
        "name": "ColorBlue3",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "3"
        },
        "path": [
          "color",
          "blue",
          "3"
        ]
      },
      "4": {
        "value": "#78b6ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#78B6FF"
        },
        "name": "ColorBlue4",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "4"
        },
        "path": [
          "color",
          "blue",
          "4"
        ]
      },
      "5": {
        "value": "#429bff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#429BFF"
        },
        "name": "ColorBlue5",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "5"
        },
        "path": [
          "color",
          "blue",
          "5"
        ]
      },
      "6": {
        "value": "#1273e6",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#1273E6"
        },
        "name": "ColorBlue6",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "6"
        },
        "path": [
          "color",
          "blue",
          "6"
        ]
      },
      "7": {
        "value": "#0060cc",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#0060CC"
        },
        "name": "ColorBlue7",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "7"
        },
        "path": [
          "color",
          "blue",
          "7"
        ]
      },
      "8": {
        "value": "#1a497d",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#1A497D"
        },
        "name": "ColorBlue8",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "8"
        },
        "path": [
          "color",
          "blue",
          "8"
        ]
      },
      "9": {
        "value": "#203752",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#203752"
        },
        "name": "ColorBlue9",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "9"
        },
        "path": [
          "color",
          "blue",
          "9"
        ]
      }
    },
    "purple": {
      "0": {
        "value": "#f9f5ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#F9F5FF"
        },
        "name": "ColorPurple0",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "0"
        },
        "path": [
          "color",
          "purple",
          "0"
        ]
      },
      "1": {
        "value": "#f3ebff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#F3EBFF"
        },
        "name": "ColorPurple1",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "1"
        },
        "path": [
          "color",
          "purple",
          "1"
        ]
      },
      "2": {
        "value": "#e5d4ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#E5D4FF"
        },
        "name": "ColorPurple2",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "2"
        },
        "path": [
          "color",
          "purple",
          "2"
        ]
      },
      "3": {
        "value": "#d7bdff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#D7BDFF"
        },
        "name": "ColorPurple3",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "3"
        },
        "path": [
          "color",
          "purple",
          "3"
        ]
      },
      "4": {
        "value": "#bd91ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#BD91FF"
        },
        "name": "ColorPurple4",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "4"
        },
        "path": [
          "color",
          "purple",
          "4"
        ]
      },
      "5": {
        "value": "#a469ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#A469FF"
        },
        "name": "ColorPurple5",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "5"
        },
        "path": [
          "color",
          "purple",
          "5"
        ]
      },
      "6": {
        "value": "#8c40ff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#8C40FF"
        },
        "name": "ColorPurple6",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "6"
        },
        "path": [
          "color",
          "purple",
          "6"
        ]
      },
      "7": {
        "value": "#7122e3",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#7122E3"
        },
        "name": "ColorPurple7",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "7"
        },
        "path": [
          "color",
          "purple",
          "7"
        ]
      },
      "8": {
        "value": "#4c2e87",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#4C2E87"
        },
        "name": "ColorPurple8",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "8"
        },
        "path": [
          "color",
          "purple",
          "8"
        ]
      },
      "9": {
        "value": "#352e4a",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#352E4A"
        },
        "name": "ColorPurple9",
        "attributes": {
          "category": "color",
          "type": "purple",
          "item": "9"
        },
        "path": [
          "color",
          "purple",
          "9"
        ]
      }
    },
    "pink": {
      "0": {
        "value": "#fff2f8",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFF2F8"
        },
        "name": "ColorPink0",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "0"
        },
        "path": [
          "color",
          "pink",
          "0"
        ]
      },
      "1": {
        "value": "#ffe8f2",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFE8F2"
        },
        "name": "ColorPink1",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "1"
        },
        "path": [
          "color",
          "pink",
          "1"
        ]
      },
      "2": {
        "value": "#ffcce3",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFCCE3"
        },
        "name": "ColorPink2",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "2"
        },
        "path": [
          "color",
          "pink",
          "2"
        ]
      },
      "3": {
        "value": "#ffb0d3",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FFB0D3"
        },
        "name": "ColorPink3",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "3"
        },
        "path": [
          "color",
          "pink",
          "3"
        ]
      },
      "4": {
        "value": "#ff7db7",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#FF7DB7"
        },
        "name": "ColorPink4",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "4"
        },
        "path": [
          "color",
          "pink",
          "4"
        ]
      },
      "5": {
        "value": "#f0549a",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#F0549A"
        },
        "name": "ColorPink5",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "5"
        },
        "path": [
          "color",
          "pink",
          "5"
        ]
      },
      "6": {
        "value": "#d1347a",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#D1347A"
        },
        "name": "ColorPink6",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "6"
        },
        "path": [
          "color",
          "pink",
          "6"
        ]
      },
      "7": {
        "value": "#992659",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#992659"
        },
        "name": "ColorPink7",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "7"
        },
        "path": [
          "color",
          "pink",
          "7"
        ]
      },
      "8": {
        "value": "#782449",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#782449"
        },
        "name": "ColorPink8",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "8"
        },
        "path": [
          "color",
          "pink",
          "8"
        ]
      },
      "9": {
        "value": "#522338",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#522338"
        },
        "name": "ColorPink9",
        "attributes": {
          "category": "color",
          "type": "pink",
          "item": "9"
        },
        "path": [
          "color",
          "pink",
          "9"
        ]
      }
    },
    "gray": {
      "0": {
        "value": "#f8f8f8",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#f8f8f8"
        },
        "name": "ColorGray0",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "0"
        },
        "path": [
          "color",
          "gray",
          "0"
        ]
      },
      "1": {
        "value": "#ebf0f5",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#EBF0F5"
        },
        "name": "ColorGray1",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "1"
        },
        "path": [
          "color",
          "gray",
          "1"
        ]
      },
      "2": {
        "value": "#d9e0e6",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#D9E0E6"
        },
        "name": "ColorGray2",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "2"
        },
        "path": [
          "color",
          "gray",
          "2"
        ]
      },
      "3": {
        "value": "#c5ced6",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#C5CED6"
        },
        "name": "ColorGray3",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "3"
        },
        "path": [
          "color",
          "gray",
          "3"
        ]
      },
      "4": {
        "value": "#a2adb8",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#A2ADB8"
        },
        "name": "ColorGray4",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "4"
        },
        "path": [
          "color",
          "gray",
          "4"
        ]
      },
      "5": {
        "value": "#818e9a",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#818E9A"
        },
        "name": "ColorGray5",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "5"
        },
        "path": [
          "color",
          "gray",
          "5"
        ]
      },
      "6": {
        "value": "#626f7a",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#626F7A"
        },
        "name": "ColorGray6",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "6"
        },
        "path": [
          "color",
          "gray",
          "6"
        ]
      },
      "7": {
        "value": "#46525c",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#46525C"
        },
        "name": "ColorGray7",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "7"
        },
        "path": [
          "color",
          "gray",
          "7"
        ]
      },
      "8": {
        "value": "#39444d",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#39444D"
        },
        "name": "ColorGray8",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "8"
        },
        "path": [
          "color",
          "gray",
          "8"
        ]
      },
      "9": {
        "value": "#2c353d",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#2C353D"
        },
        "name": "ColorGray9",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "9"
        },
        "path": [
          "color",
          "gray",
          "9"
        ]
      }
    },
    "teal": {
      "0": {
        "value": "#e3ffff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#E3FFFF"
        },
        "name": "ColorTeal0",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "0"
        },
        "path": [
          "color",
          "teal",
          "0"
        ]
      },
      "1": {
        "value": "#ccffff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#CCFFFF"
        },
        "name": "ColorTeal1",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "1"
        },
        "path": [
          "color",
          "teal",
          "1"
        ]
      },
      "2": {
        "value": "#96feff",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#96FEFF"
        },
        "name": "ColorTeal2",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "2"
        },
        "path": [
          "color",
          "teal",
          "2"
        ]
      },
      "3": {
        "value": "#6ef4f5",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#6EF4F5"
        },
        "name": "ColorTeal3",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "3"
        },
        "path": [
          "color",
          "teal",
          "3"
        ]
      },
      "4": {
        "value": "#37e4e6",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#37E4E6"
        },
        "name": "ColorTeal4",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "4"
        },
        "path": [
          "color",
          "teal",
          "4"
        ]
      },
      "5": {
        "value": "#13bebf",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#13BEBF"
        },
        "name": "ColorTeal5",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "5"
        },
        "path": [
          "color",
          "teal",
          "5"
        ]
      },
      "6": {
        "value": "#199091",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#199091"
        },
        "name": "ColorTeal6",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "6"
        },
        "path": [
          "color",
          "teal",
          "6"
        ]
      },
      "7": {
        "value": "#226363",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#226363"
        },
        "name": "ColorTeal7",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "7"
        },
        "path": [
          "color",
          "teal",
          "7"
        ]
      },
      "8": {
        "value": "#274c4d",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#274C4D"
        },
        "name": "ColorTeal8",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "8"
        },
        "path": [
          "color",
          "teal",
          "8"
        ]
      },
      "9": {
        "value": "#223a3b",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#223A3B"
        },
        "name": "ColorTeal9",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "9"
        },
        "path": [
          "color",
          "teal",
          "9"
        ]
      }
    },
    "black": {
      "value": "#2c353d",
      "filePath": "tokens/color/core.json",
      "isSource": true,
      "original": {
        "value": "{color.gray.9.value}"
      },
      "name": "ColorBlack",
      "attributes": {
        "category": "color",
        "type": "black"
      },
      "path": [
        "color",
        "black"
      ]
    },
    "white": {
      "value": "#ffffff",
      "filePath": "tokens/color/core.json",
      "isSource": true,
      "original": {
        "value": "#ffffff"
      },
      "name": "ColorWhite",
      "attributes": {
        "category": "color",
        "type": "white"
      },
      "path": [
        "color",
        "white"
      ]
    },
    "transparent": {
      "black": {
        "0": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0)"
          },
          "name": "ColorTransparentBlack0",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "0"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "0"
          ]
        },
        "1": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.1)"
          },
          "name": "ColorTransparentBlack1",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "1"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "1"
          ]
        },
        "2": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.2)"
          },
          "name": "ColorTransparentBlack2",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "2"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "2"
          ]
        },
        "3": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.3)"
          },
          "name": "ColorTransparentBlack3",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "3"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "3"
          ]
        },
        "4": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.4)"
          },
          "name": "ColorTransparentBlack4",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "4"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "4"
          ]
        },
        "5": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.5)"
          },
          "name": "ColorTransparentBlack5",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "5"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "5"
          ]
        },
        "6": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.6)"
          },
          "name": "ColorTransparentBlack6",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "6"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "6"
          ]
        },
        "7": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.7)"
          },
          "name": "ColorTransparentBlack7",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "7"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "7"
          ]
        },
        "8": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.8)"
          },
          "name": "ColorTransparentBlack8",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "8"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "8"
          ]
        },
        "9": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.9)"
          },
          "name": "ColorTransparentBlack9",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "9"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "9"
          ]
        },
        "10": {
          "value": "#000000",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 1)"
          },
          "name": "ColorTransparentBlack10",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "black",
            "subitem": "10"
          },
          "path": [
            "color",
            "transparent",
            "black",
            "10"
          ]
        }
      },
      "white": {
        "0": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0)"
          },
          "name": "ColorTransparentWhite0",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "0"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "0"
          ]
        },
        "1": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.1)"
          },
          "name": "ColorTransparentWhite1",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "1"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "1"
          ]
        },
        "2": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.2)"
          },
          "name": "ColorTransparentWhite2",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "2"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "2"
          ]
        },
        "3": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.3)"
          },
          "name": "ColorTransparentWhite3",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "3"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "3"
          ]
        },
        "4": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.4)"
          },
          "name": "ColorTransparentWhite4",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "4"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "4"
          ]
        },
        "5": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.5)"
          },
          "name": "ColorTransparentWhite5",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "5"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "5"
          ]
        },
        "6": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.6)"
          },
          "name": "ColorTransparentWhite6",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "6"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "6"
          ]
        },
        "7": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.7)"
          },
          "name": "ColorTransparentWhite7",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "7"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "7"
          ]
        },
        "8": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.8)"
          },
          "name": "ColorTransparentWhite8",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "8"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "8"
          ]
        },
        "9": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 0.9)"
          },
          "name": "ColorTransparentWhite9",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "9"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "9"
          ]
        },
        "10": {
          "value": "#ffffff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "rgba(255, 255, 255, 1)"
          },
          "name": "ColorTransparentWhite10",
          "attributes": {
            "category": "color",
            "type": "transparent",
            "item": "white",
            "subitem": "10"
          },
          "path": [
            "color",
            "transparent",
            "white",
            "10"
          ]
        }
      }
    },
    "text": {
      "default": {
        "value": "#39444d",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.8.value}"
        },
        "name": "ColorTextDefault",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "default"
        },
        "path": [
          "color",
          "text",
          "default"
        ]
      },
      "primary": {
        "value": "#39444d",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.8.value}"
        },
        "name": "ColorTextPrimary",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "primary"
        },
        "path": [
          "color",
          "text",
          "primary"
        ]
      },
      "secondary": {
        "value": "#39444d",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.8.value}"
        },
        "name": "ColorTextSecondary",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "secondary"
        },
        "path": [
          "color",
          "text",
          "secondary"
        ]
      },
      "success": {
        "value": "#1b5441",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.green.8.value}"
        },
        "name": "ColorTextSuccess",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "success"
        },
        "path": [
          "color",
          "text",
          "success"
        ]
      },
      "danger": {
        "value": "#80252a",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.red.8.value}"
        },
        "name": "ColorTextDanger",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "danger"
        },
        "path": [
          "color",
          "text",
          "danger"
        ]
      },
      "warning": {
        "value": "#5c2200",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.orange.8.value}"
        },
        "name": "ColorTextWarning",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "warning"
        },
        "path": [
          "color",
          "text",
          "warning"
        ]
      },
      "info": {
        "value": "#1a497d",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.8.value}"
        },
        "name": "ColorTextInfo",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "info"
        },
        "path": [
          "color",
          "text",
          "info"
        ]
      },
      "title": {
        "value": "#2c353d",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.black.value}"
        },
        "name": "ColorTextTitle",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "title"
        },
        "path": [
          "color",
          "text",
          "title"
        ]
      },
      "subtitle": {
        "value": "#626f7a",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.6.value}"
        },
        "name": "ColorTextSubtitle",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "subtitle"
        },
        "path": [
          "color",
          "text",
          "subtitle"
        ]
      },
      "link": {
        "value": "#1a497d",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.blue.8.value}"
        },
        "name": "ColorTextLink",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "link"
        },
        "path": [
          "color",
          "text",
          "link"
        ]
      },
      "disabled": {
        "value": "#818e9a",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.gray.5.value}"
        },
        "name": "ColorTextDisabled",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "disabled"
        },
        "path": [
          "color",
          "text",
          "disabled"
        ]
      }
    }
  },
  "alert": {
    "color": {
      "title": {
        "default": {
          "value": "#2c353d",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.9.value}"
          },
          "name": "AlertColorTitleDefault",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "title",
            "subitem": "default"
          },
          "path": [
            "alert",
            "color",
            "title",
            "default"
          ]
        },
        "primary": {
          "value": "#1a497d",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.blue.8.value}"
          },
          "name": "AlertColorTitlePrimary",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "title",
            "subitem": "primary"
          },
          "path": [
            "alert",
            "color",
            "title",
            "primary"
          ]
        },
        "secondary": {
          "value": "#ffffff",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.white.value}"
          },
          "name": "AlertColorTitleSecondary",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "title",
            "subitem": "secondary"
          },
          "path": [
            "alert",
            "color",
            "title",
            "secondary"
          ]
        },
        "danger": {
          "value": "#a12b2b",
          "comment": "Base color for the danger color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.red.7.value}",
            "comment": "Base color for the danger color"
          },
          "name": "AlertColorTitleDanger",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "title",
            "subitem": "danger"
          },
          "path": [
            "alert",
            "color",
            "title",
            "danger"
          ]
        },
        "warning": {
          "value": "#b58c12",
          "comment": "Base color for the warning color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.yellow.5.value}",
            "comment": "Base color for the warning color"
          },
          "name": "AlertColorTitleWarning",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "title",
            "subitem": "warning"
          },
          "path": [
            "alert",
            "color",
            "title",
            "warning"
          ]
        },
        "success": {
          "value": "#067852",
          "comment": "Base color for the success color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.green.7.value}",
            "comment": "Base color for the success color"
          },
          "name": "AlertColorTitleSuccess",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "title",
            "subitem": "success"
          },
          "path": [
            "alert",
            "color",
            "title",
            "success"
          ]
        },
        "info": {
          "value": "#429bff",
          "comment": "Base color for the info color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.blue.5.value}",
            "comment": "Base color for the info color"
          },
          "name": "AlertColorTitleInfo",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "title",
            "subitem": "info"
          },
          "path": [
            "alert",
            "color",
            "title",
            "info"
          ]
        },
        "weak": {
          "default": {
            "value": "#a2adb8",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.gray.4.value}"
            },
            "name": "AlertColorTitleWeakDefault",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "title",
              "subitem": "weak",
              "state": "default"
            },
            "path": [
              "alert",
              "color",
              "title",
              "weak",
              "default"
            ]
          },
          "primary": {
            "value": "#78b6ff",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.blue.4.value}"
            },
            "name": "AlertColorTitleWeakPrimary",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "title",
              "subitem": "weak",
              "state": "primary"
            },
            "path": [
              "alert",
              "color",
              "title",
              "weak",
              "primary"
            ]
          },
          "secondary": {
            "value": "#a2adb8",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.gray.4.value}"
            },
            "name": "AlertColorTitleWeakSecondary",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "title",
              "subitem": "weak",
              "state": "secondary"
            },
            "path": [
              "alert",
              "color",
              "title",
              "weak",
              "secondary"
            ]
          },
          "danger": {
            "value": "#ff858b",
            "comment": "Base color for the danger color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.red.4.value}",
              "comment": "Base color for the danger color"
            },
            "name": "AlertColorTitleWeakDanger",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "title",
              "subitem": "weak",
              "state": "danger"
            },
            "path": [
              "alert",
              "color",
              "title",
              "weak",
              "danger"
            ]
          },
          "warning": {
            "value": "#e16f24",
            "comment": "Base color for the warning color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.orange.4.value}",
              "comment": "Base color for the warning color"
            },
            "name": "AlertColorTitleWeakWarning",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "title",
              "subitem": "weak",
              "state": "warning"
            },
            "path": [
              "alert",
              "color",
              "title",
              "weak",
              "warning"
            ]
          },
          "success": {
            "value": "#52d9ac",
            "comment": "Base color for the success color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.green.4.value}",
              "comment": "Base color for the success color"
            },
            "name": "AlertColorTitleWeakSuccess",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "title",
              "subitem": "weak",
              "state": "success"
            },
            "path": [
              "alert",
              "color",
              "title",
              "weak",
              "success"
            ]
          },
          "info": {
            "value": "#78b6ff",
            "comment": "Base color for the info color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.blue.4.value}",
              "comment": "Base color for the info color"
            },
            "name": "AlertColorTitleWeakInfo",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "title",
              "subitem": "weak",
              "state": "info"
            },
            "path": [
              "alert",
              "color",
              "title",
              "weak",
              "info"
            ]
          }
        }
      },
      "content": {
        "default": {
          "value": "#2c353d",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.9.value}"
          },
          "name": "AlertColorContentDefault",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "default"
          },
          "path": [
            "alert",
            "color",
            "content",
            "default"
          ]
        },
        "dark": {
          "value": "#ffffff",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.white.value}"
          },
          "name": "AlertColorContentDark",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "dark"
          },
          "path": [
            "alert",
            "color",
            "content",
            "dark"
          ]
        },
        "primary": {
          "value": "#e8f3ff",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.blue.1.value}"
          },
          "name": "AlertColorContentPrimary",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "primary"
          },
          "path": [
            "alert",
            "color",
            "content",
            "primary"
          ]
        },
        "secondary": {
          "value": "#ebf0f5",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.1.value}"
          },
          "name": "AlertColorContentSecondary",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "secondary"
          },
          "path": [
            "alert",
            "color",
            "content",
            "secondary"
          ]
        },
        "danger": {
          "value": "#ffebec",
          "comment": "Base color for the danger color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.red.1.value}",
            "comment": "Base color for the danger color"
          },
          "name": "AlertColorContentDanger",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "danger"
          },
          "path": [
            "alert",
            "color",
            "content",
            "danger"
          ]
        },
        "warning": {
          "value": "#ffffff",
          "comment": "Base color for the warning color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.white.value}",
            "comment": "Base color for the warning color"
          },
          "name": "AlertColorContentWarning",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "warning"
          },
          "path": [
            "alert",
            "color",
            "content",
            "warning"
          ]
        },
        "success": {
          "value": "#ffffff",
          "comment": "Base color for the success color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.white.value}",
            "comment": "Base color for the success color"
          },
          "name": "AlertColorContentSuccess",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "success"
          },
          "path": [
            "alert",
            "color",
            "content",
            "success"
          ]
        },
        "info": {
          "value": "#ffffff",
          "comment": "Base color for the info color",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.white.value}",
            "comment": "Base color for the info color"
          },
          "name": "AlertColorContentInfo",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "content",
            "subitem": "info"
          },
          "path": [
            "alert",
            "color",
            "content",
            "info"
          ]
        },
        "weak": {
          "default": {
            "value": "#c5ced6",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.gray.3.value}"
            },
            "name": "AlertColorContentWeakDefault",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "content",
              "subitem": "weak",
              "state": "default"
            },
            "path": [
              "alert",
              "color",
              "content",
              "weak",
              "default"
            ]
          },
          "primary": {
            "value": "#abd2ff",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.blue.3.value}"
            },
            "name": "AlertColorContentWeakPrimary",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "content",
              "subitem": "weak",
              "state": "primary"
            },
            "path": [
              "alert",
              "color",
              "content",
              "weak",
              "primary"
            ]
          },
          "secondary": {
            "value": "#c5ced6",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.gray.3.value}"
            },
            "name": "AlertColorContentWeakSecondary",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "content",
              "subitem": "weak",
              "state": "secondary"
            },
            "path": [
              "alert",
              "color",
              "content",
              "weak",
              "secondary"
            ]
          },
          "danger": {
            "value": "#ffb5b9",
            "comment": "Base color for the danger color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.red.3.value}",
              "comment": "Base color for the danger color"
            },
            "name": "AlertColorContentWeakDanger",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "content",
              "subitem": "weak",
              "state": "danger"
            },
            "path": [
              "alert",
              "color",
              "content",
              "weak",
              "danger"
            ]
          },
          "warning": {
            "value": "#fb8f44",
            "comment": "Base color for the warning color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.orange.3.value}",
              "comment": "Base color for the warning color"
            },
            "name": "AlertColorContentWeakWarning",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "content",
              "subitem": "weak",
              "state": "warning"
            },
            "path": [
              "alert",
              "color",
              "content",
              "weak",
              "warning"
            ]
          },
          "success": {
            "value": "#8debcb",
            "comment": "Base color for the success color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.green.3.value}",
              "comment": "Base color for the success color"
            },
            "name": "AlertColorContentWeakSuccess",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "content",
              "subitem": "weak",
              "state": "success"
            },
            "path": [
              "alert",
              "color",
              "content",
              "weak",
              "success"
            ]
          },
          "info": {
            "value": "#429bff",
            "comment": "Base color for the info color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.blue.5.value}",
              "comment": "Base color for the info color"
            },
            "name": "AlertColorContentWeakInfo",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "content",
              "subitem": "weak",
              "state": "info"
            },
            "path": [
              "alert",
              "color",
              "content",
              "weak",
              "info"
            ]
          }
        }
      },
      "background": {
        "default": {
          "value": "#f8f8f8",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.0.value}"
          },
          "name": "AlertColorBackgroundDefault",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "default"
          },
          "path": [
            "alert",
            "color",
            "background",
            "default"
          ]
        },
        "dark": {
          "value": "#2c353d",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.9.value}"
          },
          "name": "AlertColorBackgroundDark",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "dark"
          },
          "path": [
            "alert",
            "color",
            "background",
            "dark"
          ]
        },
        "primary": {
          "value": "#1273e6",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.primary.value}"
          },
          "name": "AlertColorBackgroundPrimary",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "primary"
          },
          "path": [
            "alert",
            "color",
            "background",
            "primary"
          ]
        },
        "secondary": {
          "value": "#818e9a",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.secondary.value}"
          },
          "name": "AlertColorBackgroundSecondary",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "secondary"
          },
          "path": [
            "alert",
            "color",
            "background",
            "secondary"
          ]
        },
        "success": {
          "value": "#009f6a",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.success.value}"
          },
          "name": "AlertColorBackgroundSuccess",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "success"
          },
          "path": [
            "alert",
            "color",
            "background",
            "success"
          ]
        },
        "info": {
          "value": "#abd2ff",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.info.value}"
          },
          "name": "AlertColorBackgroundInfo",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "info"
          },
          "path": [
            "alert",
            "color",
            "background",
            "info"
          ]
        },
        "warning": {
          "value": "#ffb77c",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.warning.value}"
          },
          "name": "AlertColorBackgroundWarning",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "warning"
          },
          "path": [
            "alert",
            "color",
            "background",
            "warning"
          ]
        },
        "danger": {
          "value": "#d9363e",
          "filePath": "tokens/component/alert.json",
          "isSource": true,
          "original": {
            "value": "{color.danger.value}"
          },
          "name": "AlertColorBackgroundDanger",
          "attributes": {
            "category": "alert",
            "type": "color",
            "item": "background",
            "subitem": "danger"
          },
          "path": [
            "alert",
            "color",
            "background",
            "danger"
          ]
        },
        "weak": {
          "default": {
            "value": "#ebf0f5",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.gray.1.value}"
            },
            "name": "AlertColorBackgroundWeakDefault",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "background",
              "subitem": "weak",
              "state": "default"
            },
            "path": [
              "alert",
              "color",
              "background",
              "weak",
              "default"
            ]
          },
          "primary": {
            "value": "#e8f3ff",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.blue.1.value}"
            },
            "name": "AlertColorBackgroundWeakPrimary",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "background",
              "subitem": "weak",
              "state": "primary"
            },
            "path": [
              "alert",
              "color",
              "background",
              "weak",
              "primary"
            ]
          },
          "secondary": {
            "value": "#ebf0f5",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.gray.1.value}"
            },
            "name": "AlertColorBackgroundWeakSecondary",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "background",
              "subitem": "weak",
              "state": "secondary"
            },
            "path": [
              "alert",
              "color",
              "background",
              "weak",
              "secondary"
            ]
          },
          "danger": {
            "value": "#ffebec",
            "comment": "Base color for the danger color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.red.1.value}",
              "comment": "Base color for the danger color"
            },
            "name": "AlertColorBackgroundWeakDanger",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "background",
              "subitem": "weak",
              "state": "danger"
            },
            "path": [
              "alert",
              "color",
              "background",
              "weak",
              "danger"
            ]
          },
          "warning": {
            "value": "#ffd8b5",
            "comment": "Base color for the warning color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.orange.1.value}",
              "comment": "Base color for the warning color"
            },
            "name": "AlertColorBackgroundWeakWarning",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "background",
              "subitem": "weak",
              "state": "warning"
            },
            "path": [
              "alert",
              "color",
              "background",
              "weak",
              "warning"
            ]
          },
          "success": {
            "value": "#d6fff1",
            "comment": "Base color for the success color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.green.1.value}",
              "comment": "Base color for the success color"
            },
            "name": "AlertColorBackgroundWeakSuccess",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "background",
              "subitem": "weak",
              "state": "success"
            },
            "path": [
              "alert",
              "color",
              "background",
              "weak",
              "success"
            ]
          },
          "info": {
            "value": "#e2f4ff",
            "comment": "Base color for the info color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "#e2f4ff",
              "comment": "Base color for the info color"
            },
            "name": "AlertColorBackgroundWeakInfo",
            "attributes": {
              "category": "alert",
              "type": "color",
              "item": "background",
              "subitem": "weak",
              "state": "info"
            },
            "path": [
              "alert",
              "color",
              "background",
              "weak",
              "info"
            ]
          }
        }
      }
    }
  },
  "avatar": {
    "size": {
      "30": {
        "value": "16px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "16px"
        },
        "name": "AvatarSize30",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "30"
        },
        "path": [
          "avatar",
          "size",
          "30"
        ]
      },
      "50": {
        "value": "20px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "20px"
        },
        "name": "AvatarSize50",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "50"
        },
        "path": [
          "avatar",
          "size",
          "50"
        ]
      },
      "100": {
        "value": "30px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "30px"
        },
        "name": "AvatarSize100",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "100"
        },
        "path": [
          "avatar",
          "size",
          "100"
        ]
      },
      "200": {
        "value": "35px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "35px"
        },
        "name": "AvatarSize200",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "200"
        },
        "path": [
          "avatar",
          "size",
          "200"
        ]
      },
      "300": {
        "value": "40px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "40px"
        },
        "name": "AvatarSize300",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "300"
        },
        "path": [
          "avatar",
          "size",
          "300"
        ]
      },
      "400": {
        "value": "45px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "45px"
        },
        "name": "AvatarSize400",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "400"
        },
        "path": [
          "avatar",
          "size",
          "400"
        ]
      },
      "500": {
        "value": "50px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "50px"
        },
        "name": "AvatarSize500",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "500"
        },
        "path": [
          "avatar",
          "size",
          "500"
        ]
      },
      "600": {
        "value": "55px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "55px"
        },
        "name": "AvatarSize600",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "600"
        },
        "path": [
          "avatar",
          "size",
          "600"
        ]
      },
      "700": {
        "value": "60px",
        "filePath": "tokens/component/avatar.json",
        "isSource": true,
        "original": {
          "value": "60px"
        },
        "name": "AvatarSize700",
        "attributes": {
          "category": "avatar",
          "type": "size",
          "item": "700"
        },
        "path": [
          "avatar",
          "size",
          "700"
        ]
      }
    }
  },
  "button": {
    "closable": {
      "hover": {
        "background": {
          "default": {
            "value": "#ffffff",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.transparent.white.1.value}"
            },
            "name": "ButtonClosableHoverBackgroundDefault",
            "attributes": {
              "category": "button",
              "type": "closable",
              "item": "hover",
              "subitem": "background",
              "state": "default"
            },
            "path": [
              "button",
              "closable",
              "hover",
              "background",
              "default"
            ]
          }
        }
      }
    },
    "hover": {
      "background": {
        "default": {
          "value": "#ebf0f5",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.1.value}"
          },
          "name": "ButtonHoverBackgroundDefault",
          "attributes": {
            "category": "button",
            "type": "hover",
            "item": "background",
            "subitem": "default"
          },
          "path": [
            "button",
            "hover",
            "background",
            "default"
          ]
        }
      }
    },
    "selected": {
      "background": {
        "default": {
          "value": "#d9e0e6",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.2.value}"
          },
          "name": "ButtonSelectedBackgroundDefault",
          "attributes": {
            "category": "button",
            "type": "selected",
            "item": "background",
            "subitem": "default"
          },
          "path": [
            "button",
            "selected",
            "background",
            "default"
          ]
        }
      }
    },
    "disabled": {
      "background": {
        "default": {
          "value": "#d9e0e6",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.2.value}"
          },
          "name": "ButtonDisabledBackgroundDefault",
          "attributes": {
            "category": "button",
            "type": "disabled",
            "item": "background",
            "subitem": "default"
          },
          "path": [
            "button",
            "disabled",
            "background",
            "default"
          ]
        }
      },
      "border": {
        "default": {
          "value": "#d9e0e6",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.2.value}"
          },
          "name": "ButtonDisabledBorderDefault",
          "attributes": {
            "category": "button",
            "type": "disabled",
            "item": "border",
            "subitem": "default"
          },
          "path": [
            "button",
            "disabled",
            "border",
            "default"
          ]
        }
      },
      "text": {
        "default": {
          "value": "#818e9a",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.5.value}"
          },
          "name": "ButtonDisabledTextDefault",
          "attributes": {
            "category": "button",
            "type": "disabled",
            "item": "text",
            "subitem": "default"
          },
          "path": [
            "button",
            "disabled",
            "text",
            "default"
          ]
        }
      }
    },
    "color": {
      "background": {
        "default": {
          "value": "#ffffff",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.default.value}"
          },
          "name": "ButtonColorBackgroundDefault",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "default"
          },
          "path": [
            "button",
            "color",
            "background",
            "default"
          ]
        },
        "primary": {
          "value": "#1273e6",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.primary.value}"
          },
          "name": "ButtonColorBackgroundPrimary",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "primary"
          },
          "path": [
            "button",
            "color",
            "background",
            "primary"
          ]
        },
        "secondary": {
          "value": "#818e9a",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.secondary.value}"
          },
          "name": "ButtonColorBackgroundSecondary",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "secondary"
          },
          "path": [
            "button",
            "color",
            "background",
            "secondary"
          ]
        },
        "success": {
          "value": "#009f6a",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.success.value}"
          },
          "name": "ButtonColorBackgroundSuccess",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "success"
          },
          "path": [
            "button",
            "color",
            "background",
            "success"
          ]
        },
        "info": {
          "value": "#abd2ff",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.info.value}"
          },
          "name": "ButtonColorBackgroundInfo",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "info"
          },
          "path": [
            "button",
            "color",
            "background",
            "info"
          ]
        },
        "warning": {
          "value": "#ffb77c",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.warning.value}"
          },
          "name": "ButtonColorBackgroundWarning",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "warning"
          },
          "path": [
            "button",
            "color",
            "background",
            "warning"
          ]
        },
        "danger": {
          "value": "#d9363e",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.danger.value}"
          },
          "name": "ButtonColorBackgroundDanger",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "danger"
          },
          "path": [
            "button",
            "color",
            "background",
            "danger"
          ]
        },
        "dark": {
          "value": "#2c353d",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.black.value}"
          },
          "name": "ButtonColorBackgroundDark",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "background",
            "subitem": "dark"
          },
          "path": [
            "button",
            "color",
            "background",
            "dark"
          ]
        }
      },
      "border": {
        "default": {
          "value": "#d9e0e6",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.2.value}"
          },
          "name": "ButtonColorBorderDefault",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "default"
          },
          "path": [
            "button",
            "color",
            "border",
            "default"
          ]
        },
        "primary": {
          "value": "#1273e6",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.primary.value}"
          },
          "name": "ButtonColorBorderPrimary",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "primary"
          },
          "path": [
            "button",
            "color",
            "border",
            "primary"
          ]
        },
        "secondary": {
          "value": "#818e9a",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.secondary.value}"
          },
          "name": "ButtonColorBorderSecondary",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "secondary"
          },
          "path": [
            "button",
            "color",
            "border",
            "secondary"
          ]
        },
        "success": {
          "value": "#009f6a",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.success.value}"
          },
          "name": "ButtonColorBorderSuccess",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "success"
          },
          "path": [
            "button",
            "color",
            "border",
            "success"
          ]
        },
        "info": {
          "value": "#abd2ff",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.info.value}"
          },
          "name": "ButtonColorBorderInfo",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "info"
          },
          "path": [
            "button",
            "color",
            "border",
            "info"
          ]
        },
        "warning": {
          "value": "#ffb77c",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.warning.value}"
          },
          "name": "ButtonColorBorderWarning",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "warning"
          },
          "path": [
            "button",
            "color",
            "border",
            "warning"
          ]
        },
        "danger": {
          "value": "#d9363e",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.danger.value}"
          },
          "name": "ButtonColorBorderDanger",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "danger"
          },
          "path": [
            "button",
            "color",
            "border",
            "danger"
          ]
        },
        "dark": {
          "value": "#2c353d",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{color.black.value}"
          },
          "name": "ButtonColorBorderDark",
          "attributes": {
            "category": "button",
            "type": "color",
            "item": "border",
            "subitem": "dark"
          },
          "path": [
            "button",
            "color",
            "border",
            "dark"
          ]
        }
      }
    },
    "size": {
      "padding": {
        "small": {
          "value": "5px 6px",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{size.base.65.value} {size.base.75.value}"
          },
          "name": "ButtonSizePaddingSmall",
          "attributes": {
            "category": "button",
            "type": "size",
            "item": "padding",
            "subitem": "small"
          },
          "path": [
            "button",
            "size",
            "padding",
            "small"
          ]
        },
        "medium": {
          "value": "8px 10px",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{size.base.100.value} {size.base.125.value}"
          },
          "name": "ButtonSizePaddingMedium",
          "attributes": {
            "category": "button",
            "type": "size",
            "item": "padding",
            "subitem": "medium"
          },
          "path": [
            "button",
            "size",
            "padding",
            "medium"
          ]
        },
        "large": {
          "value": "14px 20px",
          "filePath": "tokens/component/button.json",
          "isSource": true,
          "original": {
            "value": "{size.base.175.value} {size.base.250.value}"
          },
          "name": "ButtonSizePaddingLarge",
          "attributes": {
            "category": "button",
            "type": "size",
            "item": "padding",
            "subitem": "large"
          },
          "path": [
            "button",
            "size",
            "padding",
            "large"
          ]
        }
      }
    }
  },
  "divider": {
    "color": {
      "border": {
        "default": {
          "value": "#d9e0e6",
          "filePath": "tokens/component/divider.json",
          "isSource": true,
          "original": {
            "value": "{color.gray.2.value}"
          },
          "name": "DividerColorBorderDefault",
          "attributes": {
            "category": "divider",
            "type": "color",
            "item": "border",
            "subitem": "default"
          },
          "path": [
            "divider",
            "color",
            "border",
            "default"
          ]
        },
        "primary": {
          "value": "#1273e6",
          "filePath": "tokens/component/divider.json",
          "isSource": true,
          "original": {
            "value": "{color.primary.value}"
          },
          "name": "DividerColorBorderPrimary",
          "attributes": {
            "category": "divider",
            "type": "color",
            "item": "border",
            "subitem": "primary"
          },
          "path": [
            "divider",
            "color",
            "border",
            "primary"
          ]
        },
        "secondary": {
          "value": "#818e9a",
          "filePath": "tokens/component/divider.json",
          "isSource": true,
          "original": {
            "value": "{color.secondary.value}"
          },
          "name": "DividerColorBorderSecondary",
          "attributes": {
            "category": "divider",
            "type": "color",
            "item": "border",
            "subitem": "secondary"
          },
          "path": [
            "divider",
            "color",
            "border",
            "secondary"
          ]
        },
        "success": {
          "value": "#009f6a",
          "filePath": "tokens/component/divider.json",
          "isSource": true,
          "original": {
            "value": "{color.success.value}"
          },
          "name": "DividerColorBorderSuccess",
          "attributes": {
            "category": "divider",
            "type": "color",
            "item": "border",
            "subitem": "success"
          },
          "path": [
            "divider",
            "color",
            "border",
            "success"
          ]
        },
        "info": {
          "value": "#abd2ff",
          "filePath": "tokens/component/divider.json",
          "isSource": true,
          "original": {
            "value": "{color.info.value}"
          },
          "name": "DividerColorBorderInfo",
          "attributes": {
            "category": "divider",
            "type": "color",
            "item": "border",
            "subitem": "info"
          },
          "path": [
            "divider",
            "color",
            "border",
            "info"
          ]
        },
        "warning": {
          "value": "#ffb77c",
          "filePath": "tokens/component/divider.json",
          "isSource": true,
          "original": {
            "value": "{color.warning.value}"
          },
          "name": "DividerColorBorderWarning",
          "attributes": {
            "category": "divider",
            "type": "color",
            "item": "border",
            "subitem": "warning"
          },
          "path": [
            "divider",
            "color",
            "border",
            "warning"
          ]
        },
        "danger": {
          "value": "#d9363e",
          "filePath": "tokens/component/divider.json",
          "isSource": true,
          "original": {
            "value": "{color.danger.value}"
          },
          "name": "DividerColorBorderDanger",
          "attributes": {
            "category": "divider",
            "type": "color",
            "item": "border",
            "subitem": "danger"
          },
          "path": [
            "divider",
            "color",
            "border",
            "danger"
          ]
        }
      }
    }
  },
  "shadow": {
    "1": {
      "value": "0 1px 4px 0 rgba(170, 170, 170, 0.5)",
      "filePath": "tokens/elevation/shadow.json",
      "isSource": true,
      "original": {
        "value": "0 1px 4px 0 {shadow.color.value}"
      },
      "name": "Shadow1",
      "attributes": {
        "category": "shadow",
        "type": "1"
      },
      "path": [
        "shadow",
        "1"
      ]
    },
    "2": {
      "value": "0 4px 8px 0 rgba(170, 170, 170, 0.5)",
      "filePath": "tokens/elevation/shadow.json",
      "isSource": true,
      "original": {
        "value": "0 4px 8px 0 {shadow.color.value}"
      },
      "name": "Shadow2",
      "attributes": {
        "category": "shadow",
        "type": "2"
      },
      "path": [
        "shadow",
        "2"
      ]
    },
    "3": {
      "value": "0 8px 16px 0 rgba(170, 170, 170, 0.5)",
      "filePath": "tokens/elevation/shadow.json",
      "isSource": true,
      "original": {
        "value": "0 8px 16px 0 {shadow.color.value}"
      },
      "name": "Shadow3",
      "attributes": {
        "category": "shadow",
        "type": "3"
      },
      "path": [
        "shadow",
        "3"
      ]
    },
    "4": {
      "value": "0 12px 24px 0 rgba(170, 170, 170, 0.5)",
      "filePath": "tokens/elevation/shadow.json",
      "isSource": true,
      "original": {
        "value": "0 12px 24px 0 {shadow.color.value}"
      },
      "name": "Shadow4",
      "attributes": {
        "category": "shadow",
        "type": "4"
      },
      "path": [
        "shadow",
        "4"
      ]
    },
    "5": {
      "value": "0 16px 32px 0 rgba(170, 170, 170, 0.5)",
      "filePath": "tokens/elevation/shadow.json",
      "isSource": true,
      "original": {
        "value": "0 16px 32px 0 {shadow.color.value}"
      },
      "name": "Shadow5",
      "attributes": {
        "category": "shadow",
        "type": "5"
      },
      "path": [
        "shadow",
        "5"
      ]
    },
    "none": {
      "value": "none",
      "filePath": "tokens/elevation/shadow.json",
      "isSource": true,
      "original": {
        "value": "none"
      },
      "name": "ShadowNone",
      "attributes": {
        "category": "shadow",
        "type": "none"
      },
      "path": [
        "shadow",
        "none"
      ]
    },
    "color": {
      "value": "rgba(170, 170, 170, 0.5)",
      "filePath": "tokens/elevation/shadow.json",
      "isSource": true,
      "original": {
        "value": "rgba(170, 170, 170, 0.5)"
      },
      "name": "ShadowColor",
      "attributes": {
        "category": "shadow",
        "type": "color"
      },
      "path": [
        "shadow",
        "color"
      ]
    }
  },
  "column": {
    "1": {
      "value": "repeat(1, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(1, 1fr)"
      },
      "name": "Column1",
      "attributes": {
        "category": "column",
        "type": "1"
      },
      "path": [
        "column",
        "1"
      ]
    },
    "2": {
      "value": "repeat(2, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(2, 1fr)"
      },
      "name": "Column2",
      "attributes": {
        "category": "column",
        "type": "2"
      },
      "path": [
        "column",
        "2"
      ]
    },
    "3": {
      "value": "repeat(3, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(3, 1fr)"
      },
      "name": "Column3",
      "attributes": {
        "category": "column",
        "type": "3"
      },
      "path": [
        "column",
        "3"
      ]
    },
    "4": {
      "value": "repeat(4, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(4, 1fr)"
      },
      "name": "Column4",
      "attributes": {
        "category": "column",
        "type": "4"
      },
      "path": [
        "column",
        "4"
      ]
    },
    "5": {
      "value": "repeat(5, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(5, 1fr)"
      },
      "name": "Column5",
      "attributes": {
        "category": "column",
        "type": "5"
      },
      "path": [
        "column",
        "5"
      ]
    },
    "6": {
      "value": "repeat(6, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(6, 1fr)"
      },
      "name": "Column6",
      "attributes": {
        "category": "column",
        "type": "6"
      },
      "path": [
        "column",
        "6"
      ]
    },
    "7": {
      "value": "repeat(7, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(7, 1fr)"
      },
      "name": "Column7",
      "attributes": {
        "category": "column",
        "type": "7"
      },
      "path": [
        "column",
        "7"
      ]
    },
    "8": {
      "value": "repeat(8, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(8, 1fr)"
      },
      "name": "Column8",
      "attributes": {
        "category": "column",
        "type": "8"
      },
      "path": [
        "column",
        "8"
      ]
    },
    "9": {
      "value": "repeat(9, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(9, 1fr)"
      },
      "name": "Column9",
      "attributes": {
        "category": "column",
        "type": "9"
      },
      "path": [
        "column",
        "9"
      ]
    },
    "10": {
      "value": "repeat(10, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(10, 1fr)"
      },
      "name": "Column10",
      "attributes": {
        "category": "column",
        "type": "10"
      },
      "path": [
        "column",
        "10"
      ]
    },
    "11": {
      "value": "repeat(11, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(11, 1fr)"
      },
      "name": "Column11",
      "attributes": {
        "category": "column",
        "type": "11"
      },
      "path": [
        "column",
        "11"
      ]
    },
    "12": {
      "value": "repeat(12, 1fr)",
      "filePath": "tokens/layout/column.json",
      "isSource": true,
      "original": {
        "value": "repeat(12, 1fr)"
      },
      "name": "Column12",
      "attributes": {
        "category": "column",
        "type": "12"
      },
      "path": [
        "column",
        "12"
      ]
    }
  },
  "gap": {
    "8": {
      "value": "8px",
      "filePath": "tokens/layout/gap.json",
      "isSource": true,
      "original": {
        "value": "8px"
      },
      "name": "Gap8",
      "attributes": {
        "category": "gap",
        "type": "8"
      },
      "path": [
        "gap",
        "8"
      ]
    },
    "16": {
      "value": "16px",
      "filePath": "tokens/layout/gap.json",
      "isSource": true,
      "original": {
        "value": "16px"
      },
      "name": "Gap16",
      "attributes": {
        "category": "gap",
        "type": "16"
      },
      "path": [
        "gap",
        "16"
      ]
    },
    "24": {
      "value": "24px",
      "filePath": "tokens/layout/gap.json",
      "isSource": true,
      "original": {
        "value": "24px"
      },
      "name": "Gap24",
      "attributes": {
        "category": "gap",
        "type": "24"
      },
      "path": [
        "gap",
        "24"
      ]
    },
    "32": {
      "value": "32px",
      "filePath": "tokens/layout/gap.json",
      "isSource": true,
      "original": {
        "value": "32px"
      },
      "name": "Gap32",
      "attributes": {
        "category": "gap",
        "type": "32"
      },
      "path": [
        "gap",
        "32"
      ]
    },
    "40": {
      "value": "40px",
      "filePath": "tokens/layout/gap.json",
      "isSource": true,
      "original": {
        "value": "40px"
      },
      "name": "Gap40",
      "attributes": {
        "category": "gap",
        "type": "40"
      },
      "path": [
        "gap",
        "40"
      ]
    },
    "48": {
      "value": "48px",
      "filePath": "tokens/layout/gap.json",
      "isSource": true,
      "original": {
        "value": "48px"
      },
      "name": "Gap48",
      "attributes": {
        "category": "gap",
        "type": "48"
      },
      "path": [
        "gap",
        "48"
      ]
    }
  },
  "spacing": {
    "0": {
      "value": "2px",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "2px"
      },
      "name": "Spacing0",
      "attributes": {
        "category": "spacing",
        "type": "0"
      },
      "path": [
        "spacing",
        "0"
      ]
    },
    "1": {
      "value": "4px",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "4px"
      },
      "name": "Spacing1",
      "attributes": {
        "category": "spacing",
        "type": "1"
      },
      "path": [
        "spacing",
        "1"
      ]
    },
    "2": {
      "value": "8px",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "8px"
      },
      "name": "Spacing2",
      "attributes": {
        "category": "spacing",
        "type": "2"
      },
      "path": [
        "spacing",
        "2"
      ]
    },
    "3": {
      "value": "12px",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "12px"
      },
      "name": "Spacing3",
      "attributes": {
        "category": "spacing",
        "type": "3"
      },
      "path": [
        "spacing",
        "3"
      ]
    },
    "4": {
      "value": "16px",
      "comment": "base size",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "16px",
        "comment": "base size"
      },
      "name": "Spacing4",
      "attributes": {
        "category": "spacing",
        "type": "4"
      },
      "path": [
        "spacing",
        "4"
      ]
    },
    "5": {
      "value": "20px",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "20px"
      },
      "name": "Spacing5",
      "attributes": {
        "category": "spacing",
        "type": "5"
      },
      "path": [
        "spacing",
        "5"
      ]
    },
    "6": {
      "value": "24px",
      "comment": "base size",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "24px",
        "comment": "base size"
      },
      "name": "Spacing6",
      "attributes": {
        "category": "spacing",
        "type": "6"
      },
      "path": [
        "spacing",
        "6"
      ]
    },
    "7": {
      "value": "32px",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "32px"
      },
      "name": "Spacing7",
      "attributes": {
        "category": "spacing",
        "type": "7"
      },
      "path": [
        "spacing",
        "7"
      ]
    },
    "8": {
      "value": "40px",
      "filePath": "tokens/layout/spacing.json",
      "isSource": true,
      "original": {
        "value": "40px"
      },
      "name": "Spacing8",
      "attributes": {
        "category": "spacing",
        "type": "8"
      },
      "path": [
        "spacing",
        "8"
      ]
    },
    "size": {
      "xxxs": {
        "value": "2px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.0.value}"
        },
        "name": "SpacingSizeXxxs",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "xxxs"
        },
        "path": [
          "spacing",
          "size",
          "xxxs"
        ]
      },
      "xxs": {
        "value": "4px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.1.value}"
        },
        "name": "SpacingSizeXxs",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "xxs"
        },
        "path": [
          "spacing",
          "size",
          "xxs"
        ]
      },
      "xs": {
        "value": "8px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.2.value}"
        },
        "name": "SpacingSizeXs",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "xs"
        },
        "path": [
          "spacing",
          "size",
          "xs"
        ]
      },
      "sm": {
        "value": "12px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.3.value}"
        },
        "name": "SpacingSizeSm",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "sm"
        },
        "path": [
          "spacing",
          "size",
          "sm"
        ]
      },
      "md": {
        "value": "16px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.4.value}"
        },
        "name": "SpacingSizeMd",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "md"
        },
        "path": [
          "spacing",
          "size",
          "md"
        ]
      },
      "lg": {
        "value": "20px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.5.value}"
        },
        "name": "SpacingSizeLg",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "lg"
        },
        "path": [
          "spacing",
          "size",
          "lg"
        ]
      },
      "xl": {
        "value": "24px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.6.value}"
        },
        "name": "SpacingSizeXl",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "xl"
        },
        "path": [
          "spacing",
          "size",
          "xl"
        ]
      },
      "xxl": {
        "value": "32px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.7.value}"
        },
        "name": "SpacingSizeXxl",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "xxl"
        },
        "path": [
          "spacing",
          "size",
          "xxl"
        ]
      },
      "xxxl": {
        "value": "40px",
        "filePath": "tokens/layout/spacing.json",
        "isSource": true,
        "original": {
          "value": "{spacing.8.value}"
        },
        "name": "SpacingSizeXxxl",
        "attributes": {
          "category": "spacing",
          "type": "size",
          "item": "xxxl"
        },
        "path": [
          "spacing",
          "size",
          "xxxl"
        ]
      }
    }
  },
  "z-index": {
    "0": {
      "value": "0",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "0"
      },
      "name": "ZIndex0",
      "attributes": {
        "category": "z-index",
        "type": "0"
      },
      "path": [
        "z-index",
        "0"
      ]
    },
    "10": {
      "value": "10",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "10"
      },
      "name": "ZIndex10",
      "attributes": {
        "category": "z-index",
        "type": "10"
      },
      "path": [
        "z-index",
        "10"
      ]
    },
    "20": {
      "value": "20",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "20"
      },
      "name": "ZIndex20",
      "attributes": {
        "category": "z-index",
        "type": "20"
      },
      "path": [
        "z-index",
        "20"
      ]
    },
    "30": {
      "value": "30",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "30"
      },
      "name": "ZIndex30",
      "attributes": {
        "category": "z-index",
        "type": "30"
      },
      "path": [
        "z-index",
        "30"
      ]
    },
    "40": {
      "value": "40",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "40"
      },
      "name": "ZIndex40",
      "attributes": {
        "category": "z-index",
        "type": "40"
      },
      "path": [
        "z-index",
        "40"
      ]
    },
    "50": {
      "value": "50",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "50"
      },
      "name": "ZIndex50",
      "attributes": {
        "category": "z-index",
        "type": "50"
      },
      "path": [
        "z-index",
        "50"
      ]
    },
    "100": {
      "value": "100",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "100"
      },
      "name": "ZIndex100",
      "attributes": {
        "category": "z-index",
        "type": "100"
      },
      "path": [
        "z-index",
        "100"
      ]
    },
    "200": {
      "value": "200",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "200"
      },
      "name": "ZIndex200",
      "attributes": {
        "category": "z-index",
        "type": "200"
      },
      "path": [
        "z-index",
        "200"
      ]
    },
    "300": {
      "value": "300",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "300"
      },
      "name": "ZIndex300",
      "attributes": {
        "category": "z-index",
        "type": "300"
      },
      "path": [
        "z-index",
        "300"
      ]
    },
    "400": {
      "value": "400",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "400"
      },
      "name": "ZIndex400",
      "attributes": {
        "category": "z-index",
        "type": "400"
      },
      "path": [
        "z-index",
        "400"
      ]
    },
    "500": {
      "value": "500",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "500"
      },
      "name": "ZIndex500",
      "attributes": {
        "category": "z-index",
        "type": "500"
      },
      "path": [
        "z-index",
        "500"
      ]
    },
    "1000": {
      "value": "1000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "1000"
      },
      "name": "ZIndex1000",
      "attributes": {
        "category": "z-index",
        "type": "1000"
      },
      "path": [
        "z-index",
        "1000"
      ]
    },
    "2000": {
      "value": "2000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "2000"
      },
      "name": "ZIndex2000",
      "attributes": {
        "category": "z-index",
        "type": "2000"
      },
      "path": [
        "z-index",
        "2000"
      ]
    },
    "3000": {
      "value": "3000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "3000"
      },
      "name": "ZIndex3000",
      "attributes": {
        "category": "z-index",
        "type": "3000"
      },
      "path": [
        "z-index",
        "3000"
      ]
    },
    "4000": {
      "value": "4000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "4000"
      },
      "name": "ZIndex4000",
      "attributes": {
        "category": "z-index",
        "type": "4000"
      },
      "path": [
        "z-index",
        "4000"
      ]
    },
    "5000": {
      "value": "5000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "5000"
      },
      "name": "ZIndex5000",
      "attributes": {
        "category": "z-index",
        "type": "5000"
      },
      "path": [
        "z-index",
        "5000"
      ]
    },
    "10000": {
      "value": "10000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "10000"
      },
      "name": "ZIndex10000",
      "attributes": {
        "category": "z-index",
        "type": "10000"
      },
      "path": [
        "z-index",
        "10000"
      ]
    },
    "20000": {
      "value": "20000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "20000"
      },
      "name": "ZIndex20000",
      "attributes": {
        "category": "z-index",
        "type": "20000"
      },
      "path": [
        "z-index",
        "20000"
      ]
    },
    "30000": {
      "value": "30000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "30000"
      },
      "name": "ZIndex30000",
      "attributes": {
        "category": "z-index",
        "type": "30000"
      },
      "path": [
        "z-index",
        "30000"
      ]
    },
    "40000": {
      "value": "40000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "40000"
      },
      "name": "ZIndex40000",
      "attributes": {
        "category": "z-index",
        "type": "40000"
      },
      "path": [
        "z-index",
        "40000"
      ]
    },
    "50000": {
      "value": "50000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "50000"
      },
      "name": "ZIndex50000",
      "attributes": {
        "category": "z-index",
        "type": "50000"
      },
      "path": [
        "z-index",
        "50000"
      ]
    },
    "tooltip": {
      "value": "50000",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "{z-index.50000.value}"
      },
      "name": "ZIndexTooltip",
      "attributes": {
        "category": "z-index",
        "type": "tooltip"
      },
      "path": [
        "z-index",
        "tooltip"
      ]
    },
    "menu": {
      "value": "100",
      "filePath": "tokens/layout/z-index.json",
      "isSource": true,
      "original": {
        "value": "{z-index.100.value}"
      },
      "name": "ZIndexMenu",
      "attributes": {
        "category": "z-index",
        "type": "menu"
      },
      "path": [
        "z-index",
        "menu"
      ]
    }
  },
  "math": {
    "pi": {
      "value": 3.141592653589793,
      "filePath": "tokens/math/math.json",
      "isSource": true,
      "original": {
        "value": 3.141592653589793
      },
      "name": "MathPi",
      "attributes": {
        "category": "math",
        "type": "pi"
      },
      "path": [
        "math",
        "pi"
      ]
    }
  },
  "size": {
    "base": {
      "0": {
        "value": "0px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "0px"
        },
        "name": "SizeBase0",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "0"
        },
        "path": [
          "size",
          "base",
          "0"
        ]
      },
      "10": {
        "value": "1px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "1px"
        },
        "name": "SizeBase10",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "10"
        },
        "path": [
          "size",
          "base",
          "10"
        ]
      },
      "25": {
        "value": "2px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "2px"
        },
        "name": "SizeBase25",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "25"
        },
        "path": [
          "size",
          "base",
          "25"
        ]
      },
      "40": {
        "value": "3px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "3px"
        },
        "name": "SizeBase40",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "40"
        },
        "path": [
          "size",
          "base",
          "40"
        ]
      },
      "50": {
        "value": "4px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "4px"
        },
        "name": "SizeBase50",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "50"
        },
        "path": [
          "size",
          "base",
          "50"
        ]
      },
      "65": {
        "value": "5px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "5px"
        },
        "name": "SizeBase65",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "65"
        },
        "path": [
          "size",
          "base",
          "65"
        ]
      },
      "75": {
        "value": "6px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "6px"
        },
        "name": "SizeBase75",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "75"
        },
        "path": [
          "size",
          "base",
          "75"
        ]
      },
      "85": {
        "value": "7px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "7px"
        },
        "name": "SizeBase85",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "85"
        },
        "path": [
          "size",
          "base",
          "85"
        ]
      },
      "100": {
        "value": "8px",
        "comment": "base size",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "8px",
          "comment": "base size"
        },
        "name": "SizeBase100",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "100"
        },
        "path": [
          "size",
          "base",
          "100"
        ]
      },
      "115": {
        "value": "9px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "9px"
        },
        "name": "SizeBase115",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "115"
        },
        "path": [
          "size",
          "base",
          "115"
        ]
      },
      "125": {
        "value": "10px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "10px"
        },
        "name": "SizeBase125",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "125"
        },
        "path": [
          "size",
          "base",
          "125"
        ]
      },
      "130": {
        "value": "11px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "11px"
        },
        "name": "SizeBase130",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "130"
        },
        "path": [
          "size",
          "base",
          "130"
        ]
      },
      "150": {
        "value": "12px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "12px"
        },
        "name": "SizeBase150",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "150"
        },
        "path": [
          "size",
          "base",
          "150"
        ]
      },
      "160": {
        "value": "13px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "13px"
        },
        "name": "SizeBase160",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "160"
        },
        "path": [
          "size",
          "base",
          "160"
        ]
      },
      "175": {
        "value": "14px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "14px"
        },
        "name": "SizeBase175",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "175"
        },
        "path": [
          "size",
          "base",
          "175"
        ]
      },
      "200": {
        "value": "16px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "16px"
        },
        "name": "SizeBase200",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "200"
        },
        "path": [
          "size",
          "base",
          "200"
        ]
      },
      "225": {
        "value": "18px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "18px"
        },
        "name": "SizeBase225",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "225"
        },
        "path": [
          "size",
          "base",
          "225"
        ]
      },
      "250": {
        "value": "20px",
        "filePath": "tokens/size/base.json",
        "isSource": true,
        "original": {
          "value": "20px"
        },
        "name": "SizeBase250",
        "attributes": {
          "category": "size",
          "type": "base",
          "item": "250"
        },
        "path": [
          "size",
          "base",
          "250"
        ]
      }
    },
    "border": {
      "width": {
        "small": {
          "value": 0.0625,
          "filePath": "tokens/size/border.json",
          "isSource": true,
          "original": {
            "value": 0.0625
          },
          "name": "SizeBorderWidthSmall",
          "attributes": {
            "category": "size",
            "type": "border",
            "item": "width",
            "subitem": "small"
          },
          "path": [
            "size",
            "border",
            "width",
            "small"
          ]
        },
        "medium": {
          "value": 0.125,
          "filePath": "tokens/size/border.json",
          "isSource": true,
          "original": {
            "value": 0.125
          },
          "name": "SizeBorderWidthMedium",
          "attributes": {
            "category": "size",
            "type": "border",
            "item": "width",
            "subitem": "medium"
          },
          "path": [
            "size",
            "border",
            "width",
            "medium"
          ]
        },
        "large": {
          "value": 0.25,
          "filePath": "tokens/size/border.json",
          "isSource": true,
          "original": {
            "value": 0.25
          },
          "name": "SizeBorderWidthLarge",
          "attributes": {
            "category": "size",
            "type": "border",
            "item": "width",
            "subitem": "large"
          },
          "path": [
            "size",
            "border",
            "width",
            "large"
          ]
        }
      },
      "radius": {
        "small": {
          "value": 0.25,
          "filePath": "tokens/size/border.json",
          "isSource": true,
          "original": {
            "value": 0.25
          },
          "name": "SizeBorderRadiusSmall",
          "attributes": {
            "category": "size",
            "type": "border",
            "item": "radius",
            "subitem": "small"
          },
          "path": [
            "size",
            "border",
            "radius",
            "small"
          ]
        },
        "medium": {
          "value": 1,
          "filePath": "tokens/size/border.json",
          "isSource": true,
          "original": {
            "value": 1
          },
          "name": "SizeBorderRadiusMedium",
          "attributes": {
            "category": "size",
            "type": "border",
            "item": "radius",
            "subitem": "medium"
          },
          "path": [
            "size",
            "border",
            "radius",
            "medium"
          ]
        },
        "large": {
          "value": 3,
          "filePath": "tokens/size/border.json",
          "isSource": true,
          "original": {
            "value": 3
          },
          "name": "SizeBorderRadiusLarge",
          "attributes": {
            "category": "size",
            "type": "border",
            "item": "radius",
            "subitem": "large"
          },
          "path": [
            "size",
            "border",
            "radius",
            "large"
          ]
        }
      }
    }
  },
  "font": {
    "size": {
      "50": {
        "value": "11px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "11px"
        },
        "name": "FontSize50",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "50"
        },
        "path": [
          "font",
          "size",
          "50"
        ]
      },
      "75": {
        "value": "12px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "12px"
        },
        "name": "FontSize75",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "75"
        },
        "path": [
          "font",
          "size",
          "75"
        ]
      },
      "100": {
        "value": "14px",
        "comment": "base size",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "14px",
          "comment": "base size"
        },
        "name": "FontSize100",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "100"
        },
        "path": [
          "font",
          "size",
          "100"
        ]
      },
      "200": {
        "value": "16px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "16px"
        },
        "name": "FontSize200",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "200"
        },
        "path": [
          "font",
          "size",
          "200"
        ]
      },
      "300": {
        "value": "18px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "18px"
        },
        "name": "FontSize300",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "300"
        },
        "path": [
          "font",
          "size",
          "300"
        ]
      },
      "400": {
        "value": "20px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "20px"
        },
        "name": "FontSize400",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "400"
        },
        "path": [
          "font",
          "size",
          "400"
        ]
      },
      "500": {
        "value": "22px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "22px"
        },
        "name": "FontSize500",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "500"
        },
        "path": [
          "font",
          "size",
          "500"
        ]
      },
      "600": {
        "value": "25px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "25px"
        },
        "name": "FontSize600",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "600"
        },
        "path": [
          "font",
          "size",
          "600"
        ]
      },
      "700": {
        "value": "28px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "28px"
        },
        "name": "FontSize700",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "700"
        },
        "path": [
          "font",
          "size",
          "700"
        ]
      },
      "800": {
        "value": "32px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "32px"
        },
        "name": "FontSize800",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "800"
        },
        "path": [
          "font",
          "size",
          "800"
        ]
      },
      "900": {
        "value": "36px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "36px"
        },
        "name": "FontSize900",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "900"
        },
        "path": [
          "font",
          "size",
          "900"
        ]
      },
      "1000": {
        "value": "40px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "40px"
        },
        "name": "FontSize1000",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "1000"
        },
        "path": [
          "font",
          "size",
          "1000"
        ]
      },
      "1100": {
        "value": "45px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "45px"
        },
        "name": "FontSize1100",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "1100"
        },
        "path": [
          "font",
          "size",
          "1100"
        ]
      },
      "1200": {
        "value": "50px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "50px"
        },
        "name": "FontSize1200",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "1200"
        },
        "path": [
          "font",
          "size",
          "1200"
        ]
      },
      "1300": {
        "value": "60px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "60px"
        },
        "name": "FontSize1300",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "1300"
        },
        "path": [
          "font",
          "size",
          "1300"
        ]
      },
      "h1": {
        "value": "32px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.800.value}"
        },
        "name": "FontSizeH1",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "h1"
        },
        "path": [
          "font",
          "size",
          "h1"
        ]
      },
      "h2": {
        "value": "28px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.700.value}"
        },
        "name": "FontSizeH2",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "h2"
        },
        "path": [
          "font",
          "size",
          "h2"
        ]
      },
      "h3": {
        "value": "25px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.600.value}"
        },
        "name": "FontSizeH3",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "h3"
        },
        "path": [
          "font",
          "size",
          "h3"
        ]
      },
      "h4": {
        "value": "22px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.500.value}"
        },
        "name": "FontSizeH4",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "h4"
        },
        "path": [
          "font",
          "size",
          "h4"
        ]
      },
      "h5": {
        "value": "20px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.400.value}"
        },
        "name": "FontSizeH5",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "h5"
        },
        "path": [
          "font",
          "size",
          "h5"
        ]
      },
      "h6": {
        "value": "18px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.300.value}"
        },
        "name": "FontSizeH6",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "h6"
        },
        "path": [
          "font",
          "size",
          "h6"
        ]
      },
      "small": {
        "value": "11px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.50.value}"
        },
        "name": "FontSizeSmall",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "small"
        },
        "path": [
          "font",
          "size",
          "small"
        ]
      },
      "medium": {
        "value": "14px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.100.value}"
        },
        "name": "FontSizeMedium",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "medium"
        },
        "path": [
          "font",
          "size",
          "medium"
        ]
      },
      "large": {
        "value": "18px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.300.value}"
        },
        "name": "FontSizeLarge",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "large"
        },
        "path": [
          "font",
          "size",
          "large"
        ]
      },
      "extra-large": {
        "value": "22px",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "{font.size.500.value}"
        },
        "name": "FontSizeExtraLarge",
        "attributes": {
          "category": "font",
          "type": "size",
          "item": "extra-large"
        },
        "path": [
          "font",
          "size",
          "extra-large"
        ]
      }
    },
    "weight": {
      "thin": {
        "value": "100",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "100"
        },
        "name": "FontWeightThin",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "thin"
        },
        "path": [
          "font",
          "weight",
          "thin"
        ]
      },
      "light": {
        "value": "300",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "300"
        },
        "name": "FontWeightLight",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "light"
        },
        "path": [
          "font",
          "weight",
          "light"
        ]
      },
      "regular": {
        "value": "400",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "400"
        },
        "name": "FontWeightRegular",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "regular"
        },
        "path": [
          "font",
          "weight",
          "regular"
        ]
      },
      "medium": {
        "value": "500",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "500"
        },
        "name": "FontWeightMedium",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "medium"
        },
        "path": [
          "font",
          "weight",
          "medium"
        ]
      },
      "semibold": {
        "value": "600",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "600"
        },
        "name": "FontWeightSemibold",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "semibold"
        },
        "path": [
          "font",
          "weight",
          "semibold"
        ]
      },
      "bold": {
        "value": "700",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "700"
        },
        "name": "FontWeightBold",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "bold"
        },
        "path": [
          "font",
          "weight",
          "bold"
        ]
      },
      "extrabold": {
        "value": "800",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "800"
        },
        "name": "FontWeightExtrabold",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "extrabold"
        },
        "path": [
          "font",
          "weight",
          "extrabold"
        ]
      },
      "black": {
        "value": "900",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "900"
        },
        "name": "FontWeightBlack",
        "attributes": {
          "category": "font",
          "type": "weight",
          "item": "black"
        },
        "path": [
          "font",
          "weight",
          "black"
        ]
      }
    }
  },
  "padding": {
    "size": {
      "xs": {
        "value": "8px",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": "{spacing.size.xs.value}"
        },
        "name": "PaddingSizeXs",
        "attributes": {
          "category": "padding",
          "type": "size",
          "item": "xs"
        },
        "path": [
          "padding",
          "size",
          "xs"
        ]
      },
      "small": {
        "value": "12px",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": "{spacing.size.sm.value}"
        },
        "name": "PaddingSizeSmall",
        "attributes": {
          "category": "padding",
          "type": "size",
          "item": "small"
        },
        "path": [
          "padding",
          "size",
          "small"
        ]
      },
      "medium": {
        "value": "16px",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": "{spacing.size.md.value}"
        },
        "name": "PaddingSizeMedium",
        "attributes": {
          "category": "padding",
          "type": "size",
          "item": "medium"
        },
        "path": [
          "padding",
          "size",
          "medium"
        ]
      },
      "large": {
        "value": "20px",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": "{spacing.size.lg.value}"
        },
        "name": "PaddingSizeLarge",
        "attributes": {
          "category": "padding",
          "type": "size",
          "item": "large"
        },
        "path": [
          "padding",
          "size",
          "large"
        ]
      },
      "xl": {
        "value": "24px",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": "{spacing.size.xl.value}"
        },
        "name": "PaddingSizeXl",
        "attributes": {
          "category": "padding",
          "type": "size",
          "item": "xl"
        },
        "path": [
          "padding",
          "size",
          "xl"
        ]
      },
      "xxl": {
        "value": "32px",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": "{spacing.size.xxl.value}"
        },
        "name": "PaddingSizeXxl",
        "attributes": {
          "category": "padding",
          "type": "size",
          "item": "xxl"
        },
        "path": [
          "padding",
          "size",
          "xxl"
        ]
      }
    }
  },
  "time": {
    "duration": {
      "100": {
        "value": "130ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "130ms"
        },
        "name": "TimeDuration100",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "100"
        },
        "path": [
          "time",
          "duration",
          "100"
        ]
      },
      "200": {
        "value": "160ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "160ms"
        },
        "name": "TimeDuration200",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "200"
        },
        "path": [
          "time",
          "duration",
          "200"
        ]
      },
      "300": {
        "value": "190ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "190ms"
        },
        "name": "TimeDuration300",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "300"
        },
        "path": [
          "time",
          "duration",
          "300"
        ]
      },
      "400": {
        "value": "220ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "220ms"
        },
        "name": "TimeDuration400",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "400"
        },
        "path": [
          "time",
          "duration",
          "400"
        ]
      },
      "500": {
        "value": "250ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "250ms"
        },
        "name": "TimeDuration500",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "500"
        },
        "path": [
          "time",
          "duration",
          "500"
        ]
      },
      "600": {
        "value": "300ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "300ms"
        },
        "name": "TimeDuration600",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "600"
        },
        "path": [
          "time",
          "duration",
          "600"
        ]
      },
      "700": {
        "value": "350ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "350ms"
        },
        "name": "TimeDuration700",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "700"
        },
        "path": [
          "time",
          "duration",
          "700"
        ]
      },
      "800": {
        "value": "400ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "400ms"
        },
        "name": "TimeDuration800",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "800"
        },
        "path": [
          "time",
          "duration",
          "800"
        ]
      },
      "900": {
        "value": "450ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "450ms"
        },
        "name": "TimeDuration900",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "900"
        },
        "path": [
          "time",
          "duration",
          "900"
        ]
      },
      "1000": {
        "value": "500ms",
        "filePath": "tokens/time/duration.json",
        "isSource": true,
        "original": {
          "value": "500ms"
        },
        "name": "TimeDuration1000",
        "attributes": {
          "category": "time",
          "type": "duration",
          "item": "1000"
        },
        "path": [
          "time",
          "duration",
          "1000"
        ]
      }
    }
  }
};
}))
