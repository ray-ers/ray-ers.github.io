# Kien Pham — Personal Website

This repository contains the source code for my personal website:

**[kien-pham.com](https://kien-pham.com)**

The website presents my research, professional activities, teaching and service experience, projects, writing, and other areas of interest.

## About Me

I am Kien Pham, or Ray as how friends often call me, an environmental researcher working on urban ecosystems, ecosystem services, urban resilience, and nature-based solutions.

My work explores how urban environments can be assessed and planned more effectively, particularly through interdisciplinary approaches connecting food, water, soil, biodiversity, and human well-being.

The website also serves as a space for science communication, visualisation, reflective writing, and sharing research-related resources.

## Website Sections

The site currently includes:

* Research and professional profile
* Curriculum vitae
* Projects and creative work
* Academic and professional service
* Notes for ideas and life
* Teaching and learning resources
* Contact information

## Built With

The website is built with:

* [Jekyll](https://jekyllrb.com/)
* GitHub Pages
* Liquid templates
* Markdown
* HTML and SCSS
* The Joseph Jekyll theme, adapted for this website

## Repository Structure

```text
.
├── _config.yml          # Main Jekyll configuration
├── _data/               # Navigation and structured site data
├── _includes/           # Reusable interface components
├── _layouts/            # Page and post templates
├── _pages/              # Main website pages
├── _posts/              # Articles and blog posts
├── _sass/               # SCSS stylesheets
├── assets/              # Compiled styles, scripts, and other assets
├── images/              # Website images
├── index.html            # Homepage
└── README.md
```

## Running the Website Locally

### Requirements

Install:

* Ruby
* Bundler
* Jekyll

### Installation

Clone the repository:

```bash
git clone https://github.com/ray-ers/ray-ers.github.io.git
cd ray-ers.github.io
```

Install the required dependencies:

```bash
bundle install
```

Start the local development server:

```bash
bundle exec jekyll serve
```

Open the local site in your browser:

```text
http://localhost:4000
```

To include draft posts while developing:

```bash
bundle exec jekyll serve --drafts
```

## Editing the Website

Most website content can be updated through Markdown files.

* Edit `_config.yml` to update general website and author information.
* Edit files in `_pages/` to update permanent pages.
* Add articles to `_posts/` using the Jekyll filename format:

```text
YYYY-MM-DD-title.md
```

* Add images to the `images/` directory.
* Edit files in `_sass/` to modify the visual design.
* Edit navigation settings in `_data/`.

A typical post begins with YAML front matter:

```yaml
---
layout: post
title: "Post title"
date: 2026-07-17
description: "A short description of the article."
tags: [research, urban-ecosystems]
image: "/images/example.jpg"
---
```

## Deployment

The website is deployed through GitHub Pages from the `main` branch.

Changes pushed to the repository are automatically processed and published by GitHub Pages, subject to the repository’s deployment configuration.

The production website is available at:

**https://kien-pham.com**

## Acknowledgements

This website is based on the Joseph Jekyll theme, originally developed by Artem Sheludko. The theme has been adapted and extended for this personal academic website.

## Contact

For professional enquiries, research collaboration, or discussion of my work, visit the contact page on the website or connect with me through the social links provided there.
