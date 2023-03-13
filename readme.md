## Tailwind

Icons - https://heroicons.com/
##

If class doesn't exist we can in `tailwind.config.js` add new classes to **extend** :

```
extend: {
    colors: {
        main: "#006f6f",
    },
    letterSpacing: {
        general: "0.5em",
    },
    fontFamily: {
        main: ["Roboto"],
    },
},
```
And add it it to HTML murkup:
```
<h2 class="h2 tracking-general">Hello world</h2>
<h2 class="h2 font-main">Hello people</h2>
<h2 class="h2">Hello man</h2>

```
##
To get all **configuration** in `tailwind.config.js`, put this in terminal

`npx tailwindcss init --full`
