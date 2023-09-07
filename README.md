# Article-Preview-Component
Responsive page with links to social media based on Frontend Mentor project

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

## Table of contents

- [Overview]
  - [The challenge]
  - [Screenshot]
  - [Links]
- [My process]
  - [Built with]
  - [What I learned]
  - [Continued development]
  - [Useful resources]

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- DOM JS

### What I learned
- Using DOM JS
```js
arrow.addEventListener('click', () => {
  media.style.display = 'block';
});

arrow_active.addEventListener('click', () => {
  media.style.display = 'none';
});
````
- manipulation of the size of a picture by puting it into container
```css
.drawer_image_container
{
    width: 350px;
    height: 230px;
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
}

.drawer_image
{
    width: 350px;
}   
```

### Continued development

Deeping my understanding of DOM JS and using more of that functionality'
Undestanding better CSS position property

### Useful recources

I used ChatGPT to write the javascript part of the code. I was asking it questions to which I allowed answer only "yes" or "no". It helped me with my thinking process.

