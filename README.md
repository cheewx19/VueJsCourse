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
11. A app.component is essentially another app, but belongs to a app
12. `props` are used for passing data, `slot` is used for sending html code
13. You can use `<teleport to="">` to correct HTML structure

# Slot Example
## Component
Show header slot if slot is defined, otherwise hide it. Usually used if you do not have any default slots.
```
<template>
<header v-if="$slots.header"><slot name='header'></slot></header>
</template>
```
You can also add default content like so:
```
<template>
  <header>
    <slot name='header'>
      <h2>Default</h2>
    </slot>
  </header>
</template>
```

## Base (To use Component)
```
<template v-slot:header>...</template>
```
or
```
<template #header>...</template>
```

# Dynamic Slots
## Component
```
<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal"></slot>
    </li>
</template>
```

## Base (To use Component)
```
<template #default="slotProps"><h2>{{ slotProps.item }}</h2></template>
```

# Dynamic Components
You can define a state and use the component name for the state to dynamically show the component based on the state value.
To make sure that the components within the parent component is cached, you can use <keep-alive> tag.
```
<keep-alive>
  <component :is="component-name"></component>
</keep-alive>
```
