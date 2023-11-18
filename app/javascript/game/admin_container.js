import Admin from './admin.svelte';
let sheetData = {};

// document.addEventListener('turbo:load', () => {
//   const admin = new Admin({
//     target: document.getElementById('admin-svelte-component'),
//     props: {
//       content: sheetData,
//     },
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  console.log("Theoretically, everything should be working experiment");
  const admin = new Admin({
    target: document.getElementById('admin-svelte-component'),
    props: {
      content: sheetData,
    },
  });
});