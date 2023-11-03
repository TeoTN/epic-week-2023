// @ts-expect-error
import notes from "reveal.js/plugin/notes/notes.esm.js";

export const revealConfig = {
  plugins: [notes],
  hash: true,
};
