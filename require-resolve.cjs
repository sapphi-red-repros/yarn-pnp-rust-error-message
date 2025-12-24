const path = require("path");

const zustandPathResult = require.resolve("zustand");
const zustandEsmPath = path.resolve(zustandPathResult, "../esm");
console.log(zustandEsmPath);

const result = require.resolve(
  "use-sync-external-store/shim/with-selector.js",
  { paths: [zustandEsmPath] }
);
console.log(result);
