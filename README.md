# ts-i18n

`ts-i18n` is a lightweight TypeScript library for seamless internationalization (i18n) in web applications. It offers simple language switching and translation support, making it easy to create multilingual user interfaces.

## Installation

Install the package using npm:

```bash
npm install ts-i18n
```

---

## Usage

- Importing

```ts
import I18n from "ts-i18n";
```

---

## Setting up Translation Maps

- Define your translation maps for each language:

```ts
const translations = {
  en: {
    greeting: "Hello!",
  },
  ar: {
    greeting: "مرحبًا!",
  },
};
```

---

## Creating an Instance

- Create an instance of the I18n class with the default language and translations:

```ts
const i18n = new I18n("en", translations);
```

---

## Setting the Current Language

- Set the current language, for example, based on the user's preferred language:

```ts
i18n.setLanguage("ar");
```

---

## Translating Strings

- Use the translate function to get localized strings:

```ts
const greeting = i18n.translate("greeting");

console.log(greeting); // Outputs "مرحبًا!"
```

---

## License
