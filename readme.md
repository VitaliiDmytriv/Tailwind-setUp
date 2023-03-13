## Tailwind

Icons - https://heroicons.com/
##

If class doesn't exist we can add new classes to **extend** in `tailwind.config.js`  :

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
If there are too many classes in row for same elements, we can create main class in css, and put there that line, like this: 

```
.h2 {
    @apply underline mt-6 italic text-cyan-600;
}
```

We need to use there *@apply*

##
To get all **configuration** in `tailwind.config.js`, put this in terminal

`npx tailwindcss init --full`
