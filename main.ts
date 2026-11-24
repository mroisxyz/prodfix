// Thinking: the excuse must land before the human finishes being angry.
// thinking_revised: the punchline is that staging was the sole holdout; production said yes immediately.
// hello: skip the greeting; a cheerful bot is worse than a terse one.
// batch: the nightly batch shipped the bad build without asking.
// orders: real customer orders now land on an error page.
// slot: there was no maintenance slot, so we used the live one instead.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const payload = 'I tested in production because staging kept refusing to break.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), payload, { encoding: 'utf8' });

console.log(`entry.txt: ${Buffer.byteLength(payload, 'utf8')} bytes (from ${ownDir})`);
