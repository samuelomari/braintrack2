#!/bin/bash

# Braintrack Deployment Script
# This script prepares the project for production deployment

set -e

echo "🚀 Starting Braintrack deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run tests
echo "🧪 Running tests..."
npm test

# Build for production
echo "🔨 Building for production..."
npm run build

# Check file sizes
echo "📊 Checking file sizes..."
echo "CSS files:"
ls -lh *.min.css 2>/dev/null || echo "No minified CSS found"
echo "JavaScript files:"
ls -lh *.min.js 2>/dev/null || echo "No minified JS found"

echo "✅ Deployment preparation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Commit and push your changes to GitHub"
echo "2. GitHub Actions will automatically deploy to GitHub Pages"
echo "3. Your site will be available at: https://samuelomari.github.io/braintrack2/"
echo ""
echo "🔍 To preview locally:"
echo "npm run dev"