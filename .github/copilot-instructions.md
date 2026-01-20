# Copilot Instructions for Nosst

## Project Overview
Nosst is a **Freelance Design Marketplace** built with React, TypeScript, Vite, and Tailwind CSS. Users can browse design project listings, view details, and create new posts. Based on a Figma design (https://www.figma.com/design/v0NyR7cOJJqs5OrDkcsIew/Freelance-Design-Marketplace).

## Architecture

### Key Tech Stack
- **Build Tool**: Vite 6.3.5 (ES modules, not CommonJS)
- **React**: 18.3.1 with TypeScript
- **Routing**: React Router v7 (client-side routing)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **UI Library**: Radix UI primitives + custom components in `src/app/components/ui/`

### Project Structure
```
src/
├── main.tsx           # App entry point
├── app/
│   ├── App.tsx        # Router setup - add new routes here
│   ├── components/    # Page components + UI library
│   │   ├── ui/        # shadcn/ui components (button, card, etc.)
│   │   └── figma/     # Figma-specific utilities
│   ├── data/          # Mock data (mockProjects.ts)
│   └── types/         # TypeScript interfaces (Project type)
└── styles/            # Global CSS
```

### Data Flow
- **No backend**: Uses mock data from `src/app/data/mockProjects.ts`
- **Project type**: Defined in `src/app/types/index.ts` with fields: id, title, description, designIdea, timeline, priceRange, status, createdAt, category, tags
- **Routing**: BrowserRouter in App.tsx handles `/`, `/create`, `/browse`, `/project/:id`

## Development Workflow

### Commands
- **Install**: `npm i` (note: no `npm install`, use shorthand)
- **Dev Server**: `npm run dev` (Vite dev server, hot reload enabled)
- **Build**: `npm run build` (production build)

### ES Module Specifics
- **No `__dirname`**: This is an ES module project. Use:
  ```typescript
  import { fileURLToPath } from 'url'
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  ```
- **Path alias**: `@/` resolves to `src/` (configured in vite.config.ts)

## Code Conventions

### Component Patterns
1. **Functional components with hooks**: All components use function syntax, not classes
2. **Export syntax**: Components typically use named exports (`export function ComponentName`)
3. **Routing**: Use `<Link>` from react-router-dom for internal navigation, never `<a>` tags

### Styling
- **Tailwind utility classes**: Primary styling method (e.g., `className="min-h-screen bg-gray-50"`)
- **cn() helper**: Use `cn()` from `src/app/components/ui/utils.ts` to merge Tailwind classes conditionally
  ```tsx
  import { cn } from './ui/utils'
  <div className={cn("base-class", condition && "conditional-class")} />
  ```
- **shadcn/ui components**: Pre-built components in `ui/` folder use class-variance-authority for variants

### TypeScript
- **Strict typing**: Project uses TypeScript with strict mode
- **Type definitions**: Import from `src/app/types/index.ts`
- **No implicit any**: All function parameters must be typed

## Critical Files

### Must Not Remove
- **vite.config.ts**: React and Tailwind plugins are both required (even if Tailwind seems unused - see comment in file)
- **src/styles/tailwind.css**: Configures Tailwind v4 with `@source` directive

### Key References
- **Component examples**: See `src/app/components/HomePage.tsx` for complex scroll animations and state management
- **UI components**: `src/app/components/ui/` contains reusable shadcn/ui components
- **Mock data structure**: `src/app/data/mockProjects.ts` shows expected Project shape

## Integration Points

### External Dependencies
- **Material UI Icons**: `@mui/icons-material` used alongside Lucide React icons
- **Radix UI**: All interactive components (dialogs, dropdowns, etc.) built on Radix primitives
- **Motion**: Animation library (v12.23.24) for advanced animations
- **React DnD**: Drag-and-drop functionality available if needed

### Routing Structure
Routes defined in `src/app/App.tsx`:
- `/` - HomePage (marketing page)
- `/create` - CreatePost (post new design project)
- `/browse` - BrowseProjects (filter/search projects)
- `/project/:id` - ProjectDetail (individual project view)

## Design System Notes
- Reference `Figma Guidelines/Guidelines.md` for design system rules
- Current design follows minimalist approach with responsive layouts
- Avoid absolute positioning; prefer flexbox/grid
