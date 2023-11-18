This is a semi-compressed example of code that causes svelte flow to exhibit some odd bugs.

This is a rails app with a lot of chunks missing. The url that exhibits the bug is http://localhost:3000/games/xyz/admin

This executes the admin method of app/controllers/games_controller.rb
this method processes app/views/games/admin.html.erb and sends the resulting html to the client. This file loads the game/admin_container.js file and some html.

The admin_container.js imports Admin.svelte and, on DOMContentLoaded initialises the svelte.

Admin.svelte imports and uses ZoomExperiment7.svelte
ZoomExperiment7.svelte contains the quickstart svelteflow code.
