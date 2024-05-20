function renderLicenseBadge(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license || license === 'None') {
      return '';
  }
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache 2.0':
          return 'https://www.apache.org/licenses/LICENSE-2.0';
      case 'BSD 3-Clause':
          return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
          return '';
  }
}

function renderLicenseSection(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

function renderSection(title, content) {
  if (!content) {
      return '';
  }
  return `## ${title}
${content}
`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${data.license && data.license !== 'None' ? '- [License](#license)\n' : ''}
${data.contributing ? '- [Contributing](#contributing)\n' : ''}
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
${renderSection('Contributing', data.contributing)}
${renderSection('Tests', data.tests)}
${renderSection('Credits', data.credits)}

## Questions
If you have any questions, please feel free to contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
