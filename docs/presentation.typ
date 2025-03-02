#import "@preview/minimal-presentation:0.4.0": *
#import "@preview/cades:0.3.0": qr-code


// #set text(font: "Lato")
// #show math.equation: set text(font: "Lato Math")
// #show raw: set text(font: "Fira Code")


#show: project.with(
  title: "WEBLAB Techradar",
  sub-title: "HSLU    I.BA_WEBLAB.H2401",
  author: "Lukas Schmid",
  date: "08.03.2025",
  index-title: "Contents",
  // logo: image("./logo.svg"),
  // logo-light: image("./logo_light.svg"),
  cover: image("./images/title_image.png"),
  main-color: rgb("#7d00fa"),
)

= Technology Radar
== Zusatzfunktionen

- Administrationsbereich
 - *Benutzerregistrierung* - Möglichkeit für neue Nutzer, sich im System zu registrieren
 - *Benutzerfreigabe (User Approval)* - Admins können neue Benutzer manuell freischalten oder ablehnen
 - *Audit-Logs für Logins* - Alle Anmeldevorgänge werden protokolliert


= Vorgehen / Methodik
== Development / Testing

#grid(
  columns: (2fr, 1fr),
  [
- Docker für Development und Deployment
 - Containerisierte Umgebung für eine konsistente Entwicklungs- und Produktionsumgebung
 - Datenbank-Initialisierung bei jedem Start für eine saubere Testumgebung

- End-to-End (e2e) Testing mit Playwright
 - Automatisierte Tests
 - Headless-Browser-Tests für schnelle und zuverlässige Prüfungen
  ],
  [
    #figure(
      box(height: 6cm, )[
        #image("images/docker.png")
        #image("images/playwright.png")
      ]
)
  ]
)

= Architektur des Systems

== MEAN stack

- MongoDB
- ExpressJS
- Angular
- NodeJS 

#figure(
  image("images/stack.png"),
)

== Architekturübersicht

#figure(
  image("images/model.png"),
)

=== Level 1

#figure(
  image("images/C1.png"),
)

=== Level 2

#figure(
  image("images/C2.png"),
)

=== Level 3 Frontend


#grid(
  columns: (1fr, 3fr),
  rows: (auto),
  [
- *Angular*:
  - Components
  - Services
  - Guards
  - Interceptors
  ],
  [
    #figure(
  image("images/C3_frontend.png"),
)
  ]
)

=== Level 3 Backend

#grid(
  columns: (1fr, 1.5fr),
  rows: (auto),
  [
- *ExpressJS*
- *Mongoose* Object Data Modeling (ODM)
- *JSON Web Token* Authentifizierung
  ],
  [
    #figure(
  image("images/C3_backend.png"),
)
  ]
)


=== Level 4 Database

    #figure(
  image("images/C4_database.png"),
)


= Softwareartefakte

== Demo

    #figure(
  image("images/ui.png"),
)

== Softwareartefakte
*Alles in einem Github Repository:*

https://github.com/dimschlukas/hslu-weblab-techradar
- Frontend, Backend, Database
- Arc42-Dokumentation und Arbeitsjournal im `Markdown` Format

#grid(
  columns: (1fr, 1.8fr),
  gutter: 3pt,
  [
#qr-code("https://github.com/dimschlukas/hslu-weblab-techradar", width: 5cm)
GitHub Repository
    
  ]
,[
#grid(
  columns: (1fr, 1.6fr),
  [
#qr-code("https://techradar.l-schmid.ch", width: 5cm)
Techradar Playground
  ],
  [
  https://techradar.l-schmid.ch
  
  *Email*: `play@hslu.ch`\
  *Passwort*: `weblab`
  ]
)
])

= Fragen?
