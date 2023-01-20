import * as esbuild from 'esbuild';
import { argv } from 'node:process';

// Config

const PUBLIC_DIR = './public';

const ESBUILD_CONFIG = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: `${PUBLIC_DIR}/assets`,
  sourcemap: true,
  tsconfig: './tsconfig.json',
};

// FUNCTIONS
// =============================================

const builder = async () => {
  const result = await esbuild.build({ ...ESBUILD_CONFIG });
  console.log(result);
};

const watch = async () => {
  const ctx = await esbuild.context({ ...ESBUILD_CONFIG });
  await ctx.watch();
};
if (argv.includes('--build')) {
  await builder();
} else if (argv.includes('--watch')) {
  await watch();
} else {
  await builder();
}
