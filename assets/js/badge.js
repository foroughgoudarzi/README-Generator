const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gnuGpl3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const gnuGpl2 = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
const bsd2 = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
const bsd3 = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
const boost = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

function findBadge(license) {
    switch (license) {
      case "MIT License":
        return mit;
      case "GNU GPL v3 License":
        return gnuGpl3;
      case "GNU GPL v2 License":
        return gnuGpl2;
      case "Apache License 2.0":
        return apache;
      case "BSD-2 License":
        return bsd2;
      case "BSD-3 License":
        return bsd3
      case "Boost Software License":
        return boost;
  
    }
  }

  exports.findBadge = findBadge;