# Frontend with GDS

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [GOV.UK Design System and Nunjucks Setup](#govuk-design-system-and-nunjucks-setup)
   - [GOV.UK Design System (GDS)](#govuk-design-system-gds)
   - [Nunjucks](#nunjucks)
   - [Configuration](#configuration)
   - [Usage](#usage)
- [Installation](#installation)
- [Running the Application](#running-the-application)
   - [Development](#development)
   - [Viewing the Application](#viewing-the-application)
- [Directory Structure](#directory-structure)

## Overview

This is a frontend application, built using Express, Nunjucks, and the GOV.UK Design System. It serves as a template for creating scalable and maintainable frontend applications.

## Prerequisites

- Node.js v20.6.1 (specified in `.nvmrc`)
- npm (comes with Node.js)

## Dependencies

- Express
- Nunjucks
- GOV.UK Frontend
- Sass
- EJS
- CORS

## Dev Dependencies

- Nodemon
- Concurrently


## GOV.UK Design System and Nunjucks Setup

### GOV.UK Design System (GDS)

This application uses the GOV.UK Design System for its user interface components. The design system provides a set of accessible, mobile-friendly, and easy-to-use components that comply with government design guidelines.

To include GDS in this project, the `govuk-frontend` package is installed as a dependency. The assets from this package, such as fonts and images, are served statically in the application.

### Nunjucks

Nunjucks is a templating engine for JavaScript. It's used in this project to render dynamic content on the server before sending it to the client. Nunjucks allows for powerful server-side templating with features like template inheritance, macros, and asynchronous control.

### Configuration

The Nunjucks engine is configured in `app.js` as follows:

```javascript
import nunjucks from 'nunjucks';

nunjucks.configure([
    "node_modules/govuk-frontend/",
    "views"
], {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');
```

This configuration tells Nunjucks to look for templates in both the `node_modules/govuk-frontend/` directory (where the GOV.UK Frontend templates and components are located) and your own `views` directory.

The `autoescape: true` option ensures that output is automatically escaped, to prevent accidental security vulnerabilities.

### Usage

To use a GOV.UK Frontend component in a Nunjucks template, you can simply include it like so:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Continue"
}) }}
```

This will render a "Continue" button styled according to the GOV.UK Design System.

## Installation

1. **Clone the repository**


2. **Navigate to the project directory**

    ```bash
    cd app_frontend
    ```

3. **Install Node.js dependencies**

    ```bash
    npm install
    ```

## Running the Application

### Development

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start both the Express server and the Sass compiler in watch mode.

### Viewing the Application

Open your web browser and navigate to:

```
http://localhost:8080
```

## Directory Structure

```
.
├── app.js
├── controllers
├── .gitignore
├── middleware
├── nodemon.json
├── .nvmrc
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   ├── main.css
│   │   └── main.css.map
│   └── js
│       └── govuk.js
├── README.md
├── scss
│   └── main.scss
└── views
    └── root.njk
```
