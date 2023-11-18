const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');
const preprocessor = require('svelte-preprocess');
const glob = require('glob');

const js_files = glob.sync('app/javascript/*.js');
const svelte_files = glob.sync('app/javascript/**/*.svelte');

// "build": "esbuild app/javascript/*.js --bundle --watch --sourcemap --outdir=public/javascripts --public-path=javascripts",

const onWarn = (warning) => {
  console.log("warning");
  if (warning.text.includes('A11y: <header> with mousedown handler must have an ARIA role')) {
    return;
  }
  console.warn(warning.message);
};

async function run() {
  let ctx = await esbuild.context({
    entryPoints: [...js_files, ...svelte_files, 'app/javascript/game/admin_container.js'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    bundle: true,
    sourcemap: true,
    plugins: [sveltePlugin({
      preprocess: preprocessor(),
      filterWarnings: (warning) => {
        if (warning.code.startsWith("a11y-")) return false;
        return true;
      },
    })],
    outdir: 'public/javascripts',
    publicPath: 'javascripts',
    color: true,
    logLevel: 'info'
  }).catch(() => process.exit(1));

  await ctx.watch();
  console.log("Watching for changes...");
}

run();