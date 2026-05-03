// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "ABOUT",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "RESEARCH",
          description: "My research focuses on time series econometrics and dynamic causal inference.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "BLOG",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is the curriculum vitae of Eunkyu Seong.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-are-the-bank-of-korea-39-s-inflation-forecasts-biased-toward-the-target",
      
        title: "Are the Bank of Korea&#39;s Inflation Forecasts Biased Toward the Target?",
      
      description: "A summary of our paper published in the Journal of Forecasting (2025).",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/jof-bok-inflation/";
        
      },
    },{id: "news-econometrics-workshop-seoul-national-university-korea",
          title: 'Econometrics Workshop, Seoul National University, Korea',
          description: "",
          section: "News",},{id: "news-2025-korea-s-allied-economic-associations-annual-meeting-hannam-university-korea",
          title: '2025 Korea’s Allied Economic Associations Annual Meeting, Hannam University, Korea',
          description: "",
          section: "News",},{id: "news-the-19th-international-symposium-on-econometric-theory-and-applications-seta-2025-university-of-macau-macau-website",
          title: 'The 19th International Symposium on Econometric Theory and Applications (SETA 2025), University of...',
          description: "",
          section: "News",},{id: "news-invited-seminar-university-of-sydney-australia-website",
          title: 'Invited Seminar, University of Sydney, Australia [website]',
          description: "",
          section: "News",},{id: "news-workshop-on-recent-advances-in-econometrics-seoul-national-university-korea-program",
          title: 'Workshop on Recent Advances in Econometrics, Seoul National University, Korea [program]',
          description: "",
          section: "News",},{id: "news-australasian-econometric-conference-of-the-association-of-econometricians-ae2-website-macquarie-university-australia",
          title: 'Australasian Econometric Conference of the Association of Econometricians (AE2) [website], Macquarie University, Australia...',
          description: "",
          section: "News",},{id: "news-2026-korea-s-allied-economic-associations-annual-meeting-program-chungang-university-korea",
          title: '2026 Korea’s Allied Economic Associations Annual Meeting [program], Chungang University, Korea',
          description: "",
          section: "News",},{id: "news-snu-econometrics-brown-bag-website-seoul-national-university-seoul-scheduled-in-june",
          title: 'SNU Econometrics Brown Bag [website], Seoul National University, Seoul (Scheduled in June)',
          description: "",
          section: "News",},{id: "news-the-20th-international-symposium-on-econometric-theory-and-applications-seta-2026-website-university-of-tokyo-tokyo-scheduled-in-june",
          title: 'The 20th International Symposium on Econometric Theory and Applications (SETA 2026) [website], University...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%6F%63%75%70%39%36@%73%6E%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/EK-Seong", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=djaDDCgAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/EKSeong", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
