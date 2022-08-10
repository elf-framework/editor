/**
 * Do not edit directly
 * Generated on Wed, 10 Aug 2022 12:21:57 GMT
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
          "value": "{color.core.white.value}",
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
        "value": "#218bff",
        "comment": "Base color for the primary color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.4.value}",
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
        "value": "#8c959f",
        "comment": "Base color for the secondary color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.core.gray.4.value}",
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
        "value": "#fa4549",
        "comment": "Base color for the danger color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.core.red.4.value}",
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
        "value": "#eac54f",
        "comment": "Base color for the warning color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.core.yellow.2.value}",
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
        "value": "#2da44e",
        "comment": "Base color for the success color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.core.green.4.value}",
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
        "value": "#80ccff",
        "comment": "Base color for the info color",
        "filePath": "tokens/color/background.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.2.value}",
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
            "value": "{color.core.white.value}",
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
          "value": "#54aeff",
          "comment": "Weak color for the primary color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.core.blue.3.value}",
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
          "value": "#afb8c1",
          "comment": "Weak color for the secondary color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.core.gray.3.value}",
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
          "value": "#ff8182",
          "comment": "Weak color for the danger color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.core.red.3.value}",
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
          "value": "#fae17d",
          "comment": "Weak color for the warning color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.core.yellow.1.value}",
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
          "value": "#4ac26b",
          "comment": "Weak color for the success color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.core.green.3.value}",
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
          "value": "#b6e3ff",
          "comment": "Weak color for the info color",
          "filePath": "tokens/color/background.json",
          "isSource": true,
          "original": {
            "value": "{color.core.blue.1.value}",
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
        "value": "#1b1f24",
        "comment": "Border color that will match the current color scheme",
        "filePath": "tokens/color/border.json",
        "isSource": true,
        "original": {
          "value": "{color.core.black.value}",
          "comment": "Border color that will match the current color scheme"
        },
        "name": "ColorBorderDefault",
        "attributes": {
          "category": "color",
          "type": "border",
          "item": "default"
        },
        "path": [
          "color",
          "border",
          "default"
        ]
      },
      "primary": {
        "value": "#218bff",
        "comment": "Base color for the primary color",
        "filePath": "tokens/color/border.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.4.value}",
          "comment": "Base color for the primary color"
        },
        "name": "ColorBorderPrimary",
        "attributes": {
          "category": "color",
          "type": "border",
          "item": "primary"
        },
        "path": [
          "color",
          "border",
          "primary"
        ]
      },
      "secondary": {
        "value": "#8c959f",
        "comment": "Base color for the secondary color",
        "filePath": "tokens/color/border.json",
        "isSource": true,
        "original": {
          "value": "{color.core.gray.4.value}",
          "comment": "Base color for the secondary color"
        },
        "name": "ColorBorderSecondary",
        "attributes": {
          "category": "color",
          "type": "border",
          "item": "secondary"
        },
        "path": [
          "color",
          "border",
          "secondary"
        ]
      },
      "danger": {
        "value": "#fa4549",
        "comment": "Base color for the danger color",
        "filePath": "tokens/color/border.json",
        "isSource": true,
        "original": {
          "value": "{color.core.red.4.value}",
          "comment": "Base color for the danger color"
        },
        "name": "ColorBorderDanger",
        "attributes": {
          "category": "color",
          "type": "border",
          "item": "danger"
        },
        "path": [
          "color",
          "border",
          "danger"
        ]
      },
      "warning": {
        "value": "#bf8700",
        "comment": "Base color for the warning color",
        "filePath": "tokens/color/border.json",
        "isSource": true,
        "original": {
          "value": "{color.core.yellow.4.value}",
          "comment": "Base color for the warning color"
        },
        "name": "ColorBorderWarning",
        "attributes": {
          "category": "color",
          "type": "border",
          "item": "warning"
        },
        "path": [
          "color",
          "border",
          "warning"
        ]
      },
      "success": {
        "value": "#2da44e",
        "comment": "Base color for the success color",
        "filePath": "tokens/color/border.json",
        "isSource": true,
        "original": {
          "value": "{color.core.green.4.value}",
          "comment": "Base color for the success color"
        },
        "name": "ColorBorderSuccess",
        "attributes": {
          "category": "color",
          "type": "border",
          "item": "success"
        },
        "path": [
          "color",
          "border",
          "success"
        ]
      },
      "info": {
        "value": "#80ccff",
        "comment": "Base color for the info color",
        "filePath": "tokens/color/border.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.2.value}",
          "comment": "Base color for the info color"
        },
        "name": "ColorBorderInfo",
        "attributes": {
          "category": "color",
          "type": "border",
          "item": "info"
        },
        "path": [
          "color",
          "border",
          "info"
        ]
      }
    },
    "brand": {
      "primary": {
        "value": "#218bff",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.4.value}"
        },
        "name": "ColorBrandPrimary",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "primary"
        },
        "path": [
          "color",
          "brand",
          "primary"
        ]
      },
      "secondary": {
        "value": "#8c959f",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.core.gray.4.value}"
        },
        "name": "ColorBrandSecondary",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "secondary"
        },
        "path": [
          "color",
          "brand",
          "secondary"
        ]
      },
      "danger": {
        "value": "#fa4549",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.core.red.4.value}"
        },
        "name": "ColorBrandDanger",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "danger"
        },
        "path": [
          "color",
          "brand",
          "danger"
        ]
      },
      "warning": {
        "value": "#bf8700",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.core.yellow.4.value}"
        },
        "name": "ColorBrandWarning",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "warning"
        },
        "path": [
          "color",
          "brand",
          "warning"
        ]
      },
      "success": {
        "value": "#2da44e",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.core.green.4.value}"
        },
        "name": "ColorBrandSuccess",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "success"
        },
        "path": [
          "color",
          "brand",
          "success"
        ]
      },
      "info": {
        "value": "#80ccff",
        "filePath": "tokens/color/brand.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.2.value}"
        },
        "name": "ColorBrandInfo",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "info"
        },
        "path": [
          "color",
          "brand",
          "info"
        ]
      }
    },
    "core": {
      "red": {
        "0": {
          "value": "#ffebe9",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ffebe9"
          },
          "name": "ColorCoreRed0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "red",
            "0"
          ]
        },
        "1": {
          "value": "#ffcecb",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ffcecb"
          },
          "name": "ColorCoreRed1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "red",
            "1"
          ]
        },
        "2": {
          "value": "#ffaba8",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ffaba8"
          },
          "name": "ColorCoreRed2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "red",
            "2"
          ]
        },
        "3": {
          "value": "#ff8182",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ff8182"
          },
          "name": "ColorCoreRed3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "red",
            "3"
          ]
        },
        "4": {
          "value": "#fa4549",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#fa4549"
          },
          "name": "ColorCoreRed4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "red",
            "4"
          ]
        },
        "5": {
          "value": "#cf222e",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#cf222e"
          },
          "name": "ColorCoreRed5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "red",
            "5"
          ]
        },
        "6": {
          "value": "#a40e26",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#a40e26"
          },
          "name": "ColorCoreRed6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "red",
            "6"
          ]
        },
        "7": {
          "value": "#82071e",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#82071e"
          },
          "name": "ColorCoreRed7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "red",
            "7"
          ]
        },
        "8": {
          "value": "#660018",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#660018"
          },
          "name": "ColorCoreRed8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "red",
            "8"
          ]
        },
        "9": {
          "value": "#4c0014",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#4c0014"
          },
          "name": "ColorCoreRed9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "red",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
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
          "name": "ColorCoreOrange9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "orange",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "orange",
            "9"
          ]
        }
      },
      "yellow": {
        "0": {
          "value": "#fff8c5",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#fff8c5"
          },
          "name": "ColorCoreYellow0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "0"
          ]
        },
        "1": {
          "value": "#fae17d",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#fae17d"
          },
          "name": "ColorCoreYellow1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "1"
          ]
        },
        "2": {
          "value": "#eac54f",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#eac54f"
          },
          "name": "ColorCoreYellow2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "2"
          ]
        },
        "3": {
          "value": "#d4a72c",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#d4a72c"
          },
          "name": "ColorCoreYellow3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "3"
          ]
        },
        "4": {
          "value": "#bf8700",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#bf8700"
          },
          "name": "ColorCoreYellow4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "4"
          ]
        },
        "5": {
          "value": "#9a6700",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#9a6700"
          },
          "name": "ColorCoreYellow5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "5"
          ]
        },
        "6": {
          "value": "#7d4e00",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#7d4e00"
          },
          "name": "ColorCoreYellow6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "6"
          ]
        },
        "7": {
          "value": "#633c01",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#633c01"
          },
          "name": "ColorCoreYellow7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "7"
          ]
        },
        "8": {
          "value": "#4d2d00",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#4d2d00"
          },
          "name": "ColorCoreYellow8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "8"
          ]
        },
        "9": {
          "value": "#3b2300",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#3b2300"
          },
          "name": "ColorCoreYellow9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "yellow",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "yellow",
            "9"
          ]
        }
      },
      "green": {
        "0": {
          "value": "#dafbe1",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#dafbe1"
          },
          "name": "ColorCoreGreen0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "green",
            "0"
          ]
        },
        "1": {
          "value": "#aceebb",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#aceebb"
          },
          "name": "ColorCoreGreen1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "green",
            "1"
          ]
        },
        "2": {
          "value": "#6fdd8b",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#6fdd8b"
          },
          "name": "ColorCoreGreen2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "green",
            "2"
          ]
        },
        "3": {
          "value": "#4ac26b",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#4ac26b"
          },
          "name": "ColorCoreGreen3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "green",
            "3"
          ]
        },
        "4": {
          "value": "#2da44e",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#2da44e"
          },
          "name": "ColorCoreGreen4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "green",
            "4"
          ]
        },
        "5": {
          "value": "#1a7f37",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#1a7f37"
          },
          "name": "ColorCoreGreen5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "green",
            "5"
          ]
        },
        "6": {
          "value": "#116329",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#116329"
          },
          "name": "ColorCoreGreen6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "green",
            "6"
          ]
        },
        "7": {
          "value": "#044f1e",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#044f1e"
          },
          "name": "ColorCoreGreen7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "green",
            "7"
          ]
        },
        "8": {
          "value": "#003d16",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#003d16"
          },
          "name": "ColorCoreGreen8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "green",
            "8"
          ]
        },
        "9": {
          "value": "#002d11",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#002d11"
          },
          "name": "ColorCoreGreen9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "green",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "green",
            "9"
          ]
        }
      },
      "blue": {
        "0": {
          "value": "#ddf4ff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ddf4ff"
          },
          "name": "ColorCoreBlue0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "blue",
            "0"
          ]
        },
        "1": {
          "value": "#b6e3ff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#b6e3ff"
          },
          "name": "ColorCoreBlue1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "blue",
            "1"
          ]
        },
        "2": {
          "value": "#80ccff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#80ccff"
          },
          "name": "ColorCoreBlue2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "blue",
            "2"
          ]
        },
        "3": {
          "value": "#54aeff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#54aeff"
          },
          "name": "ColorCoreBlue3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "blue",
            "3"
          ]
        },
        "4": {
          "value": "#218bff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#218bff"
          },
          "name": "ColorCoreBlue4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "blue",
            "4"
          ]
        },
        "5": {
          "value": "#0969da",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#0969da"
          },
          "name": "ColorCoreBlue5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "blue",
            "5"
          ]
        },
        "6": {
          "value": "#0550ae",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#0550ae"
          },
          "name": "ColorCoreBlue6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "blue",
            "6"
          ]
        },
        "7": {
          "value": "#033d8b",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#033d8b"
          },
          "name": "ColorCoreBlue7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "blue",
            "7"
          ]
        },
        "8": {
          "value": "#0a3069",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#0a3069"
          },
          "name": "ColorCoreBlue8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "blue",
            "8"
          ]
        },
        "9": {
          "value": "#002155",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#002155"
          },
          "name": "ColorCoreBlue9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "blue",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "blue",
            "9"
          ]
        }
      },
      "purple": {
        "0": {
          "value": "#fbefff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#fbefff"
          },
          "name": "ColorCorePurple0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "purple",
            "0"
          ]
        },
        "1": {
          "value": "#ecd8ff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ecd8ff"
          },
          "name": "ColorCorePurple1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "purple",
            "1"
          ]
        },
        "2": {
          "value": "#d8b9ff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#d8b9ff"
          },
          "name": "ColorCorePurple2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "purple",
            "2"
          ]
        },
        "3": {
          "value": "#c297ff",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#c297ff"
          },
          "name": "ColorCorePurple3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "purple",
            "3"
          ]
        },
        "4": {
          "value": "#a475f9",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#a475f9"
          },
          "name": "ColorCorePurple4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "purple",
            "4"
          ]
        },
        "5": {
          "value": "#8250df",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#8250df"
          },
          "name": "ColorCorePurple5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "purple",
            "5"
          ]
        },
        "6": {
          "value": "#6639ba",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#6639ba"
          },
          "name": "ColorCorePurple6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "purple",
            "6"
          ]
        },
        "7": {
          "value": "#512a97",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#512a97"
          },
          "name": "ColorCorePurple7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "purple",
            "7"
          ]
        },
        "8": {
          "value": "#3e1f79",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#3e1f79"
          },
          "name": "ColorCorePurple8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "purple",
            "8"
          ]
        },
        "9": {
          "value": "#2e1461",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#2e1461"
          },
          "name": "ColorCorePurple9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "purple",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "purple",
            "9"
          ]
        }
      },
      "pink": {
        "0": {
          "value": "#ffeff7",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ffeff7"
          },
          "name": "ColorCorePink0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "pink",
            "0"
          ]
        },
        "1": {
          "value": "#ffd3eb",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ffd3eb"
          },
          "name": "ColorCorePink1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "pink",
            "1"
          ]
        },
        "2": {
          "value": "#ffadda",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ffadda"
          },
          "name": "ColorCorePink2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "pink",
            "2"
          ]
        },
        "3": {
          "value": "#ff80c8",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#ff80c8"
          },
          "name": "ColorCorePink3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "pink",
            "3"
          ]
        },
        "4": {
          "value": "#e85aad",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#e85aad"
          },
          "name": "ColorCorePink4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "pink",
            "4"
          ]
        },
        "5": {
          "value": "#bf3989",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#bf3989"
          },
          "name": "ColorCorePink5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "pink",
            "5"
          ]
        },
        "6": {
          "value": "#99286e",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#99286e"
          },
          "name": "ColorCorePink6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "pink",
            "6"
          ]
        },
        "7": {
          "value": "#772057",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#772057"
          },
          "name": "ColorCorePink7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "pink",
            "7"
          ]
        },
        "8": {
          "value": "#611347",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#611347"
          },
          "name": "ColorCorePink8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "pink",
            "8"
          ]
        },
        "9": {
          "value": "#4d0336",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#4d0336"
          },
          "name": "ColorCorePink9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "pink",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "pink",
            "9"
          ]
        }
      },
      "gray": {
        "0": {
          "value": "#f6f8fa",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#f6f8fa"
          },
          "name": "ColorCoreGray0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "gray",
            "0"
          ]
        },
        "1": {
          "value": "#eaeef2",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#eaeef2"
          },
          "name": "ColorCoreGray1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "gray",
            "1"
          ]
        },
        "2": {
          "value": "#d0d7de",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#d0d7de"
          },
          "name": "ColorCoreGray2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "gray",
            "2"
          ]
        },
        "3": {
          "value": "#afb8c1",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#afb8c1"
          },
          "name": "ColorCoreGray3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "gray",
            "3"
          ]
        },
        "4": {
          "value": "#8c959f",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#8c959f"
          },
          "name": "ColorCoreGray4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "gray",
            "4"
          ]
        },
        "5": {
          "value": "#6e7781",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#6e7781"
          },
          "name": "ColorCoreGray5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "gray",
            "5"
          ]
        },
        "6": {
          "value": "#57606a",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#57606a"
          },
          "name": "ColorCoreGray6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "gray",
            "6"
          ]
        },
        "7": {
          "value": "#424a53",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#424a53"
          },
          "name": "ColorCoreGray7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "gray",
            "7"
          ]
        },
        "8": {
          "value": "#32383f",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#32383f"
          },
          "name": "ColorCoreGray8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "gray",
            "8"
          ]
        },
        "9": {
          "value": "#24292f",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#24292f"
          },
          "name": "ColorCoreGray9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "gray",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "gray",
            "9"
          ]
        }
      },
      "newtral": {
        "0": {
          "value": "#fafafa",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#fafafa"
          },
          "name": "ColorCoreNewtral0",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "0"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "0"
          ]
        },
        "1": {
          "value": "#f5f5f5",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#f5f5f5"
          },
          "name": "ColorCoreNewtral1",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "1"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "1"
          ]
        },
        "2": {
          "value": "#f0f0f0",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#f0f0f0"
          },
          "name": "ColorCoreNewtral2",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "2"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "2"
          ]
        },
        "3": {
          "value": "#e6e6e6",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#e6e6e6"
          },
          "name": "ColorCoreNewtral3",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "3"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "3"
          ]
        },
        "4": {
          "value": "#cccccc",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#cccccc"
          },
          "name": "ColorCoreNewtral4",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "4"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "4"
          ]
        },
        "5": {
          "value": "#b3b3b3",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#b3b3b3"
          },
          "name": "ColorCoreNewtral5",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "5"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "5"
          ]
        },
        "6": {
          "value": "#999999",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#999999"
          },
          "name": "ColorCoreNewtral6",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "6"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "6"
          ]
        },
        "7": {
          "value": "#7f7f7f",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#7f7f7f"
          },
          "name": "ColorCoreNewtral7",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "7"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "7"
          ]
        },
        "8": {
          "value": "#666666",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#666666"
          },
          "name": "ColorCoreNewtral8",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "8"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "8"
          ]
        },
        "9": {
          "value": "#4d4d4d",
          "filePath": "tokens/color/core.json",
          "isSource": true,
          "original": {
            "value": "#4d4d4d"
          },
          "name": "ColorCoreNewtral9",
          "attributes": {
            "category": "color",
            "type": "core",
            "item": "newtral",
            "subitem": "9"
          },
          "path": [
            "color",
            "core",
            "newtral",
            "9"
          ]
        }
      },
      "black": {
        "value": "#1b1f24",
        "filePath": "tokens/color/core.json",
        "isSource": true,
        "original": {
          "value": "#1b1f24"
        },
        "name": "ColorCoreBlack",
        "attributes": {
          "category": "color",
          "type": "core",
          "item": "black"
        },
        "path": [
          "color",
          "core",
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
        "name": "ColorCoreWhite",
        "attributes": {
          "category": "color",
          "type": "core",
          "item": "white"
        },
        "path": [
          "color",
          "core",
          "white"
        ]
      }
    },
    "text": {
      "default": {
        "value": "#1b1f24",
        "comment": "Default text color",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.black.value}",
          "comment": "Default text color"
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
        "value": "#218bff",
        "comment": "Text color to indicate primary",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.4.value}",
          "comment": "Text color to indicate primary"
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
        "value": "#8c959f",
        "comment": "Text color to indicate secondary",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.gray.4.value}",
          "comment": "Text color to indicate secondary"
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
      "danger": {
        "value": "#fa4549",
        "comment": "Text color to indicate danger",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.red.4.value}",
          "comment": "Text color to indicate danger"
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
        "value": "#bf8700",
        "comment": "Text color to indicate warning",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.yellow.4.value}",
          "comment": "Text color to indicate warning"
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
      "success": {
        "value": "#2da44e",
        "comment": "Text color to indicate success",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.green.4.value}",
          "comment": "Text color to indicate success"
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
      "info": {
        "value": "#80ccff",
        "comment": "Text color to indicate info",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.2.value}",
          "comment": "Text color to indicate info"
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
      "inverse": {
        "value": "#ffffff",
        "comment": "Text color to indicate inverse",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.white.value}",
          "comment": "Text color to indicate inverse"
        },
        "name": "ColorTextInverse",
        "attributes": {
          "category": "color",
          "type": "text",
          "item": "inverse"
        },
        "path": [
          "color",
          "text",
          "inverse"
        ]
      },
      "link": {
        "value": "#218bff",
        "comment": "Text color to indicate link",
        "filePath": "tokens/color/text.json",
        "isSource": true,
        "original": {
          "value": "{color.core.blue.4.value}",
          "comment": "Text color to indicate link"
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
      }
    }
  },
  "component": {
    "alert": {
      "color": {
        "title": {
          "default": {
            "value": "#24292f",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.9.value}"
            },
            "name": "ComponentAlertColorTitleDefault",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "title",
              "state": "default"
            },
            "path": [
              "component",
              "alert",
              "color",
              "title",
              "default"
            ]
          },
          "primary": {
            "value": "#0a3069",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.blue.8.value}"
            },
            "name": "ComponentAlertColorTitlePrimary",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "title",
              "state": "primary"
            },
            "path": [
              "component",
              "alert",
              "color",
              "title",
              "primary"
            ]
          },
          "secondary": {
            "value": "#32383f",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.8.value}"
            },
            "name": "ComponentAlertColorTitleSecondary",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "title",
              "state": "secondary"
            },
            "path": [
              "component",
              "alert",
              "color",
              "title",
              "secondary"
            ]
          },
          "danger": {
            "value": "#82071e",
            "comment": "Base color for the danger color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.red.7.value}",
              "comment": "Base color for the danger color"
            },
            "name": "ComponentAlertColorTitleDanger",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "title",
              "state": "danger"
            },
            "path": [
              "component",
              "alert",
              "color",
              "title",
              "danger"
            ]
          },
          "warning": {
            "value": "#9a6700",
            "comment": "Base color for the warning color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.yellow.5.value}",
              "comment": "Base color for the warning color"
            },
            "name": "ComponentAlertColorTitleWarning",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "title",
              "state": "warning"
            },
            "path": [
              "component",
              "alert",
              "color",
              "title",
              "warning"
            ]
          },
          "success": {
            "value": "#044f1e",
            "comment": "Base color for the success color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.green.7.value}",
              "comment": "Base color for the success color"
            },
            "name": "ComponentAlertColorTitleSuccess",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "title",
              "state": "success"
            },
            "path": [
              "component",
              "alert",
              "color",
              "title",
              "success"
            ]
          },
          "info": {
            "value": "#0969da",
            "comment": "Base color for the info color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.blue.5.value}",
              "comment": "Base color for the info color"
            },
            "name": "ComponentAlertColorTitleInfo",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "title",
              "state": "info"
            },
            "path": [
              "component",
              "alert",
              "color",
              "title",
              "info"
            ]
          }
        },
        "content": {
          "default": {
            "value": "#57606a",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.6.value}"
            },
            "name": "ComponentAlertColorContentDefault",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "content",
              "state": "default"
            },
            "path": [
              "component",
              "alert",
              "color",
              "content",
              "default"
            ]
          },
          "primary": {
            "value": "#b6e3ff",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.blue.1.value}"
            },
            "name": "ComponentAlertColorContentPrimary",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "content",
              "state": "primary"
            },
            "path": [
              "component",
              "alert",
              "color",
              "content",
              "primary"
            ]
          },
          "secondary": {
            "value": "#eaeef2",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.1.value}"
            },
            "name": "ComponentAlertColorContentSecondary",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "content",
              "state": "secondary"
            },
            "path": [
              "component",
              "alert",
              "color",
              "content",
              "secondary"
            ]
          },
          "danger": {
            "value": "#ffcecb",
            "comment": "Base color for the danger color",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.red.1.value}",
              "comment": "Base color for the danger color"
            },
            "name": "ComponentAlertColorContentDanger",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "content",
              "state": "danger"
            },
            "path": [
              "component",
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
              "value": "{color.core.white.value}",
              "comment": "Base color for the warning color"
            },
            "name": "ComponentAlertColorContentWarning",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "content",
              "state": "warning"
            },
            "path": [
              "component",
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
              "value": "{color.core.white.value}",
              "comment": "Base color for the success color"
            },
            "name": "ComponentAlertColorContentSuccess",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "content",
              "state": "success"
            },
            "path": [
              "component",
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
              "value": "{color.core.white.value}",
              "comment": "Base color for the info color"
            },
            "name": "ComponentAlertColorContentInfo",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "content",
              "state": "info"
            },
            "path": [
              "component",
              "alert",
              "color",
              "content",
              "info"
            ]
          }
        },
        "background": {
          "default": {
            "value": "#eaeef2",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.1.value}"
            },
            "name": "ComponentAlertColorBackgroundDefault",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "background",
              "state": "default"
            },
            "path": [
              "component",
              "alert",
              "color",
              "background",
              "default"
            ]
          },
          "primary": {
            "value": "#218bff",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.background.primary.value}"
            },
            "name": "ComponentAlertColorBackgroundPrimary",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "background",
              "state": "primary"
            },
            "path": [
              "component",
              "alert",
              "color",
              "background",
              "primary"
            ]
          },
          "secondary": {
            "value": "#8c959f",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.background.secondary.value}"
            },
            "name": "ComponentAlertColorBackgroundSecondary",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "background",
              "state": "secondary"
            },
            "path": [
              "component",
              "alert",
              "color",
              "background",
              "secondary"
            ]
          },
          "success": {
            "value": "#2da44e",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.background.success.value}"
            },
            "name": "ComponentAlertColorBackgroundSuccess",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "background",
              "state": "success"
            },
            "path": [
              "component",
              "alert",
              "color",
              "background",
              "success"
            ]
          },
          "info": {
            "value": "#80ccff",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.background.info.value}"
            },
            "name": "ComponentAlertColorBackgroundInfo",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "background",
              "state": "info"
            },
            "path": [
              "component",
              "alert",
              "color",
              "background",
              "info"
            ]
          },
          "warning": {
            "value": "#eac54f",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.background.warning.value}"
            },
            "name": "ComponentAlertColorBackgroundWarning",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "background",
              "state": "warning"
            },
            "path": [
              "component",
              "alert",
              "color",
              "background",
              "warning"
            ]
          },
          "danger": {
            "value": "#fa4549",
            "filePath": "tokens/component/alert.json",
            "isSource": true,
            "original": {
              "value": "{color.background.danger.value}"
            },
            "name": "ComponentAlertColorBackgroundDanger",
            "attributes": {
              "category": "component",
              "type": "alert",
              "item": "color",
              "subitem": "background",
              "state": "danger"
            },
            "path": [
              "component",
              "alert",
              "color",
              "background",
              "danger"
            ]
          }
        }
      }
    },
    "button": {
      "selected": {
        "background": {
          "default": {
            "value": "#d0d7de",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.2.value}"
            },
            "name": "ComponentButtonSelectedBackgroundDefault",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "selected",
              "subitem": "background",
              "state": "default"
            },
            "path": [
              "component",
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
            "value": "#eaeef2",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.1.value}"
            },
            "name": "ComponentButtonDisabledBackgroundDefault",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "disabled",
              "subitem": "background",
              "state": "default"
            },
            "path": [
              "component",
              "button",
              "disabled",
              "background",
              "default"
            ]
          }
        },
        "text": {
          "default": {
            "value": "#afb8c1",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.3.value}"
            },
            "name": "ComponentButtonDisabledTextDefault",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "disabled",
              "subitem": "text",
              "state": "default"
            },
            "path": [
              "component",
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
              "value": "{color.background.default.value}"
            },
            "name": "ComponentButtonColorBackgroundDefault",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "background",
              "state": "default"
            },
            "path": [
              "component",
              "button",
              "color",
              "background",
              "default"
            ]
          },
          "primary": {
            "value": "#218bff",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.primary.value}"
            },
            "name": "ComponentButtonColorBackgroundPrimary",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "background",
              "state": "primary"
            },
            "path": [
              "component",
              "button",
              "color",
              "background",
              "primary"
            ]
          },
          "secondary": {
            "value": "#8c959f",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.secondary.value}"
            },
            "name": "ComponentButtonColorBackgroundSecondary",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "background",
              "state": "secondary"
            },
            "path": [
              "component",
              "button",
              "color",
              "background",
              "secondary"
            ]
          },
          "success": {
            "value": "#2da44e",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.success.value}"
            },
            "name": "ComponentButtonColorBackgroundSuccess",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "background",
              "state": "success"
            },
            "path": [
              "component",
              "button",
              "color",
              "background",
              "success"
            ]
          },
          "info": {
            "value": "#80ccff",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.info.value}"
            },
            "name": "ComponentButtonColorBackgroundInfo",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "background",
              "state": "info"
            },
            "path": [
              "component",
              "button",
              "color",
              "background",
              "info"
            ]
          },
          "warning": {
            "value": "#eac54f",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.warning.value}"
            },
            "name": "ComponentButtonColorBackgroundWarning",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "background",
              "state": "warning"
            },
            "path": [
              "component",
              "button",
              "color",
              "background",
              "warning"
            ]
          },
          "danger": {
            "value": "#fa4549",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.danger.value}"
            },
            "name": "ComponentButtonColorBackgroundDanger",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "background",
              "state": "danger"
            },
            "path": [
              "component",
              "button",
              "color",
              "background",
              "danger"
            ]
          }
        },
        "border": {
          "default": {
            "value": "#1b1f24",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.core.black.value}"
            },
            "name": "ComponentButtonColorBorderDefault",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "border",
              "state": "default"
            },
            "path": [
              "component",
              "button",
              "color",
              "border",
              "default"
            ]
          },
          "primary": {
            "value": "#218bff",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.primary.value}"
            },
            "name": "ComponentButtonColorBorderPrimary",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "border",
              "state": "primary"
            },
            "path": [
              "component",
              "button",
              "color",
              "border",
              "primary"
            ]
          },
          "secondary": {
            "value": "#8c959f",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.secondary.value}"
            },
            "name": "ComponentButtonColorBorderSecondary",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "border",
              "state": "secondary"
            },
            "path": [
              "component",
              "button",
              "color",
              "border",
              "secondary"
            ]
          },
          "success": {
            "value": "#2da44e",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.success.value}"
            },
            "name": "ComponentButtonColorBorderSuccess",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "border",
              "state": "success"
            },
            "path": [
              "component",
              "button",
              "color",
              "border",
              "success"
            ]
          },
          "info": {
            "value": "#80ccff",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.info.value}"
            },
            "name": "ComponentButtonColorBorderInfo",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "border",
              "state": "info"
            },
            "path": [
              "component",
              "button",
              "color",
              "border",
              "info"
            ]
          },
          "warning": {
            "value": "#eac54f",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.warning.value}"
            },
            "name": "ComponentButtonColorBorderWarning",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "border",
              "state": "warning"
            },
            "path": [
              "component",
              "button",
              "color",
              "border",
              "warning"
            ]
          },
          "danger": {
            "value": "#fa4549",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{color.background.danger.value}"
            },
            "name": "ComponentButtonColorBorderDanger",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "color",
              "subitem": "border",
              "state": "danger"
            },
            "path": [
              "component",
              "button",
              "color",
              "border",
              "danger"
            ]
          }
        }
      },
      "size": {
        "padding": {
          "small": {
            "value": "5rem 6rem",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{size.base.65.value} {size.base.75.value}"
            },
            "name": "ComponentButtonSizePaddingSmall",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "size",
              "subitem": "padding",
              "state": "small"
            },
            "path": [
              "component",
              "button",
              "size",
              "padding",
              "small"
            ]
          },
          "medium": {
            "value": "8rem 10rem",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{size.base.100.value} {size.base.125.value}"
            },
            "name": "ComponentButtonSizePaddingMedium",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "size",
              "subitem": "padding",
              "state": "medium"
            },
            "path": [
              "component",
              "button",
              "size",
              "padding",
              "medium"
            ]
          },
          "large": {
            "value": "14rem 20rem",
            "filePath": "tokens/component/button.json",
            "isSource": true,
            "original": {
              "value": "{size.base.175.value} {size.base.250.value}"
            },
            "name": "ComponentButtonSizePaddingLarge",
            "attributes": {
              "category": "component",
              "type": "button",
              "item": "size",
              "subitem": "padding",
              "state": "large"
            },
            "path": [
              "component",
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
            "value": "#eaeef2",
            "filePath": "tokens/component/divider.json",
            "isSource": true,
            "original": {
              "value": "{color.core.gray.1.value}"
            },
            "name": "ComponentDividerColorBorderDefault",
            "attributes": {
              "category": "component",
              "type": "divider",
              "item": "color",
              "subitem": "border",
              "state": "default"
            },
            "path": [
              "component",
              "divider",
              "color",
              "border",
              "default"
            ]
          },
          "primary": {
            "value": "#218bff",
            "filePath": "tokens/component/divider.json",
            "isSource": true,
            "original": {
              "value": "{color.background.primary.value}"
            },
            "name": "ComponentDividerColorBorderPrimary",
            "attributes": {
              "category": "component",
              "type": "divider",
              "item": "color",
              "subitem": "border",
              "state": "primary"
            },
            "path": [
              "component",
              "divider",
              "color",
              "border",
              "primary"
            ]
          },
          "secondary": {
            "value": "#8c959f",
            "filePath": "tokens/component/divider.json",
            "isSource": true,
            "original": {
              "value": "{color.background.secondary.value}"
            },
            "name": "ComponentDividerColorBorderSecondary",
            "attributes": {
              "category": "component",
              "type": "divider",
              "item": "color",
              "subitem": "border",
              "state": "secondary"
            },
            "path": [
              "component",
              "divider",
              "color",
              "border",
              "secondary"
            ]
          },
          "success": {
            "value": "#2da44e",
            "filePath": "tokens/component/divider.json",
            "isSource": true,
            "original": {
              "value": "{color.background.success.value}"
            },
            "name": "ComponentDividerColorBorderSuccess",
            "attributes": {
              "category": "component",
              "type": "divider",
              "item": "color",
              "subitem": "border",
              "state": "success"
            },
            "path": [
              "component",
              "divider",
              "color",
              "border",
              "success"
            ]
          },
          "info": {
            "value": "#80ccff",
            "filePath": "tokens/component/divider.json",
            "isSource": true,
            "original": {
              "value": "{color.background.info.value}"
            },
            "name": "ComponentDividerColorBorderInfo",
            "attributes": {
              "category": "component",
              "type": "divider",
              "item": "color",
              "subitem": "border",
              "state": "info"
            },
            "path": [
              "component",
              "divider",
              "color",
              "border",
              "info"
            ]
          },
          "warning": {
            "value": "#eac54f",
            "filePath": "tokens/component/divider.json",
            "isSource": true,
            "original": {
              "value": "{color.background.warning.value}"
            },
            "name": "ComponentDividerColorBorderWarning",
            "attributes": {
              "category": "component",
              "type": "divider",
              "item": "color",
              "subitem": "border",
              "state": "warning"
            },
            "path": [
              "component",
              "divider",
              "color",
              "border",
              "warning"
            ]
          },
          "danger": {
            "value": "#fa4549",
            "filePath": "tokens/component/divider.json",
            "isSource": true,
            "original": {
              "value": "{color.background.danger.value}"
            },
            "name": "ComponentDividerColorBorderDanger",
            "attributes": {
              "category": "component",
              "type": "divider",
              "item": "color",
              "subitem": "border",
              "state": "danger"
            },
            "path": [
              "component",
              "divider",
              "color",
              "border",
              "danger"
            ]
          }
        }
      }
    }
  },
  "size": {
    "base": {
      "0": {
        "value": "0rem",
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
        "value": "1rem",
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
        "value": "2rem",
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
        "value": "3rem",
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
        "value": "4rem",
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
        "value": "5rem",
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
        "value": "6rem",
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
        "value": "7rem",
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
        "value": "8rem",
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
        "value": "9rem",
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
        "value": "10rem",
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
        "value": "11rem",
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
        "value": "12rem",
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
        "value": "13rem",
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
        "value": "14rem",
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
        "value": "16rem",
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
        "value": "18rem",
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
        "value": "20rem",
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
          "value": "0.0625rem",
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
          "value": "0.125rem",
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
          "value": "0.25rem",
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
          "value": "0.25rem",
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
          "value": "1rem",
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
          "value": "3rem",
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
    },
    "font": {
      "50": {
        "value": "11rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "11px"
        },
        "name": "SizeFont50",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "50"
        },
        "path": [
          "size",
          "font",
          "50"
        ]
      },
      "75": {
        "value": "12rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "12px"
        },
        "name": "SizeFont75",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "75"
        },
        "path": [
          "size",
          "font",
          "75"
        ]
      },
      "100": {
        "value": "14rem",
        "comment": "base size",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "14px",
          "comment": "base size"
        },
        "name": "SizeFont100",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "100"
        },
        "path": [
          "size",
          "font",
          "100"
        ]
      },
      "200": {
        "value": "16rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "16px"
        },
        "name": "SizeFont200",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "200"
        },
        "path": [
          "size",
          "font",
          "200"
        ]
      },
      "300": {
        "value": "18rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "18px"
        },
        "name": "SizeFont300",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "300"
        },
        "path": [
          "size",
          "font",
          "300"
        ]
      },
      "400": {
        "value": "20rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "20px"
        },
        "name": "SizeFont400",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "400"
        },
        "path": [
          "size",
          "font",
          "400"
        ]
      },
      "500": {
        "value": "22rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "22px"
        },
        "name": "SizeFont500",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "500"
        },
        "path": [
          "size",
          "font",
          "500"
        ]
      },
      "600": {
        "value": "25rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "25px"
        },
        "name": "SizeFont600",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "600"
        },
        "path": [
          "size",
          "font",
          "600"
        ]
      },
      "700": {
        "value": "28rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "28px"
        },
        "name": "SizeFont700",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "700"
        },
        "path": [
          "size",
          "font",
          "700"
        ]
      },
      "800": {
        "value": "32rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "32px"
        },
        "name": "SizeFont800",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "800"
        },
        "path": [
          "size",
          "font",
          "800"
        ]
      },
      "900": {
        "value": "36rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "36px"
        },
        "name": "SizeFont900",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "900"
        },
        "path": [
          "size",
          "font",
          "900"
        ]
      },
      "1000": {
        "value": "40rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "40px"
        },
        "name": "SizeFont1000",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "1000"
        },
        "path": [
          "size",
          "font",
          "1000"
        ]
      },
      "1100": {
        "value": "45rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "45px"
        },
        "name": "SizeFont1100",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "1100"
        },
        "path": [
          "size",
          "font",
          "1100"
        ]
      },
      "1200": {
        "value": "50rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "50px"
        },
        "name": "SizeFont1200",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "1200"
        },
        "path": [
          "size",
          "font",
          "1200"
        ]
      },
      "1300": {
        "value": "60rem",
        "filePath": "tokens/size/font.json",
        "isSource": true,
        "original": {
          "value": "60px"
        },
        "name": "SizeFont1300",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "1300"
        },
        "path": [
          "size",
          "font",
          "1300"
        ]
      }
    },
    "padding": {
      "xs": {
        "value": "0.25rem",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": 0.25
        },
        "name": "SizePaddingXs",
        "attributes": {
          "category": "size",
          "type": "padding",
          "item": "xs"
        },
        "path": [
          "size",
          "padding",
          "xs"
        ]
      },
      "small": {
        "value": "0.5rem",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": 0.5
        },
        "name": "SizePaddingSmall",
        "attributes": {
          "category": "size",
          "type": "padding",
          "item": "small"
        },
        "path": [
          "size",
          "padding",
          "small"
        ]
      },
      "medium": {
        "value": "1rem",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": 1
        },
        "name": "SizePaddingMedium",
        "attributes": {
          "category": "size",
          "type": "padding",
          "item": "medium"
        },
        "path": [
          "size",
          "padding",
          "medium"
        ]
      },
      "large": {
        "value": "1.5rem",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": 1.5
        },
        "name": "SizePaddingLarge",
        "attributes": {
          "category": "size",
          "type": "padding",
          "item": "large"
        },
        "path": [
          "size",
          "padding",
          "large"
        ]
      },
      "xl": {
        "value": "2rem",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": 2
        },
        "name": "SizePaddingXl",
        "attributes": {
          "category": "size",
          "type": "padding",
          "item": "xl"
        },
        "path": [
          "size",
          "padding",
          "xl"
        ]
      },
      "xxl": {
        "value": "4rem",
        "filePath": "tokens/size/padding.json",
        "isSource": true,
        "original": {
          "value": 4
        },
        "name": "SizePaddingXxl",
        "attributes": {
          "category": "size",
          "type": "padding",
          "item": "xxl"
        },
        "path": [
          "size",
          "padding",
          "xxl"
        ]
      }
    },
    "spacing": {
      "50": {
        "value": "2rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "2px"
        },
        "name": "SizeSpacing50",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "50"
        },
        "path": [
          "size",
          "spacing",
          "50"
        ]
      },
      "75": {
        "value": "4rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "4px"
        },
        "name": "SizeSpacing75",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "75"
        },
        "path": [
          "size",
          "spacing",
          "75"
        ]
      },
      "100": {
        "value": "8rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "8px"
        },
        "name": "SizeSpacing100",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "100"
        },
        "path": [
          "size",
          "spacing",
          "100"
        ]
      },
      "200": {
        "value": "12rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "12px"
        },
        "name": "SizeSpacing200",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "200"
        },
        "path": [
          "size",
          "spacing",
          "200"
        ]
      },
      "300": {
        "value": "16rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "16px"
        },
        "name": "SizeSpacing300",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "300"
        },
        "path": [
          "size",
          "spacing",
          "300"
        ]
      },
      "400": {
        "value": "24rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "24px"
        },
        "name": "SizeSpacing400",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "400"
        },
        "path": [
          "size",
          "spacing",
          "400"
        ]
      },
      "500": {
        "value": "32rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "32px"
        },
        "name": "SizeSpacing500",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "500"
        },
        "path": [
          "size",
          "spacing",
          "500"
        ]
      },
      "600": {
        "value": "40rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "40px"
        },
        "name": "SizeSpacing600",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "600"
        },
        "path": [
          "size",
          "spacing",
          "600"
        ]
      },
      "700": {
        "value": "48rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "48px"
        },
        "name": "SizeSpacing700",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "700"
        },
        "path": [
          "size",
          "spacing",
          "700"
        ]
      },
      "800": {
        "value": "64rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "64px"
        },
        "name": "SizeSpacing800",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "800"
        },
        "path": [
          "size",
          "spacing",
          "800"
        ]
      },
      "900": {
        "value": "80rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "80px"
        },
        "name": "SizeSpacing900",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "900"
        },
        "path": [
          "size",
          "spacing",
          "900"
        ]
      },
      "1000": {
        "value": "96rem",
        "filePath": "tokens/size/spacing.json",
        "isSource": true,
        "original": {
          "value": "96px"
        },
        "name": "SizeSpacing1000",
        "attributes": {
          "category": "size",
          "type": "spacing",
          "item": "1000"
        },
        "path": [
          "size",
          "spacing",
          "1000"
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
  },
  "weight": {
    "font": {
      "normal": {
        "value": 400,
        "filePath": "tokens/weight/font.json",
        "isSource": true,
        "original": {
          "value": 400
        },
        "name": "WeightFontNormal",
        "attributes": {
          "category": "weight",
          "type": "font",
          "item": "normal"
        },
        "path": [
          "weight",
          "font",
          "normal"
        ]
      },
      "semibold": {
        "value": 600,
        "filePath": "tokens/weight/font.json",
        "isSource": true,
        "original": {
          "value": 600
        },
        "name": "WeightFontSemibold",
        "attributes": {
          "category": "weight",
          "type": "font",
          "item": "semibold"
        },
        "path": [
          "weight",
          "font",
          "semibold"
        ]
      },
      "bold": {
        "value": 700,
        "filePath": "tokens/weight/font.json",
        "isSource": true,
        "original": {
          "value": 700
        },
        "name": "WeightFontBold",
        "attributes": {
          "category": "weight",
          "type": "font",
          "item": "bold"
        },
        "path": [
          "weight",
          "font",
          "bold"
        ]
      }
    }
  }
};
}))
