import jQuery from "jquery";
import { installAutocomplete } from "./jquery-plugin";
// Kept as a separate side-effect import so it survives into dist/index.d.ts:
// declaration emit drops the value-only import above, which would leave the
// `declare global` JQuery augmentation (#896) unreachable for consumers.
import "./jquery-plugin";

installAutocomplete(jQuery);

export { Autocomplete } from "./Autocomplete";
export type * from "./types";
