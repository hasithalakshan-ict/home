# Hasitha ICT LMS — Customization Guide

## Files in this package
- index.html       → Your full website
- firebase-setup.md → How to connect Firebase (login/registration)
- README.md        → This file

## How to add your photos
1. Save your photo as: teacher.jpg  (place next to index.html)
2. Save your logo as:  logo.png     (place next to index.html)
The site will automatically use them.

## Customize YouTube lesson cards
Find the `lessons` array in the <script> section:
- Change `url` to your actual YouTube video link
- Change `title` to your video title
- Change `grade` to the target grade
- Change `duration` to video length

## Customize timetable cards
Search for "timetable-card" in the HTML.
Edit the day, time, class name, and medium for each slot.
To add a new day — copy an entire timetable-card block and paste it.

## Replace gallery images
Find the buildGallery() function.
To add real photos, replace the gallery-placeholder div with:
<img src="your-photo.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;">

## Add/remove testimonials
Find the "testimonials-grid" section.
Copy a testimonial-card block and update the name, grade, and review text.

## Change colors
At the top of the CSS find :root { }
- --red: change to any red shade
- --blue: change to any blue shade

## Deploy to the internet FREE
Option A: Firebase Hosting (see firebase-setup.md)
Option B: Netlify — drag & drop the folder at netlify.com/drop
Option C: GitHub Pages — free hosting at yourname.github.io

## WhatsApp link
The WhatsApp button is set to: wa.me/94740638741
To change: search "94740638741" and replace with your number.
