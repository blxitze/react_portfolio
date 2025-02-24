import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProjects: [
    {
      title: 'React Portfolio',
      bodyText: 'A personal portfolio built with React and Chakra UI.',
      techStack: ['React', 'CSS'],
      image: 'myReactPortfolio.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/blxitze/react_portfolio',
        },
      ],
    },
    {
      title: 'Django AMD Project',
      bodyText: 'A cool website for AMD GPU ',
      techStack: ['Django', 'Python'],
      image: 'amdDjango.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/aerosness/radeon-site-knockoff',
        },
      ],
    },
    {
      title: 'React Movie Gallery',
      bodyText: 'A simple movie gallery built on react',
      techStack: ['React'],
      image: 'movieGallery.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/blxitze/react-hw/tree/main/react-router',
        },
      ],
    },
    {
      title: 'The AIESEC Project',
      bodyText: 'AIESEC project, purely made on HTML/CSS',
      techStack: ['HTML/CSS'],
      image: 'aiesecProject.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/blxitze/ayan1232008.github.io',
        },
      ],
    },
    {
      title: 'React WeatherApp',
      bodyText: 'A small react project with Weather API',
      techStack: ['React'],
      image: 'weatherApp.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/blxitze/react-hw/tree/main/weather',
        },
      ],
    },
    {
      title: 'React ToDo',
      bodyText: 'Just a ToDo list, nothing special.',
      techStack: ['React'],
      image: 'todoList.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/blxitze/react-hw/tree/main/todo',
        },
      ],
    },
    {
      title: 'React Cinema',
      bodyText: 'A React cinema Project.',
      techStack: ['React'],
      image: 'kinoTheater.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/blxitze/react-hw/tree/main/react_movie',
        },
      ],
    },
    {
      title: '.NET Book Library',
      bodyText: 'A .NET Application for a library',
      techStack: ['.NET'],
      image: 'bookLibrary.png',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/blxitze/asp.net/tree/main/BookStore',
        },
      ],
    },
  ],
};


const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
