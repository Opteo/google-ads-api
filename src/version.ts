/*
    How to upgrade google ads version:
    1. Update google-ads-node & publish to NPM. Check that package for instructions.
    2. Update google-ads-node & google-gax in package.json. google-gax should be the same version as google-ads-node.
    3. Update the version in this file
    4. Update the versions in src/protos/index.ts
    5. Run `yarn compile` to update the generated files. 
        The `tsc` command might fail -- if so, temporarily add @ts-nocheck 
        to the top of problematic files so that the compile script can continue. 
        After the compile script has run, those @ts-nocheck lines should no longer be required.
    6. Prettify the generated files so the the diffs are easier to read.
    7. Check that the diffs are expected and that the generated files are correct. New Gads versions will often add new services, fields, and enums.
    8. Test with `yarn test` 
    9. Test by linking to a real project and making some real requests.
    10. Once confident, bump the major version & publish to NPM.
*/
export const googleAdsVersion = "v16";
