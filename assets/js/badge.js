// Defines constants representing Markdown License badges
const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gnuGpl3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const gnuGpl2 = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
const bsd2 = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
const bsd3 = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
const boost = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

// Declares and defines a map that maps each license name to its badge
const licenseBadge = new Map();
licenseBadge.set("MIT License", mit);
licenseBadge.set("GNU GPL v3 License", gnuGpl3);
licenseBadge.set("GNU GPL v2 License", gnuGpl2);
licenseBadge.set("Apache License 2.0", apache);
licenseBadge.set("BSD-2 License", bsd2);
licenseBadge.set("BSD-3 License", bsd3);
licenseBadge.set("Boost Software License", boost);

// Exports the map
exports.licenseBadge = licenseBadge;