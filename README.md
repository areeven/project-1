# React Project

### With TypeScript

```
npx create-react-app project-1 --template typescript
```

Initialize my project removing all irrelevant data from the files, created the title more suited for the project.

Next I will start creating my router with:

```
npm i react-router-dom @types/react-router-dom
```

### Setting up my directory structure

- src
  - assets
    - hooks
  - components
    - navigation
      - desktop
        - Desktop.tsx
      - mobile
        - Mobile.tsx
  - shared
    - data
    - images
    - hooks
  - routes
    - RoutingPaths.ts
    - Routes.tsx

### Initialize Tailwind

```
npm install -D tailwindcss
npx tailwindcss init
```

Create script for running tailwind

`"start:tailwind": "tailwindcss -i ./src/index.css -o ./src/output.css --watch"`
