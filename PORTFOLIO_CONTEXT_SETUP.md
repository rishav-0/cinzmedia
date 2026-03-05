# Portfolio Context Setup - Usage Guide

## Overview

A global React Context has been created to manage portfolio data across your application. This eliminates the need for a database and makes portfolio data easily accessible throughout your app.

## File Structure

```
src/
  context/
    PortfolioContext.jsx    <- Global context provider and hook
  components/
    portfolio/
      Portfolio.jsx         <- Using context here
  pages/
    Projects.jsx            <- Using context here
  App.jsx                   <- Wrapped with PortfolioProvider
```

## Portfolio Data Structure

### Categories (with their IDs):

- `web-dev` - Web Development (3 projects)
- `social-media` - Social Media Marketing (3 projects)
- `digital-marketing` - Digital Marketing (3 projects)
- `video-editing` - Video Editing (3 projects)
- `brand-building` - Brand Building (3 projects)
- `graphic` - Graphic Design (3 projects)

### Each Portfolio Item Contains:

```javascript
{
  id: number,                  // Unique identifier
  title: string,              // Work title
  company: string,            // Client/Company name
  category: string,           // Category name (display)
  categoryId: string,         // Category ID (for filtering)
  tags: string[],             // Technology/skill tags
  description: string,        // One-line description
  image: string,              // Image URL
  results: string             // Results/achievements
}
```

## How to Use in Components

### 1. Import the hook

```javascript
import { usePortfolio } from "../../context/PortfolioContext";
```

### 2. Use the hook in your component

```javascript
const MyComponent = () => {
  const {
    getAllPortfolio,
    getPortfolioByCategory,
    getPortfolioById,
    getCategoriesWithData,
  } = usePortfolio();

  // Your code here
};
```

### 3. Available Methods

#### `getAllPortfolio()`

Returns entire portfolio data object organized by category.

```javascript
const allData = getAllPortfolio();
// Returns: { 'web-dev': [...], 'social-media': [...], ... }
```

#### `getPortfolioByCategory(categoryId)`

Returns portfolio items for a specific category.

```javascript
const webProjects = getPortfolioByCategory("web-dev");
// Returns: [{ id: 1, title: "...", ... }, ...]
```

#### `getPortfolioById(id)`

Returns a single portfolio item by ID.

```javascript
const project = getPortfolioById(1);
// Returns: { id: 1, title: "TechFlow E-commerce Platform", ... }
```

#### `getCategoriesWithData()`

Returns all categories with their project count and data.

```javascript
const categories = getCategoriesWithData();
// Returns: [
//   { id: 'web-dev', projects: [...], count: 3 },
//   { id: 'social-media', projects: [...], count: 3 },
//   ...
// ]
```

## Examples

### Example 1: Display all portfolio items

```javascript
const { getAllPortfolio } = usePortfolio();

const allItems = Object.values(getAllPortfolio()).flat();

return (
  <div>
    {allItems.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.company}</p>
        <p>{item.description}</p>
        <div>{item.tags.join(", ")}</div>
      </div>
    ))}
  </div>
);
```

### Example 2: Display by category

```javascript
const { getPortfolioByCategory } = usePortfolio();

const webProjects = getPortfolioByCategory("web-dev");

return (
  <div>
    <h2>Web Development Projects</h2>
    {webProjects.map((project) => (
      <div key={project.id}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} />
        <p>{project.results}</p>
      </div>
    ))}
  </div>
);
```

### Example 3: Filter by category selector

```javascript
const { getPortfolioByCategory, getCategoriesWithData } = usePortfolio();
const [selectedCategory, setSelectedCategory] = useState("web-dev");

const categories = getCategoriesWithData();
const projects = getPortfolioByCategory(selectedCategory);

return (
  <div>
    {categories.map((cat) => (
      <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}>
        {cat.id} ({cat.count})
      </button>
    ))}

    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);
```

## Where It's Already Implemented

1. **[App.jsx](src/App.jsx)** - Wrapped entire app with `<PortfolioProvider>`
2. **[Portfolio.jsx](src/components/portfolio/Portfolio.jsx)** - Displays all portfolio items with category filtering
3. **[Projects.jsx](src/pages/Projects.jsx)** - Displays selected portfolio items on home page

## Adding New Portfolio Items

To add more portfolio items, edit [src/context/PortfolioContext.jsx](src/context/PortfolioContext.jsx) and add new objects to the appropriate category array in the `portfolioData` object:

```javascript
const portfolioData = {
  "web-dev": [
    // ... existing items
    {
      id: 4, // new unique ID
      title: "Your Project Title",
      company: "Client Company",
      category: "Web Development",
      categoryId: "web-dev",
      tags: ["React", "Node.js", "etc"],
      description: "One line description",
      image: "image-url",
      results: "Results achieved",
    },
  ],
  // ... other categories
};
```

## Total Portfolio Items

Currently, the system has **18 portfolio items** across 6 categories, with 3 items per category.
