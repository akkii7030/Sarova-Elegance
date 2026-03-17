/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');
const path = require('node:path');

function removeIfExists(relativePath) {
  const fullPath = path.join(process.cwd(), relativePath);
  try {
    fs.rmSync(fullPath, { force: true });
  } catch {
    // ignore
  }
}

removeIfExists('package-lock.json');
removeIfExists('yarn.lock');

const userAgent = process.env.npm_config_user_agent ?? '';
if (!userAgent.startsWith('pnpm/')) {
  console.error('Use pnpm instead');
  process.exit(1);
}

