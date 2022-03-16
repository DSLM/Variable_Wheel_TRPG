<template>
    <svg v-if="figure" class="is-pulled-right" type="mdi" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path :d="path"/></svg>
</template>

<script>
    export default {
        name: 'svgIcon',
        props: {
            figure: {
                type: Boolean
            },
            path: {
                type: String
            }

        }
    }
</script>
