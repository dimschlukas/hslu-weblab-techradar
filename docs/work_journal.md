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

**Total: 27h**
