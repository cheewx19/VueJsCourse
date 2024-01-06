# VueJsCourse
## Key things
1. `v-model` is a combination of `v-bind:value` and `v-on:input`
2. Vue re-executes any function used in the template whenever anything changes. this is because it does not know whether the value that has changed is used in any method. Use computed property in this case as Vue is able to see and check computed methods if value is changed inside.
3. `v-on` can be shorten to `@`
4. `v-bind` can be shorten to `:`
5. Difference between `v-if` and `v-show` is that `v-if` directly removes the DOM element but `v-show` sets `display: none`. rule of thumb is to use `v-show` if element toggles visibility all the time
6. `@click.stop` helps to stop any parent event from firing