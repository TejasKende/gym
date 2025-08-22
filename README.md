# Gym Website

A modern, responsive gym website built with React, Bootstrap 5, and custom CSS.

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern UI**: Clean, professional design with red fitness theme
- **Navigation**: Smooth navigation with active/hover underline effects
- **Multiple Pages**: Home, About, Services, Gallery, and Contact pages

## Pages

### Home Page
- Hero banner with gym background image
- "Transform Your Body, Transform Your Life" headline
- "Join Now" CTA button
- Feature highlights with emoji icons

### About Page
- Mission statement and company values
- Feature cards with emoji icons
- Expert trainers, fitness programs, community focus

### Services Page
- 5 core services with emoji icons
- Personal Training, Strength & Conditioning, Cardio & CrossFit
- Yoga & Zumba Classes, Nutrition Guidance

### Gallery Page
- Grid of gym-related Unsplash images
- Responsive layout with Bootstrap grid

### Contact Page
- Contact form (Name, Email, Phone, Message)
- Gym address and contact information
- Google Maps embed

## Technologies Used

- **React 18**: Frontend framework
- **React Router 6**: Client-side routing
- **Bootstrap 5**: CSS framework for responsive design
- **Custom CSS**: Additional styling and animations

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gym-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
gym-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Styling

- **Color Scheme**: Red (#dc3545) fitness theme
- **Typography**: Bootstrap default fonts
- **Icons**: Emoji icons for better compatibility
- **Animations**: Hover effects and smooth transitions
- **Responsive**: Mobile-first Bootstrap grid system

## Deployment

The app is ready for deployment to platforms like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
