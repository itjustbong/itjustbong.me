const CONFIG = {
  // profile setting (required)
  profile: {
    name: "봉승우",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "FE DEV",
    bio: "기술의 발전에 낙오되는 사람이 없도록",
    email: "qhdgkdbs@gmail.com",
    linkedin: "승우-봉-19108514a",
    github: "itjustbong",
    instagram: "itjustbong",
  },
  projects: [
    {
      name: `itjustbong.me`,
      href: "itjustbong.me",
    },
  ],
  // blog setting (required)
  blog: {
    title: "ITJUSTBONG",
    description: "itjustbong's blog",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://www.itjustbong.me",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["봉승우", "itjustbong"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "itjustbong/itjustbong.me",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
