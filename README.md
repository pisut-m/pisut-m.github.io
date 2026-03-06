# Academic Portfolio Website

A clean, professional portfolio website designed for academics, researchers, and educators to showcase their work, publications, teaching, and contact information.

## 🎨 Design Features

- **Refined Academic Aesthetic**: Elegant typography using Cormorant Garamond (display) and Work Sans (body)
- **Professional Color Palette**: Warm earth tones with accent highlights
- **Smooth Animations**: Subtle fade-ins and transitions for a polished feel
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Clean Layout**: Easy to navigate with clear hierarchy

## 📁 File Structure

```
portfolio/
├── index.html          # Home page (bio, highlights, experience)
├── research.html       # Research interests, publications, projects
├── teaching.html       # Teaching philosophy, courses, advising
├── contact.html        # Contact information and guidelines
├── styles.css          # Complete styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** named `yourusername.github.io`
2. **Upload all files** to the repository
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save
4. Your site will be live at `https://yourusername.github.io`

### Option 2: Local Development

1. **Download all files** to a folder on your computer
2. **Open index.html** in your web browser
3. **Edit the files** using any text editor (VS Code, Sublime Text, etc.)

## ✏️ Customization Guide

### 1. Personal Information

Replace placeholder text in all HTML files:

- `Your Name` → Your actual name
- `[Your Field]` → Your academic field
- `[Your Institution]` → Your university/organization
- `your.email@institution.edu` → Your email
- `YN` → Your initials (in nav logo)

### 2. Profile Photo

Replace the placeholder in `index.html`:

```html
<!-- Find this section: -->
<div class="placeholder-image">
    <span>Your Photo</span>
</div>

<!-- Replace with: -->
<img src="path/to/your-photo.jpg" alt="Your Name">
```

### 3. Colors (Optional)

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-accent: #c17a3f;        /* Main accent color */
    --color-accent-light: #d4996b;  /* Lighter accent */
    --color-accent-dark: #9a5f2e;   /* Darker accent */
}
```

### 4. Content Sections

#### Home Page (`index.html`)
- Bio section: Add your background and research interests
- Highlights: Showcase 2-3 key achievements
- Timeline: List your academic and professional positions

#### Research Page (`research.html`)
- Research interests: Describe your main areas
- Publications: Organize by year, add links to PDFs/code
- Projects: Highlight current and past projects

#### Teaching Page (`teaching.html`)
- Philosophy: Share your teaching approach
- Courses: List current and past courses
- Advising: Mention students you're working with
- Resources: Link to materials or workshops

#### Contact Page (`contact.html`)
- Update office location, phone, email
- Add social media links (Google Scholar, ORCID, GitHub, etc.)
- Set office hours
- Provide guidelines for contacting you

### 5. Navigation Logo

Change `YN` to your initials in the nav-logo class across all pages:

```html
<a href="index.html" class="nav-logo">YN</a>
```

### 6. Footer Links

Update footer links in all HTML files:

```html
<p class="footer-links">
    <a href="mailto:your.email@institution.edu">Email</a> ·
    <a href="your-google-scholar-url" target="_blank">Google Scholar</a> ·
    <a href="your-github-url" target="_blank">GitHub</a>
</p>
```

## 🎯 Adding Content

### Adding a Publication

In `research.html`, copy this template:

```html
<article class="publication">
    <h4 class="pub-title">Your Paper Title</h4>
    <p class="pub-authors"><strong>Your Name</strong>, Co-authors</p>
    <p class="pub-venue"><em>Conference/Journal Name</em>, Year</p>
    <p class="pub-description">Brief description of the work.</p>
    <div class="pub-links">
        <a href="link-to-pdf" class="pub-link">PDF</a>
        <a href="link-to-code" class="pub-link">Code</a>
    </div>
</article>
```

### Adding a Course

In `teaching.html`, copy this template:

```html
<article class="course-card">
    <div class="course-header">
        <h4 class="course-title">Course Name & Number</h4>
        <span class="course-term">Semester Year</span>
    </div>
    <p class="course-level">Level (Undergraduate/Graduate)</p>
    <p class="course-description">Course description here.</p>
    <div class="course-topics">
        <span class="topic-tag">Topic 1</span>
        <span class="topic-tag">Topic 2</span>
    </div>
</article>
```

## 🔧 Advanced Customization

### Adding a CV Download

Add a link to your CV in the navigation or on any page:

```html
<a href="path/to/your-cv.pdf" class="cv-link" download>Download CV</a>
```

### Adding Google Analytics (Optional)

Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Adding a Blog Section

Create a new `blog.html` page following the same structure as other pages, then add it to the navigation.

## 📱 Responsive Breakpoints

The site automatically adapts to different screen sizes:
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Tips

1. **Keep it updated**: Regularly add new publications, courses, and projects
2. **Professional photo**: Use a high-quality, professional headshot
3. **Proofread**: Check for typos and broken links
4. **Test on mobile**: View your site on different devices
5. **SEO**: Use descriptive page titles and meta descriptions
6. **Accessibility**: Ensure good color contrast and alt text for images

## 🆘 Troubleshooting

**Q: My site isn't showing up on GitHub Pages**
- Make sure the repository is named correctly (`yourusername.github.io`)
- Check that GitHub Pages is enabled in Settings
- Wait a few minutes for the site to build

**Q: CSS isn't loading**
- Check that `styles.css` is in the same folder as your HTML files
- Make sure the file path in `<link rel="stylesheet" href="styles.css">` is correct

**Q: Images aren't displaying**
- Verify the image file path is correct
- Check that image files are uploaded to your repository

## 📄 License

Feel free to use this template for your own portfolio. Attribution is appreciated but not required.

## 🤝 Support

If you encounter issues or have questions, please check that all files are properly uploaded and paths are correct.

---

**Good luck with your portfolio! 🎓**
