# Work Journal

## 2025-02-05 (5h)

- Setup frontent project
- Setup backend project and initially test functionality
- Setup Github repositoy, consisting the whole project
- Setup work journal
- Convert userstories to Github Issues
- Setup MongoDB Docker with initial seed data (not final)

## 2025-02-06 (5h)

- Add mongoose and initialize db connection
- Add authentification to backend
  - api endpoints to register and login
  - bcrypt for salting and hashing plain text passwords
  - jwt as session (1h expire, and currently no renew)

## 2025-02-07 (3h)

- Add autorefresh for JWT on backend (Refresh only if not expired)
- Frontend: Create login component and reactive form with validation.
- Started doing the same for register component --> wip

## 2025-02-10 (7h)

- Finish register reactive form with validation
- Setup CORS on backend
- Create user login and register requests (Frontend --> backend --> DB)
- Add Material UI to style
- Add TailwindCSS for padding, spacing and placing components, also for styling non-material components
- Styling login component

## 2025-02-11 (7h)

- Styling register component
- Create admin panel and protect it with jwt payload `role` (`CTO` and `Tech Lead` are allowed)
- Modulate technologies database entries
- Add CRUD backend api operations for technologies
- Create form for adding new technologies

## 2025-02-12 (8h)

- Add tabular view of technologies (Viewer)
- Add Filtering and search on table
- Simplify the datastructure on the db for easier filtering and handling technologies
  - Should have not started with a too detailed db structure, if a simple db structur gets the job done as well. (KISS)
- Get technologies from backend via api call
- Reuse technology creation form for editing technologies (Some logic still missing --> WIP)
- Add edit button to table and use dialogs for editing technologies.

## 2025-02-13 (4h)

- Finish add-technology-dialog
- Add responsive design for technology table for mobile and desktop
- Finish routing between admin console and viewer

## 2025-02-16 (5h)

- Fix backend errormessages not passing correctly to the client
- Let the admin create unpublished technologies and publish them later
- Log every login and register attempt (successful and unsuccessful) to the database
- Let the admin edit technologies
- Fix case sensitive sorting of tabular view

## 2025-02-17 (3h)

- Cleanup project and do some chores
- Lets the admin edit classifications of a technology

## 2025-02-18 (5h)

- Create the technology viewer
  - Reused admin viewer table but use admin checks to show and hide admin only controls
- Make user login and registration ignore case sensitive emails
- Create a technology details page
  - Also make technology from details page editable, and hide certain props if user has no admin rights
- Protect POST PUT DELETE api endpoints with isAdminMiddleware
  - Also protect GET to only return published technologies if user has no admin rights.

## 2025-02-23 (6h)

- Draft of arc42 documentation.
- Create and add C4-Models to documentation
- Add Playwright tests and configuration for end-to-end testing
- Created initial presentation slides.

## 2025-02-24 (6h)

- Finish presentation slided
- improve C4-models
- Add approve user component on admin dashboard
- Add backend api calls for user
- Add logging component on admin dashboard
- Add backend api calls for logs

## 2025-02-25 (3h)

- Cleanup project

**Total: 67h**
