module.exports = {
  siteTitle: 'Thiti Tongumpun',
  siteDescription: `Thiti Profile`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Thiti Tongumpun',
  githubUsername: 'thititongumpun',
  authorAvatar: '/images/dog.jpeg',
authorDescription: `My name is <strong>Thiti Tongumpun.</strong> Age 27 Years Old. Current Working for System Analyst at Homepro Co.,Ltd. `,
  skills: [
    {
      name: 'C#',
      level: 80
    },
    {
      name: 'JavaScript',
      level: 80
    },
    {
      name: 'Python',
      level: 70
    },
    {
      name: 'Git',
      level: 85
    },
    {
      name: 'Containers',
      level: 80
    },
    {
      name: 'Google',
      level: 100
    },
  ],
  jobs: [
    {
      company: "Home Product Center Public Company Limited",
      begin: {
        month: 'Mar',
        year: '2021'
      },
      duration: null,
      occupation: "System Analyst",
      description: "Gathering user requirement with team software development and managing software development team., Assists in the design, coding and testing the system of technical solutions."
  
    },  {
      company: "Adev Solution Plus Co., Ltd.",
      begin: {
        month: 'sep',
        year: '2020'
      },
      duration: "7 Months (3 Months for Siam Piwat Consulting)",
      occupation: "Developer",
      description: "Software Developer, DevOps (Siam Piwat)"
  
    }, {
      company: "THAI-Amadeus Southeast Asia Co.,Ltd.",
      begin: {
        month: 'Jan',
        year: '2019'
      },
      duration: '1 year',
      occupation: "Business Development",
      description: "Frontend Developer, Analysis Business Corporate Plan, Flow-Chart for organization"
    }, {
      company: "THAI-Amadeus Southeast Asia Co.,Ltd.",
      begin: {
        month: 'Jan',
        year: '2018'
      },
      duration: '1 year',
      occupation: "Technical Support",
      description: "Build Test Deploy System, Frontend Developer"
  
    },
  ],
  portifolio: [
    {
      image: "/images/github.png",
      description: null,
      url: "https://github.com/thititongumpun"
    },
    {
      image: "/images/food.jpg",
      description: null,
      url: "https://thititongumpun.github.io/FoodGenerate/"
    },
    {
      image: "/images/covid.jpg",
      description: null,
      url: "https://thititongumpun.github.io/th-covid-stats/"
    },
    {
      image: "/images/github_actions.png",
      description: null,
      url: "https://thititongumpun.github.io/vuejs-cicd/"
    }, 
    {
      image: "/images/shopping.png",
      description: null,
      url: "https://thititongumpun.github.io/shopping-cart/"
    } 
  ],
  social: {
    github: "https://github.com/thititongumpun",
    email: "thiti180536@gmail.com"
  },
  siteUrl: 'https://github.com/thititongumpun',
  pathPrefix: '/cv', // Note: it must *not* have a trailing slash.
  siteCover: 'null',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true,
  display: 'minimal-ui',
  icon: 'src/assets/resume.png',
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