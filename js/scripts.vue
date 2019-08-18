    new Vue({
        el: '#portfolio',
        data:  { 
            companies: [
                { 
                    name: 'Friendbuy',
                    href: 'https://friendbuy.com/',
                    imgSrc: 'images/friendbuy.png',
                    bullets: [ 
                        'A referral marketing company!', 
                        'Built encapsulated blocks of code that directed users of e-commerce sites to share referral links',
                        'Required <strong>pixel-perfect</strong> recreations of mockups',
                        'Updated the templates to be more <strong>responsive</strong>and <strong>WCAG compliant</strong>' 
                    ]
                },
                { 
                    name: 'Heart Cup',
                    href: 'https://heartcup.com',
                    imgSrc: 'images/heartcup.png',
                    bullets: [ 
                        'Contributed to the <strong>Vue</strong>-based front end as part of a small team', 
                        'Collaborated with the founder/designer to ideate new features, improve <strong>accessability</strong>, and create more consistent, performant, and intuitive styles',
                    ]
                },
                {
                    name: 'hi5.agency',
                    href: 'http://hi5.agency/#home/',
                    imgSrc: 'images/hi5.png',
                    bullets: [
                        'An innovative ad agency active in the entertainment industry',
                        'Utilized <strong>Vue</strong> to create web-based games for children, sweepstakes sites, and fan pages',
                        'Initialized server-less builds with <strong>AWS Lambda</strong> and <strong>Amazon Dynamo DB</strong>'
                    ]
                },
                {
                    name: 'Fashion Industry Client',
                    href: '',
                    imgSrc: 'images/fashion-landing-page.png',
                    imgCaption: '(Image is a page detail)',
                    bullets: ['Coded and maintained the landing page for a high-profile fashion-industry client, including creating a countdown clock for New York Fashion Week.']
                },
                {
                    name: 'Gigmor',
                    href: 'https://gigmor.com',
                    imgSrc: 'images/gigmor.png',
                    bullets: [
                            'A jobs marketplace connecting musicians and venues',
                            'Rebuilt a social network from the ground up using <strong>React</strong> and <strong>SASS</strong>',
                            'Developed new features, built out styles, and improved UX'
                    ]
                },
            ],
            projects: [
                {
                    name: 'The NPR Politics Podcast Directory',
                    href: 'https://jjkeith.github.io/npr-politics-podcast-directory/',
                    imgSrc: 'images/npr-pol-pod-dir.png',
                    imgCaption: '',
                    description: 'A single-page, React-based, Bootstrapped, front-end-only app that sorts and filters contributors to the NPR Politics Podcast.'
                },
                {
                    name: 'Vue Component Library',
                    href: 'https://vue-component-demos.netlify.com/#/',
                    imgSrc: 'images/vue-component-library.png',
                    imgCaption: '',
                    description: 'A collection of custom-coded, style-light Vue.js-based components meant for reuse. Includes a handful of Sass functions to quickly generate css grids and white space classes.'
                },
                {
                    name: 'Kaitlin.today',
                    href: 'http://kaitlin.today',
                    imgSrc: 'images/kaitlin-dot-today.gif',
                    imgCaption: '',
                    description: 'A hand-coded minimalist blog with a custom flexbox grid created with the narrow purpose of delivering a digestible quantity of news to one person &mdash; the titular Kaitlin &mdash; every day.'
                },
                {
                    name: 'Near Hear',
                    href: 'https://nearhear.herokuapp.com/',
                    imgSrc: 'images/nearhear.png',
                    imgCaption: '',
                    description: 'A Node.js-based app built in a three-person team with the Google Maps and Bands in Town APIs that allows users to find what concerts are happening near them and get ticket information.'
                },
                {
                    name: 'Pokébook',
                    href: 'http://pokemon-book.herokuapp.com/',
                    imgSrc: 'images/pokemonbook.png',
                    imgCaption: '',
                    description: 'A full-CRUD, Bootsrapped, Ruby on Rails app created during a one-week sprint that allows users to make an account and maintain a list of their favorite Pokémon.'
                },
                {
                    name: 'Bright Lights, Big Kitty',
                    href: 'http://jjkeith.github.io/Bright-Lights-Big-Kitty/',
                    imgSrc: 'images/bright-lights.png',
                    imgCaption: '',
                    description: 'A logic-driven card game built with JavaScript, JQuery HTML, CSS, and a gratuitous quantity of cat gifs.'
                },
            ],
            navLinks: [
                {
                    href: 'mailto:jj@jjkeith.net',
                    alt: 'Email',
                    iconClass: 'fas fa-envelope',
                },
                {
                    href: 'http://github.com/jjkeith',
                    alt: 'Github',
                    iconClass: 'fab fa-github',
                },
                {
                    href: 'http://www.linkedin.com/in/jjkeith',
                    alt: 'LinkedIn',
                    iconClass: 'fab fa-linkedin',
                },
            ],
            
            // rainbow: ['#f00', '#ff0', '#00FF00', '#00ffff', '#0000ff', '#f0f'],
            selectedLink: null,
            showMenu: false,
            theme: 'light',
        },
        computed: {
            rainbow() {
                // Remove colors from the array that have insufficient contrast
                return this.theme === 'light' ? ['#f00', '#ff0', '#00FF00', '#00ffff', '#f0f'] : ['#f00', '#00FF00', '#00ffff', '#0000ff', '#f0f']
            },
        },
        methods: {
            getLinkStyle(element) {
                return this.selectedLink === element ? {color: this.randomArrayItem(this.rainbow)} : {};
            },
            randomArrayItem(array) {
                return array[Math.floor(Math.random() * array.length)]
            },
            selectLink(element) {
                this.selectedLink = element;
            },
            toggleMenu() {
                return this.showMenu = !this.showMenu;
            },
            toggleTheme() {
                console.log(this.theme === 'light')
                return this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light';
            }
        }
    })