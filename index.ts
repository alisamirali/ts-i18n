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
  private translations: { [lang: string]: TranslationMap };

  /**
   * Initializes a new instance of the I18n class.
   * @param defaultLanguage - The default language to use.
   * @param translations - A dictionary containing language-specific translation maps.
   */
  constructor(
    private currentLanguage: string,
    translations: { [lang: string]: TranslationMap }
  ) {
    this.currentLanguage = currentLanguage;
    this.translations = translations;
    this.setLanguage(currentLanguage); // Set the default language during initialization
  }

  /**
   * Sets the current language for translations.
   * @param language - The language code to set as the current language.
   */
  private setLanguage(language: string) {
    this.currentLanguage = language;
  }

  /**
   * Translates a given key to the currently set language.
   * @param key - The translation key to look up.
   * @returns The translated string for the given key, or the key itself if not found.
   */
  translate(key: string) {
    const translationMap = this.translations[this.currentLanguage];
    return translationMap ? translationMap[key] || key : key;
  }
}

export default I18n;
