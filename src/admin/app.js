import Logo from "./extensions/logo.png";
import favicon from "./extensions/favicon.ico";

const config = {
  auth: {
    logo: Logo,
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo: Logo,
  },
  tutorials: false,
  notifications: {
    releases: false,
  },

  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Storify Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Production",
      "Auth.form.welcome.title": "Welcome to Storify",
      "Auth.form.welcome.subtitle": "Login to your account",
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
