# Portfolio Website

A modern, fully responsive personal portfolio website built with React and Tailwind CSS. Features a clean design, smooth animations, and dark/light mode toggle.

## 🚀 Features

- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Component-Based**: Well-organized React components for easy maintenance

## 📋 Sections

1. **Hero Section**: Introduction with profile image, name, title, and call-to-action buttons
2. **About Me**: Background and experience as a MERN Stack Developer
3. **Skills**: Display of technical skills with icons
4. **Projects**: Showcase of 6+ projects with images, descriptions, and links
5. **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **React** 18.2.0 - UI library
- **Vite** 5.0.8 - Build tool
- **Tailwind CSS** 3.3.6 - Styling
- **Framer Motion** 10.16.4 - Animations

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and introduction paragraph
   - Replace profile image URL with your own image

2. **About Section** (`src/components/About.jsx`):
   - Modify the about me text to reflect your background

3. **Skills** (`src/components/Skills.jsx`):
   - Update the skills array with your technologies
   - Change icons and colors as needed

4. **Projects** (`src/data/projects.js`):
   - Update project data with your actual projects
   - Replace placeholder images with real project screenshots
   - Update demo and GitHub links

5. **Contact** (`src/components/Contact.jsx`):
   - Update social media links (GitHub, LinkedIn, Email)
   - Modify email address in the mailto link

### Styling

- **Colors**: Edit `tailwind.config.js` to change the primary color scheme
- **Spacing & Layout**: Modify Tailwind classes in component files
- **Animations**: Adjust Framer Motion animations in component files

### Add CV Download

1. Place your CV file in the `public` folder as `cv.pdf`
2. The "Download CV" button in the Hero section will automatically work

### Form Submission

The contact form currently simulates submission. To connect it to a backend:

1. Update the `handleSubmit` function in `src/components/Contact.jsx`
2. Add your backend API endpoint
3. Handle form submission accordingly

## 📝 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Built with ❤️ using React and Tailwind CSS

