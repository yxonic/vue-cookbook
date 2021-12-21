import{h as e}from"./vendor.b777a5b2.js";const t=[e("h1",{},["Getting Started"]),e("p",{},["Before you start, run the following command to start a development server:"]),e("pre",{},[`npm run dev
`]),e("p",{},["Read the ",e("a",{href:"/vue-cookbook/docs/installation"},["installation guide"])," for more details."]),e("h2",{},["Start from an example"]),e("p",{},["VPage lets you start a website extremely easily. We have hand-crafted several example sites as a starting point for you, and all you need to do is to copy-and-paste the one that fits your need, and build your own website upon it."]),e("p",{},["For demonstration, let\u2019s copy ",e("code",{},["assets/"]),", ",e("code",{},["components/"]),", ",e("code",{},["layouts/"])," and ",e("code",{},["pages/"])," directories from ",e("code",{},["examples/personal/"])," to ",e("code",{},["src/"])," (overwrite the original directories). Your directory structure would then be like:"]),e("pre",{},[`src/
  assets/
    ...
  components/
    PersonalFooter.vue
  layouts/
    home.layout.vue
  pages/
    index.page.md
  _default.page.route.ts
`]),e("p",{},["Afterwards, you can now see a personal website demo at ",e("a",{href:"http://localhost:3000"},["http://localhost:3000"]),"."]),e("h2",{},["Write a new page"]),e("p",{},["Writing a new page is as simple as creating a file named ",e("code",{},["<name>.page.md"])," under ",e("code",{},["src/pages/"]),". The resulting page will be placed at url ",e("code",{},["/<name>"]),". Let\u2019s create a ",e("code",{},["src/pages/contact.page.md"])," and give the following content:"]),e("pre",{},[`---
title: Personal | Contact
layout: home
---
# Contact
My address is ...
`]),e("p",{},["Visit ",e("a",{href:"http://localhost:3000/blog"},["http://localhost:3000/blog"])," to see your new page!"]),e("h2",{},["Customize design"]),e("p",{},["You may have noticed that ",e("code",{},["index.page.md"])," and ",e("code",{},["contact.page.md"])," share the same ",e("code",{},["layout"])," field in the frontmatter (",e("code",{},["home"]),"). Therefore, they also share the same visual layout. To design the looks of your page, you may want to modify layout components under ",e("code",{},["src/layouts/"]),"."]),e("p",{},["Let\u2019s add a navbar to let us switch between the index page and the contact page. To do so, we modify the content in ",e("code",{},["src/layouts/home.layout.vue"]),":"]),e("pre",{},[`<template>
  <nav class="py-6">
    <ul class="flex justify-center space-x-4 font-medium">
      <li><a href="/">home</a></li>
      <li><a href="/contact">contact</a></li>
    </ul>
  </nav>
  <main class="px-4 py-10 max-w-3xl mx-auto prose text-gray-700">
    <slot />
  </main>
  <PersonalFooter class="px-4 pb-10 max-w-3xl mx-auto" />
</template>
<script lang="ts" setup>
import PersonalFooter from '../components/PersonalFooter.vue'
<\/script>
`]),e("p",{},["Here we include a navbar, and specify the design of it using ",e("a",{href:"https://tailwindcss.com/"},["Tailwind"])," / ",e("a",{href:"https://windicss.org/"},["WindiCSS"])," utility classes."]),e("h2",{},["Publish website"]),e("p",{},["After we are satisfied with the design of our website, now it\u2019s time to publish it to the world."]),e("p",{},["In many cases, using a static site hosting service is enough to host our pages. VPage provides setup for ",e("a",{href:"https://pages.github.com/"},["GitHub Pages"])," and ",e("a",{href:"https://www.netlify.com/"},["Netlify"]),", so that you can deploy with them without any configuration. Both of them require your website source code to be managed on GitHub."]),e("h3",{},["GitHub Pages"]),e("p",{},["To deploy using GitHub Pages, go to your project Settings -> Pages -> Source, select the auto-built branch ",e("code",{},["gh-pages"])," as page source."]),e("h3",{},["Netlify"]),e("p",{},["To deploy using Netlify, visit ",e("a",{href:"https://app.netlify.com"},["https://app.netlify.com"])," and choose New Site from Git. Follow the instructions to connect to your GitHub project."]),e("h3",{},["Manual deploy"]),e("p",{},["You can also build the whole site and deploy it manually."]),e("p",{},["First, build the whole site with:"]),e("pre",{},[`npm run build
`]),e("p",{},["This will build ",e("code",{},["dist/client/"])," and ",e("code",{},["dist/server/"])," directories. For static websites, you can upload ",e("code",{},["dist/client/"])," directory to your server, and configure a web server to serve them (e.g. Nginx)."]),e("p",{},["If you need SSR, you can just run the following (you must build the website first):"]),e("pre",{},[`npm run serve
`])];var a={render(){return t}};const s={title:"Getting Started - VPage Docs",layout:"book"};export{a as default,s as frontmatter,t as nodes};
