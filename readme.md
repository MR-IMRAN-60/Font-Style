<h3 align="center">
  
  <p align="center"><img src="https://img.shields.io/badge/WLCM%20TO -Font Style Api-green?colorA=%23ff0000&colorB=%23017e40&style=flat-square">  
  
</h3>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Neuton&size=30&pause=1000&color=FF0000ED&background=000000&width=360&height=60&lines=Hello+World%2C+It%E2%80%99s+Me+MR+Imran;%F0%9D%99%B8%F0%9D%9A%83'%F0%9D%9A%9C+%F0%9D%99%BD%F0%9D%99%BE%F0%9D%9A%83+%F0%9D%99%B0+%F0%9D%99%B9%F0%9D%9A%84%F0%9D%9A%82%F0%9D%9A%83+%F0%9D%99%BD%F0%9D%99%B0%F0%9D%99%BC%F0%9D%99%B4+%F0%9D%99%B1%F0%9D%9A%81%F0%9D%99%BE+%F0%9F%A5%B1;%F0%9D%99%B8%F0%9D%9A%83'%F0%9D%9A%9C+%F0%9D%99%B0+%F0%9D%99%B1%F0%9D%9A%81%F0%9D%99%B0%F0%9D%99%BD%F0%9D%99%B3%F0%9F%94%A5;Respect+Mr.IMRAN+%F0%9F%A5%80;Thanks+My+All+Friend+%F0%9F%A4%99+%F0%9F%A5%B0)](https://git.io/typing-svg)

<a href="https://www.npmjs.com/package/imgur-uploader-api"><img alt="npm version" src="https://img.shields.io/npm/v/imgur-uploader-api.svg?style=flat-square"></a>
<img alt="version" src="https://img.shields.io/github/package-json/v/MR-IMRAN-60/Font-Style?label=github&style=flat-square">
<a href="https://www.npmjs.com/package/font-style-api"><img src="https://img.shields.io/npm/dm/font-style-api.svg?style=flat-square" alt="npm downloads"></a>
[![js dilvr](https://data.jsdelivr.com/v1/package/npm/font-style-api/badge)](https://www.jsdelivr.com/package/npm/font-style-api)


```markdown
# Font Style API Example

This repository demonstrates how to use the `font-style-api` package to apply various text styles such as bold, bold-italic, flaky, and subfont to a given text string.

## Prerequisites

Before you begin, ensure that you have Node.js installed on your machine.

You can check if you have Node.js installed by running the following command in your terminal:

```bash
node -v
```

If you don’t have it installed, you can download it from [here](https://nodejs.org/).

## Installation

1. Clone the repository or create a new project folder.
2. Run the following command to install the `font-style-api` package:

```bash
npm install font-style-api
```

## Usage

Create a new JavaScript file (e.g., `index.js`) and include the following code to apply different font styles to a string of text:

```javascript
const { apply, bold, boldItalic, flaky, subfont } = require('font-style-api');

const text = "Hello, World!";

// Apply bold style
const boldText = apply(text, bold);
console.log(boldText);

// Apply bold-italic style
const boldItalicText = apply(text, boldItalic);
console.log(boldItalicText);

// Apply flaky style
const flakyText = apply(text, flaky);
console.log(flakyText);

// Apply subfont style
const subfontText = apply(text, subfont);
console.log(subfontText);
```

### Available Styles

- `bold`: Applies a bold style to the text.
- `boldItalic`: Applies both bold and italic styles to the text.
- `flaky`: Applies a flaky, unstable style to the text.
- `subfont`: Applies a subscript font style to the text.

### Example Output

If you run the script, you will see the following output:

```
**Hello, World!**         // Bold text
***Hello, World!***       // Bold-italic text
⛔H𝓮𝗅𝗅𝗈, 𝗪𝗈𝗋𝗅𝗱!⛔      // Flaky text (simulated flaky style)
H₂O                       // Subfont text (subscript applied)
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of the `font-style-api` package for providing an easy-to-use solution for applying font styles programmatically.
```

This README provides a complete guide to setting up and using the script, with installation instructions, example usage, and a description of the available styles.
