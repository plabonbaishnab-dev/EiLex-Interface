# EiLex-Interface

📌 Project Overview

EiLex is a front-end movie browsing website inspired by modern OTT platforms. The goal of this project was to create a visually engaging movie interface using real-time data from an external API instead of static content.

The website dynamically loads movie data such as posters, backdrops, release year, genre, and description using the TMDB (The Movie Database) API.

🎨 Theme & Design Concept

The design is inspired by OTT platforms like Netflix and Prime Video.

The main focus was:

A cinematic full-screen hero banner

Dynamic background images that change with movie selection

A carousel for browsing movies

Smooth transitions and modern UI styling

Clean typography with readable overlays

Each movie selection updates:

Background image

Movie title

Release year

Description

The design uses dark overlays to improve text readability over dynamic backdrops.

⚙️ Technologies Used

HTML

CSS

JavaScript

Materialize CSS (for carousel)

TMDB API (for movie data)

🔄 Features

Dynamic movie loading from TMDB API

Real movie posters and backdrop images

Carousel-based movie selection

Dynamic banner updates

Search functionality (fetches results from API)

Responsive layout

Styled interactive search bar

Styled action buttons (Play / My List)

🧠 How It Works

On page load, predefined movies are fetched from TMDB using the API.

The movie data is processed and rendered dynamically using JavaScript.

Clicking on a carousel item changes the banner background and activates corresponding content.

The search bar allows users to fetch new movies from the API.

Genre names are mapped from TMDB genre IDs and displayed next to the release year.

📷 UI Structure

Top navigation bar

Expanding search bar

Full-screen hero section

Left: Movie details

Right: Interactive carousel

Background changes based on selected movie

🚀 Future Improvements

Add movie rating display

Add trailer popup modal

Add genre-based filtering

Add “My List” functionality with local storage

Improve animations between movie transitions

🎓 Purpose of This Project

This project was built to:

Practice API integration

Understand dynamic DOM rendering

Improve front-end design skills

Build a portfolio-ready project
