module.exports = {
  siteTitle: 'Thiti Tongumpun',
  siteDescription: `Thiti Profile`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Thiti Tongumpun',
  githubUsername: 'thititongumpun',
  authorAvatar: '/images/dog.jpeg',
  authorDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  skills: [
    {
      name: 'A',
      level: 70
    },
    {
      name: 'B',
      level: 60
    },
    {
      name: 'C',
      level: 50
    },
    {
      name: 'D',
      level: 40
    },
    {
      name: 'E',
      level: 60
    },
    {
      name: 'F',
      level: 70
    },
  ],
  jobs: [
    {
      company: "A",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: null,
      occupation: "A",
      description: "A"
  
    },  {
      company: "B",
      begin: {
        month: 'apr',
        year: '2018'
      },
      duration: null,
      occupation: "B",
      description: "B"
  
    }, {
      company: "C",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: 'C',
      occupation: "C",
      description: "C"
    }, {
      company: "D",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: 'D',
      occupation: "D",
      description: "D"
  
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
  ],
  social: {
    github: "https://github.com/thititongumpun",
    email: "thiti180536@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/bg.jpeg',
  // googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}