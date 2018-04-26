<template>
    <div class="media">
        <div class="media-body">
            <h4 class="media-heading">
                {{ user.name }}
            </h4>
        </div>
    </div>
</template>
<script>
export default {
  props: ['user']
}
</script>

