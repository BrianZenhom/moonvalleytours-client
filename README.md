<p align="center">
<a href=https://github.com/BrianZenhom/moonvalleytours-client target="_blank">
<img src='/placeholder.png' width="100%" alt="Banner" />
</a>
</p>



<p align="center">
<img src="https://img.shields.io/github/languages/code-size/BrianZenhom/moonvalleytours-client" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/BrianZenhom/moonvalleytours-client" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/BrianZenhom/moonvalleytours-client" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/BrianZenhom/moonvalleytours-client" alt="GitHub license" />
</p>

<p></p>
<p></p>

# 📌 Overview

moonvalleytours-client is a project that utilizes prop-types, react, react-dom, react-router-dom, types/react, types/react-dom, vitejs/plugin-react-swc, eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, and vite.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── dashmine.png
│   ├── favicon.svg
│   ├── header-bg.webp
│   └── header-bg.webp:Zone.Identifier
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── fonts
│   │   │   ├── Montserrat-Black.woff2
│   │   │   ├── Montserrat-Black.woff2:Zone.Identifier
│   │   │   ├── Montserrat-Bold.woff2
│   │   │   ├── Montserrat-Bold.woff2:Zone.Identifier
│   │   │   ├── Montserrat-ExtraBold.woff2
│   │   │   ├── Montserrat-ExtraBold.woff2:Zone.Identifier
│   │   │   ├── Montserrat-ExtraLight.woff2
│   │   │   ├── Montserrat-ExtraLight.woff2:Zone.Identifier
│   │   │   ├── Montserrat-Italic.woff2
│   │   │   ├── Montserrat-Italic.woff2:Zone.Identifier
│   │   │   ├── Montserrat-Light.woff2
│   │   │   ├── Montserrat-Light.woff2:Zone.Identifier
│   │   │   ├── Montserrat-Medium.woff2
│   │   │   ├── Montserrat-Medium.woff2:Zone.Identifier
│   │   │   ├── Montserrat-Regular.woff2
│   │   │   ├── Montserrat-Regular.woff2:Zone.Identifier
│   │   │   ├── Montserrat-SemiBold.woff2
│   │   │   └── Montserrat-SemiBold.woff2:Zone.Identifier
│   │   ├── icons
│   │   │   ├── Accommodation.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── CustomerSupport.jsx
│   │   │   ├── Euro.jsx
│   │   │   ├── Flights.jsx
│   │   │   ├── Help.jsx
│   │   │   ├── HiddenFees.jsx
│   │   │   ├── More.jsx
│   │   │   ├── PaymentMethods.jsx
│   │   │   ├── SliderIcons.jsx
│   │   │   ├── Socials.jsx
│   │   │   └── User.jsx
│   │   ├── images
│   │   │   ├── image (5).webp:Zone.Identifier
│   │   │   ├── image(1).webp
│   │   │   ├── image(3).webp
│   │   │   ├── image(3).webp:Zone.Identifier
│   │   │   ├── image(4).webp
│   │   │   └── image(4).webp:Zone.Identifier
│   │   └── logos
│   │       └── Logo.jsx
│   ├── components
│   │   ├── footer
│   │   │   ├── Footer.jsx
│   │   │   └── footer.css
│   │   ├── navbar
│   │   │   ├── GitHub Copilot Suggestions for navbar.css
│   │   │   ├── Navbar.jsx
│   │   │   └── navbar.css
│   │   └── slider
│   │       ├── Slider.jsx
│   │       └── slider.css
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       ├── city
│       │   └── City.jsx
│       ├── country
│       │   ├── Country.jsx
│       │   └── country.css
│       ├── destinations
│       │   └── Destinations.jsx
│       ├── home
│       │   ├── Home.jsx
│       │   └── sections
│       │       ├── hero
│       │       │   ├── Hero.jsx
│       │       │   └── hero.css
│       │       ├── maindestinations
│       │       │   ├── MainDestinations.jsx
│       │       │   └── maindestinations.css
│       │       └── toptours
│       │           ├── TopTours.jsx
│       │           └── toptours.css
│       └── tour
│           ├── Tour.jsx
│           └── tour.css
└── vite.config.js
```

## 📝 Project Summary

- [src](src): Contains the main source code of the JavaScript project.
- [src/assets](src/assets): Stores various assets used in the project, such as fonts, icons, and images.
- [src/components](src/components): Holds reusable components used throughout the project.
- [src/pages](src/pages): Contains different pages of the project, including city, country, destinations, home, and tour.
- [src/pages/home](src/pages/home): Represents the home page of the project.
- [src/pages/home/sections/hero](src/pages/home/sections/hero): Manages the hero section on the home page.
- [src/pages/home/sections/maindestinations](src/pages/home/sections/maindestinations): Handles the main destinations section on the home page.
- [src/pages/home/sections/toptours](src/pages/home/sections/toptours): Manages the top tours section on the home page.
- [src/components/footer](src/components/footer): Contains the footer component used across the project.
- [src/components/navbar](src/components/navbar): Manages the navigation bar component used across the project.

## 💻 Stack

- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Provides DOM-specific methods for React.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Declarative routing for React.
- [prop-types](https://www.npmjs.com/package/prop-types): Runtime type checking for React props.
- [eslint](https://eslint.org/): Pluggable linting utility for JavaScript.
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): React specific linting rules for ESLint.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ESLint rules for React hooks.
- [vite](https://vitejs.dev/): Next-generation frontend build tool.

## ⚙️ Setting Up

#### Your Environment Variable

- Step 1

- Step 2

## 🚀 Run Locally
1.Clone the moonvalleytours-client repository:
```sh
git clone https://github.com/BrianZenhom/moonvalleytours-client
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
bun install
npm install
yarn install
```
3.Start the development mode:
```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors
<a href="https://github.com/BrianZenhom/moonvalleytours-client/graphs/contributors">
<img src="https://contrib.rocks/image?repo=BrianZenhom/moonvalleytours-client" />
</a>

## ☁️ Deploy

`[Application name](Your App URL)`

## 📄 License

[**Add Your License**](https://choosealicense.com)


