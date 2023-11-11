/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    colors: {
      primary: "#f2ff5b",
      secondary: "#89ff69",
      text: "#e1e1e1",
      "text-secondary": "#c9c9c9",
      background: "#0c0c0c"
    },

    fontFamily: {
      headers: "'Comfortaa', sans-serif;",
      main: '"Fira Sans", sans-serif;',
      terminal: "'Iosevka', monospace;",
      subheader: "'Fira Code', monospace;"
    },

    fontSize: {
      h1: [
        "5.0625rem",
        {
          fontWeight: 700,
          letterSpacing: "-0.02em"
        }
      ],
      "sub-h1": [
        "3.375rem",
        {
          fontWeight: 450,
          letterSpacing: "-0.02em"
        }
      ],
      h2: [
        "3.375rem",
        {
          fontWeight: 500
        }
      ],
      h3: [
        "2.25rem",
        {
          fontWeight: 500
        }
      ],
      h4: [
        "2.25rem",
        {
          fontWeight: 400
        }
      ],
      h5: [
        "1.5rem",
        {
          fontWeight: 400
        }
      ],
      h6: [
        "1rem",
        {
          fontWeight: 400
        }
      ],

      h1m: [
        "3.25rem",
        {
          fontWeight: 600,
          letterSpacing: "-0.02em"
        }
      ],
      "sub-h1m": [
        "1.25rem",
        {
          fontWeight: 400,
          letterSpacing: "-0.02em"
        }
      ],
      h2m: [
        "1.625rem",
        {
          fontWeight: 500
        }
      ],
      h3m: [
        "1.3125rem",
        {
          fontWeight: 500
        }
      ],
      h4m: [
        "1.25rem",
        {
          fontWeight: 400
        }
      ],
      h5m: [
        "1rem",
        {
          fontWeight: 400
        }
      ],
      h6m: [
        "0.75rem",
        {
          fontWeight: 400
        }
      ]
    }
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        ".text-responsive-h1": {
          "@apply text-h1m lg:text-h1": {}
        },
        ".text-responsive-sub-h1": {
          "@apply text-sub-h1m lg:text-sub-h1": {}
        },
        ".text-responsive-h2": {
          "@apply text-h2m lg:text-h2": {}
        },
        ".text-responsive-h3": {
          "@apply text-h3m lg:text-h3": {}
        },
        ".text-responsive-h4": {
          "@apply text-h4m lg:text-h4": {}
        },
        ".text-responsive-h5": {
          "@apply text-h5m lg:text-h5": {}
        },
        ".text-responsive-h6": {
          "@apply text-h6m lg:text-h6": {}
        }
      });
    }
  ]
};