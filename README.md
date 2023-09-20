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
    - [Local Installation](#local-installation)
    - [Docker Installation](#docker-installation)
- [Docker Compose Configuration](#docker-compose-configuration)
    - [Standalone Static Page](#standalone-static-page)
    - [With API Backend](#with-api-backend)
- [Running the Application](#running-the-application)
    - [Development](#development)
    - [Docker Development](#docker-development)
- [Directory Structure](#directory-structure)
- [Nunjucks Templating](#nunjucks-templating)
- [Understanding `package.json`](#understanding-packagejson)

## Overview

This frontend application is constructed utilising Express, Nunjucks, and the GOV.UK Design System. It serves as a basis for creating scalable and maintainable frontend applications.

## Prerequisites

- Node.js v20.6.1 (as specified in `.nvmrc`)
- npm (bundled with Node.js)
- Docker (if using Docker for development)

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

The application makes use of the GOV.UK Design System for its user interface components. This design system provides a range of accessible, mobile-friendly, and user-friendly components that are in line with government design guidelines.

### Nunjucks

Nunjucks serves as the templating engine for this application, facilitating the server-side rendering of dynamic content. The engine offers robust features such as template inheritance, macros, and asynchronous control.

### Configuration

Nunjucks is configured within `app.js` as follows:

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

### Usage

To utilise a GOV.UK Frontend component within a Nunjucks template, simply include it as shown below:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Continue"
}) }}
```

## Installation

### Local Installation

1. **Clone the repository**
2. **Navigate to the project directory**
    ```bash
    cd app_frontend
    ```
3. **Install Node.js dependencies**
    ```bash
    npm install
    ```

### Docker Installation

1. **Navigate to the `docker_local` directory**
    ```bash
    cd docker_local
    ```
2. **Run the local build script**
    ```bash
    ./local_build.sh
    ```

## Running the Application


## Docker Compose Configuration

The `docker-compose-local.yml` file is configured to allow the application to run in two modes:

1. **Standalone**: In this mode, the application without requiring a backend service.
2. **With API Backend**: In this mode, the application connects to a separate API backend service for dynamic data.

### Standalone Static Page

If you intend to run the application as a standalone application, you can simply remove or comment out the `external_links` section in the `docker-compose-local.yml` file:

```yml
# external_links:
#   - api_backend 
```

### With API Backend

If you wish to connect the application to a separate API backend running in another Docker container, you'll need to specify the backend service in the `external_links` section:

```yml
external_links:
  - api_backend # Change this to your backend if it's called something different
```

Replace `api_backend` with the name of your backend container if it's different.

To run the application in either mode, navigate to the `docker_local` directory and execute:

```bash
docker-compose -f docker-compose-local.yml up
```

### Development

To run the application in development mode, execute the following command:

```bash
npm run dev
```

### Docker Development

To run the application in a Docker container, navigate to the `docker_local` directory and execute:

```bash
docker-compose -f docker-compose-local.yml up
```

### Viewing the Application

Open a web browser and navigate to:

```
http://localhost:8080
```

## Directory Structure

```
.
├── app.js                 # Main application file where the Express server and Nunjucks are configured
├── controllers            # Directory for controller files to handle business logic
├── .gitignore             # Specifies files and directories to be ignored by Git
├── middleware             # Directory for middleware functions to process incoming requests
├── nodemon.json           # Configuration file for Nodemon, specifying file extensions to watch
├── .nvmrc                 # Specifies the version of Node.js to use
├── package.json           # Contains metadata and dependencies of the project
├── package-lock.json      # Automatically generated file to lock down dependency versions
├── public                 # Publicly accessible files
│        ├── css                # Compiled CSS files
│        │   ├── main.css       # Main stylesheet
│        │   └── main.css.map   # Source map for the main stylesheet
│        └── js                 # JavaScript files
│            └── govuk.js       # JavaScript file for GOV.UK components
├── README.md              # Documentation for the project
├── scss                   # Directory for Sass files
│       └── main.scss           # Main Sass file to be compiled into CSS
└── views                  # Directory for Nunjucks templates
    ├── home.njk           # Home page template
    └── template           # Directory for base templates
        └── pageTemplate.njk    # Base template for pages

```

## Nunjucks Templating

Nunjucks templating is configured in this project. For styles, layout, and components, consult the [GOV.UK Design System](https://design-system.service.gov.uk).

### Examples

1. **Rendering a Text Input**

    ```njk
    {% from "govuk/components/input/macro.njk" import govukInput %}
    {{ govukInput({
      label: {
        text: "Full name"
      },


      id: "full-name",
      name: "fullName"
    }) }}
    ```

2. **Rendering a Button**

    ```njk
    {% from "govuk/components/button/macro.njk" import govukButton %}
    {{ govukButton({
      text: "Continue"
    }) }}
    ```

## Understanding `package.json`

The `package.json` file holds metadata about the project and lists its dependencies. Below is a breakdown of the scripts:

- `start:dev`: Initiates the development server using Nodemon.
- `sass`: Compiles the Sass files into CSS.
- `sass:watch`: Monitors the Sass files for changes and compiles them into CSS.
- `dev`: Runs both the development server and the Sass compiler in watch mode using Concurrently.

To run the development server and Sass compiler concurrently, use:

```bash
npm run dev
```
