# Deployment Guide

## Prerequisites
- Git installed
- Node.js and npm (for development)
- GitHub account with SSH keys configured

## Local Development

### Installation
```bash
# Clone the repository
git clone git@github.com:samuelomari/braintrack2.git
cd braintrack2

# Install dependencies
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### Starting Development Server
```bash
# Install a simple HTTP server
npm install -g http-server

# Start server on port 8080
http-server -p 8080
```

## GitHub Pages Deployment

### Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select `main` branch as source
4. Save settings
5. Site will be available at `https://samuelomari.github.io/braintrack2/`

## Git Workflow

### Making Changes
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "type: description of changes"

# Push to GitHub
git push origin feature/your-feature-name
```

### Creating a Pull Request
1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your branch
4. Add description and submit
5. Wait for review

### Merging to Main
```bash
# Update main branch
git checkout main
git pull origin main

# Merge feature branch
git merge feature/your-feature-name

# Push changes
git push origin main
```

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize images with compression tools
- Use CSS and JavaScript bundlers
- Enable browser caching

## Security Considerations

- Keep dependencies updated
- Use environment variables for sensitive data
- Validate all user input
- Follow OWASP guidelines

## Troubleshooting

### SSH Authentication Issues
```bash
# Test SSH connection
ssh -T git@github.com

# If needed, regenerate SSH key
ssh-keygen -t ed25519 -C "email@example.com"
```

### Merge Conflicts
```bash
# Resolve conflicts manually in editor
# Then complete the merge
git add .
git commit -m "resolve merge conflicts"
```
