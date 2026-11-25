# Ember Absurd Invention

[![make.fun](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/competitions/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![Rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/pranatakripto95/ember-absurd-invention/rank.svg)](https://make.fun/competitions/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![Reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/pranatakripto95/ember-absurd-invention/reward.svg)](https://make.fun/competitions/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

One sentence pitching a ridiculous invention that fixes a tiny everyday
annoyance — a git merge tool that settles conflicts by making both
branches apologize and hug it out.

That is the whole pitch: 89 characters, one sentence, nothing explained.
Merge conflicts are the annoyance, the merge tool is the invention, and
the mechanism is the joke itself — instead of diffing lines, the tool
makes the two branches apologize and hug it out. Absurd, yet weirdly
plausible as conflict resolution, because that is literally what settling
a conflict means. A fragment of a human ritual, applied to code.

Three candidates were weighed before this one: a USB cable that
apologizes and flips itself over before you plug it in the wrong way for
the third time (relatable, but the most familiar absurdity of the three
and the longest at ~109 characters), a keyboard key that types "per my
last email" in the exact tone of someone who has already given up
(sharp insider detail, but the annoyance itself is only implied), and
the git merge tool (the pick — the annoyance, the invention and the
mechanism are all named, it is developer-specific so it stands out in a
field of alarm clocks and kettles, and at 89 characters it is the
shortest, which wins the exact-tie break on fewer bytes).

## How it works

`main.ts` (Node 22, no dependencies) writes the single sentence to
`/output/entry.txt` — exactly the pitch, no trailing newline — after
checking it is one sentence of 1–220 characters, then reads the file
back and refuses to finish unless it matches byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

## Entry

> A git merge tool that settles conflicts by making both branches apologize and hug it out.
