# VueJsCourse
## Key things
1. `v-model` is a combination of `v-bind:value` and `v-on:input`
2. Vue re-executes any function used in the template whenever anything changes. this is because it does not know whether the value that has changed is used in any method. Use computed property in this case as Vue is able to see and check computed methods if value is changed inside.
3. `v-on` can be shorten to `@`
4. `v-bind` can be shorten to `:`
5. Difference between `v-if` and `v-show` is that `v-if` directly removes the DOM element but `v-show` sets `display: none`. rule of thumb is to use `v-show` if element toggles visibility all the time
6. `@click.stop` helps to stop any parent event from firing
7. Vue has its own built in reactivity using something called Proxy to handle events. Javascript has no reactivity.
8. you may mount multiple different app objects
9. you can use `this.$refs.bar` to get the entire value to save instead of every keystroke using `v-model`. you will need to specify `<foo ref="bar" />` in the html code
10. Life Cycle
- beforeCreated => the very first phase
- created => before compiling the template
- beforeMount => after compiling the template but before seeing anything on screen
- mount => see something on screen and handed to the browser to add html elements
when data changed in the mounted instance
- beforeUpdate => before the data is processed
- updated => after processing the data and visible on screen
You can also manually unmount the app instance whenever
- beforeUnmounted => before it unmounts the app, usually where we want to do cleanup
- unmounted => after app is unmounted
