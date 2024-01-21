/**
 * Represents a mapping of translation keys to corresponding strings in a specific language.
 */
type TranslationMap = {
  [key: string]: string;
};

/**
 * Internationalization (i18n) class for managing language switching and translation.
 */
class I18n {
  private currentLanguage: string;
  private translations: { [lang: string]: TranslationMap } = {};

  /**
   * Initializes a new instance of the I18n class.
   * @param defaultLanguage - The default language to use.
   * @param translations - A dictionary containing language-specific translation maps.
   */
  constructor(
    defaultLanguage: string,
    translations: { [lang: string]: TranslationMap }
  ) {
    this.currentLanguage = defaultLanguage;
    this.translations = translations;
  }

  /**
   * Sets the current language for translations.
   * @param language - The language code to set as the current language.
   */
  setLanguage(language: string): void {
    if (this.translations[language]) {
      this.currentLanguage = language;
    } else {
      console.warn(`Language "${language}" is not available.`);
    }
  }

  /**
   * Translates a given key to the currently set language.
   * @param key - The translation key to look up.
   * @returns The translated string for the given key, or the key itself if not found.
   */
  translate(key: string): string {
    const translationMap = this.translations[this.currentLanguage];
    if (translationMap && translationMap[key]) {
      return translationMap[key];
    } else {
      console.warn(
        `Translation key "${key}" not found for language "${this.currentLanguage}".`
      );
      return key;
    }
  }
}

export default I18n;
