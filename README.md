## This project is under development

You may check it here: https://jtransit.github.io/route-planner/

# JTransit Routes Planner

1. [What is JTransit Routes Planner?](https://github.com/jtransit/route-plotter/wiki/Specifications/#what-is-jtransit-routes-planner)
2. [Features](https://github.com/jtransit/route-plotter/wiki/Specifications/#features)
3. [Libaries or Technology Used](https://github.com/jtransit/route-plotter/wiki/Specifications/#libaries-or-technology-used)

## What is JTransit Routes Planner?
JTransit Route Plotter is an app used to map out Jeepney routes in Cebu City, Philippines. This will be mainly used to supply suggested routes in the Android application [JTransit](https://play.google.com/store/apps/details?id=com.boscafsoftware.jtransit&hl=en&gl=US). The aim is to provide an application for the users/administrators to suggest/create jeepney routes. Due to the nature of jeepney routes changing frequently with no notice, crowdsourcing the data is the most efficient solution to keep these routes up to date.

## Features
1. Plot Jeepney Routes via Leaflet Routing Machine
2. Send Plotted Route for a specific Jeepney code to the back-end
3. Modify an existing Jeepney Route
4. Administrators may approve suggested routes provided by contributors
5. Modify Fares
6. TBD - Include buses

## Libraries and Technologies Used
1. [React / Next.js 13](https://nextjs.org/) - _For the user-interface_
2. [Github Pages](https://pages.github.com/) - _For hosting the app front-end_
3. [React Leaflet : 1.9.4](https://react-leaflet.js.org/) - _For creating the map_
4. [Leaflet Routing Machine : 3.2.12](https://www.liedman.net/leaflet-routing-machine/) - _For connecting the markers and route creation_

## Scope
1. Web application written in React
2. Firebase as backend

# Setting up Development Environment

1. Create an `.env` file using the `.env.template` (supply the necessary values)
  _NOTE: You'll need to setup a Mapbox API and generate the token_

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

