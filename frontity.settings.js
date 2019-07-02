const settings = {
  "name": "codeformylife-frontityblog-v2",
  "state": {
    "frontity": {
      "url": "https://codeformylife.com",
      "title": "Code for My Life",
      "description": "Tech Blog"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home","/"],
            ["Coding","/category/technical-things/coding/"],
            ["Technical Things","/category/technical-things/"],
            ["WordPress","/category/technical-things/wordpress-en/"],
            ["Frontity","/category/technical-things/frontity/"],
            ["Contact","/contact/"],
            ["About Me","/me-and-my-blog/"]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://codeformylife.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
