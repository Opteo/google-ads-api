// stream-json 3 publishes its streamers only through its package `exports`
// map ("./*" -> "./src/*"). Neither build resolves types through `exports`
// (tsconfig.json uses node10 resolution, tsconfig.esm.json sets
// `resolvePackageJsonExports: false`), so point this specifier's types at the
// file the map resolves to. Node resolves the runtime import through the map.
declare module "stream-json/streamers/stream-array.js" {
  export * from "stream-json/src/streamers/stream-array.js";
}
