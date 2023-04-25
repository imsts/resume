// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Stanislav',
    lastname: 'Tymoshchuk',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Novovolynsk, Peremogy Ave 1',
}

var footer = {
  social: {
    email: {
      text: 'imsts@gmail.com',
      href: 'mailto:imsts89@gmail.com',
    },
    phone: {
      text: '+380670000321',
      href: 'tel:+380670000321',
    },
    Linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/stanislav-tymoshchuk-827081266/',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handelbars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 8,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Sketching',
          isMain: true,
        },
        {
          name: 'Development of mockups',
          isMain: true,
        },
        {
          name: 'Designing in 3D',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Lutsk National Technical University',
          isEnd: true,
        },
        {
          name: 'IT-BRAINS',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Certificate Adobe After Effects',
          id: '723819',
        },
        {
          name: 'Certificate Adobe Photoshop',
          id: '847323',
        },
        {
          name: 'Certificate Autodesk 3ds Max',
          id: '793291',
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
            // 'https:://it-brains.com.ua'
          },
          duration: {
            from: '20.02.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https:://winddesign.world',
              about: 'info text..about..',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'text awards...111',
                },
                {
                  name: 'text awards...222',
                },
              ],
            },
          ],
        },
        // {
        //   position: 'Graphic Design',
        //   company: {
        //     name: 'Winddesign',
        //     url: 'https:://winddesign.world',
        //   },
        //   duration: {
        //     from: '20.02.2021',
        //     to: '20.02.2022',
        //   },
        //   projectAmount: 20,
        // },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
