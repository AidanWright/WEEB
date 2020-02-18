const fs = require("fs");
const wipeDependencies = () => {
  const file = fs.readFileSync("package.json");
  const content = JSON.parse(file);
  let keys = Object.keys(content.devDependencies);
  for (const devDep in content.devDependencies) {
    content.devDependencies[devDep] = "*";
  }
  fs.writeFileSync("package.json", JSON.stringify(content));
  console.log("Done!\nPlease run:\n");
  process.stdout.write("npm i ");
  for (let i in keys) {
    process.stdout.write(Object.keys(content.devDependencies)[i] + " ");
  }
  process.stdout.write("--save-dev");
};
if (require.main === module) {
  wipeDependencies();
} else {
  module.exports = wipeDependencies;
}
