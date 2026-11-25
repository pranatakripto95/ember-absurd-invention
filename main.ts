// Ember Absurd Invention — make.fun "One-Sentence Absurd Invention Pitch"
// (u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
//
// The task: one sentence pitching a ridiculous invention that fixes a
// tiny everyday annoyance. The program writes that single sentence to
// /output/entry.txt. The gate: UTF-8 text of 1 to 220 characters, not
// only white space. The judge compares pitches pairwise on how funny
// the invention is, how clever the fix is, and how original it is —
// with the laugh coming from the invention itself, not from a joke
// bolted on at the end, and the sentence staying tight.
//
// Three candidates were weighed before this one was picked:
//
//   A  "A USB cable that apologizes and flips itself over before you
//      plug it in the wrong way for the third time."
//      Relatable — everyone has fought a USB plug — and the cable
//      apologizing is a nice touch. But it is the most familiar
//      absurdity of the three: the wrong-way USB is a joke the judge
//      has heard a hundred times, so it loses on originality, and at
//      ~109 characters it is also the longest.
//
//   B  "A keyboard key that types 'per my last email' in the exact
//      tone of someone who has already given up."
//      A sharp insider detail — the phrase is instantly recognizable
//      to anyone who works in an office — and the deadpan tone note
//      lands. But the annoyance itself is only implied (the key does
//      not name what it fixes), so it is weaker than C on the judge's
//      first and fifth criteria: name the annoyance, the invention,
//      and the mechanism, without clutter.
//
//   C  "A git merge tool that settles conflicts by making both
//      branches apologize and hug it out."
//      THE PICK. The annoyance is named (merge conflicts), the
//      invention is named (a git merge tool), and the mechanism is
//      the joke itself: instead of diffing lines, the tool makes the
//      two branches apologize and hug it out — absurd, yet weirdly
//      plausible as conflict resolution, because that is literally
//      what settling a conflict means. Developer-specific, so it
//      stands out in a field of alarm clocks and kettles; a fragment
//      of a human ritual applied to code, with nothing explained.
//      At 89 characters it is also the shortest of the three, which
//      wins the exact-tie break (fewer bytes places first).
//
// So the entry is exactly C: 89 characters, one sentence, no newline,
// no trailing space, nothing else in the file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const PITCH =
  "A git merge tool that settles conflicts by making both branches apologize and hug it out.";
const OUT_PATH = "/output/entry.txt";

// Gate check, before anything is written: one sentence, 1-220
// characters, not only white space, no trailing newline to inflate
// the byte count. Checked in bytes as well as in characters: the
// gate counts characters, but the exact-tie break counts bytes.
//
// Revision 2 (25 Nov ~19:15 WIB): explicit whitespace-only guard.
// The checks below already reject a whitespace-only string through
// trim() !== PITCH, but that is incidental — this guard states the
// rule outright and refuses anything whose visible content is empty,
// so a pitch of spaces alone can never slip through on length alone.
if (PITCH.trim().length === 0) {
  throw new Error("refusing to write an entry that is only whitespace");
}

if (
  PITCH.length < 1 ||
  PITCH.length > 220 ||
  Buffer.byteLength(PITCH, "utf8") > 220 ||
  PITCH.trim() !== PITCH ||
  !/^[^.!?]+[.]$/.test(PITCH)
) {
  throw new Error(`refusing to write an invalid entry: ${JSON.stringify(PITCH)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, PITCH, "utf8");

// Read-back self-check: the file must hold exactly the pitch,
// byte for byte, nothing added.
const back = readFileSync(OUT_PATH, "utf8");
if (back !== PITCH) {
  throw new Error(
    `read-back mismatch: wrote ${JSON.stringify(PITCH)} but file holds ${JSON.stringify(back)}`,
  );
}

console.log(`wrote ${JSON.stringify(back)} (${back.length} chars) to ${OUT_PATH}`);
