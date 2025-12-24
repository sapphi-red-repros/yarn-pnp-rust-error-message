const { ResolverFactory } = require("oxc-resolver");
const path = require("path");

const resolver = new ResolverFactory();

const zustandPathResult = resolver.sync(__dirname, "zustand");
const zustandEsmPath = path.resolve(zustandPathResult.path, "../esm");
console.log(zustandEsmPath);

const result = resolver.sync(
  zustandEsmPath,
  "use-sync-external-store/shim/with-selector.js"
);
console.log(result);
