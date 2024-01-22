import I18n from "./index";

/**
 * Example translation maps for different languages.
 */
const translations = {
  en: {
    greeting: "Hello!",
    name: "Name",
  },
  ar: {
    greeting: "مرحبا!",
    name: "الاسم",
  },
};

/**
 * Create an instance of the I18n class with the default language and translations.
 */
const i18n = new I18n("ar", translations);

/**
 * Get a localized string using the translate function.
 * In this example, it retrieves the localized greeting.
 */
const greeting = i18n.translate("greeting");
const name = i18n.translate("name");

console.log(greeting);
console.log(name);
