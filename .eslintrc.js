module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6":true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off"
    },
    "ignorePatterns": [
        "temp.js", 
        "**/vendor/*.js",
        "/eslint.js",
        "/public/Assets/bootstrap",
        "/src/serviceworker.js"
        ],
    "settings":{
        "react":{
            "version": "detect" // React version. "detect" automatically picks the version you have installed.
        }
    }
};
