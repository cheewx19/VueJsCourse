# VueJsCourse
## Key things
1. `v-model` is a combination of `v-bind:value` and `v-on:input`
2. Vue re-executes any function used in the template whenever anything changes. this is because it does not know whether the value that has changed is used in any method. Use computed property in this case as Vue is able to see and check computed methods if value is changed inside.
3. `v-on` can be shorten to `@`
4. `v-bind` can be shorten to `:`