const docHeader = document.getElementsByTagName("head")[0];
const designLanguageTheme = document.createElement("link");
designLanguageTheme.rel = "stylesheet";
designLanguageTheme.type = "text/css";
designLanguageTheme.href = "/public/css/design_language.css";
docHeader.appendChild(designLanguageTheme);
