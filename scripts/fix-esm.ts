import * as fs from "fs";
import * as path from "path";

const buildDir = path.join(process.cwd(), "build/esm");

const RELATIVE_IMPORT_RE = /(from\s+['"])(\.?\.\/[^'"\n]+)(['"])/g;
const RELATIVE_SIDE_EFFECT_IMPORT_RE =
  /(import\s+['"])(\.?\.\/[^'"\n]+)(['"])/g;

const KNOWN_EXTENSIONS = [".js", ".mjs", ".cjs", ".json", ".node"] as const;

function hasKnownExtension(specifier: string) {
  return KNOWN_EXTENSIONS.some((ext) => specifier.endsWith(ext));
}

function resolveWithExtension(fromFile: string, specifier: string) {
  if (!specifier.startsWith("./") && !specifier.startsWith("../")) {
    return specifier;
  }

  if (hasKnownExtension(specifier)) {
    return specifier;
  }

  const dirname = path.dirname(fromFile);
  const absoluteBase = path.resolve(dirname, specifier);

  for (const ext of [".js", ".mjs", ".cjs"]) {
    const candidate = `${absoluteBase}${ext}`;
    if (fs.existsSync(candidate)) {
      return `${specifier}${ext}`;
    }
  }

  if (fs.existsSync(absoluteBase) && fs.statSync(absoluteBase).isDirectory()) {
    for (const indexName of ["index.js", "index.mjs", "index.cjs"]) {
      const indexPath = path.join(absoluteBase, indexName);
      if (fs.existsSync(indexPath)) {
        const separator = specifier.endsWith("/") ? "" : "/";
        return `${specifier}${separator}${indexName}`;
      }
    }
  }

  return `${specifier}.js`;
}

function appendExtension(fromFile: string) {
  return (match: string, prefix: string, specifier: string, suffix: string) => {
    const resolved = resolveWithExtension(fromFile, specifier);
    if (resolved === specifier) {
      return match;
    }
    return `${prefix}${resolved}${suffix}`;
  };
}

function addJsExtension(filePath: string) {
  const content = fs.readFileSync(filePath, "utf8");
  const replacedFrom = content.replace(
    RELATIVE_IMPORT_RE,
    appendExtension(filePath)
  );
  const newContent = replacedFrom.replace(
    RELATIVE_SIDE_EFFECT_IMPORT_RE,
    appendExtension(filePath)
  );

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated imports in ${filePath}`);
  }
}

function traverseDir(dir: string) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseDir(fullPath);
    } else if (file.endsWith(".js")) {
      addJsExtension(fullPath);
    }
  }
}

if (fs.existsSync(buildDir)) {
  console.log(`Fixing ESM imports in ${buildDir}...`);
  traverseDir(buildDir);
  const esmPackageJsonPath = path.join(buildDir, "package.json");
  const esmPackageJson = { type: "module" };
  fs.writeFileSync(esmPackageJsonPath, JSON.stringify(esmPackageJson, null, 2));
  console.log(`Wrote ${esmPackageJsonPath}`);
  console.log("Done.");
} else {
  console.error(`Build directory ${buildDir} not found.`);
  process.exit(1);
}
