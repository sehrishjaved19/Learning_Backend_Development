//The following code retrieves the last portion of a given file path and prints that value to the console:
const path = require('path');
let result = path.basename('05_advanced_node.js_modules/4_path_module.js');
console.log(result); //output: 4_path_module.js
