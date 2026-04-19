# Braintrack

Braintrack is a comprehensive study assistant platform designed to help students create personalized study guides, enhance learning experiences, and achieve academic success. The platform offers tools for study planning, focus timers, and educational resources tailored for students at all levels.

## Features

- **Personalized Study Guides**: Create and follow customized study plans.
- **Study Planner**: Interactive task list to organize study sessions.
- **Focus Timer**: Pomodoro-style timer to maintain focus during study sessions.
- **Educational Resources**: Articles, tips, and strategies for better learning.
- **Contact Form**: Easy way to get in touch for support or feedback.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: PHP (for form submission)
- **Styling**: Custom CSS with Roboto font from Google Fonts
- **Icons/Images**: PNG assets for branding and visuals

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samuelomari/braintrack2.git
   cd braintrack2
   ```

2. Ensure you have a web server with PHP support (e.g., Apache, Nginx with PHP).

3. Place the project files in your web server's root directory.

4. Open your browser and navigate to the project URL (e.g., `http://localhost/braintrack2/index.html`).

## Usage

- **Home Page**: Overview of Braintrack's mission, vision, and values.
- **About Page**: Detailed information about the platform's story and offerings.
- **Contact Page**: Get in touch via the contact form or direct contact information.
- **Study Guide Page**: Access study tips, planner, and focus timer.

### Study Planner
- Add tasks by typing in the input field and clicking "Add Task".
- Click on a task to mark it as completed (strikethrough).

### Focus Timer
- Click "Start" to begin a 25-minute focus session.
- Click "Reset" to restart the timer.

## Project Structure

```
braintrack2/
├── index.html          # Home page
├── info.html           # About page
├── contact.html        # Contact page
├── studyguide.html     # Study guide page
├── style.css           # Shared styles
├── index.css           # Home page specific styles
├── contact.css         # Contact page specific styles
├── studyguide.css      # Study guide page specific styles
├── script.js           # JavaScript for planner and timer
├── submit_form.php     # PHP form handler
├── logo.png            # Logo image
├── background.png      # Background image
├── LICENSE             # MIT License
└── README.md           # This file
```

## Deployment

### Automated Deployment (GitHub Actions)

The project includes automated deployment to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to the `main` branch triggers:
   - Automated testing
   - Code quality checks
   - Accessibility testing
   - Production build with minification
   - Deployment to GitHub Pages

2. **Live Site**: Visit your deployed site at: `https://samuelomari.github.io/braintrack2/`

### Manual Deployment

For manual deployment:

```bash
# Run the deployment script
./deploy.sh

# Or manually:
npm ci
npm test
npm run build
```

### Local Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev

# Performance audit
npm run audit:performance
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **deploy.yml**: Handles production deployment to GitHub Pages
- **quality.yml**: Runs code quality checks on all PRs and pushes
- **Automated checks**: HTML validation, CSS linting, accessibility testing, security auditing

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Samuel Omari - [samuel.omari@student.moringaschool.com]

Project Link: [https://github.com/samuelomari/braintrack2](https://github.com/samuelomari/braintrack2)

---

*Success doesn't come from what you do occasionally, but what you do consistently.*
