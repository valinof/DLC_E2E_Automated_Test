const fs = require("fs");

module.exports = (on, config) => {
  console.log("Plugin file loaded successfully");
  on("task", {
    readFile(filePath) {
      return fs.readFileSync(filePath, "utf8");
    },
    writeFile({ filePath, content }) {
      fs.writeFileSync(filePath, content, "utf8");
      return null; // tasks should return null or a value
    },
  });
};
