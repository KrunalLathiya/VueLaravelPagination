<template>
    <nav>
        <ul class="pagination pagination-lg">
            <li class="page-item" 
                :class="{ 'disabled': meta_data.prev_page_url === null }">
                <a href="#" 
                    class="page-link" 
                    @click="next(meta_data.current_page-1)">
                    &laquo;
                </a>
            </li>
            <li class="page-item" 
                v-for="page in meta_data.last_page" 
                :key="page" 
                :class="{ 'active':meta_data.current_page === page }">
                <a href="#" 
                    @click.prevent="next(page)" 
                    class="page-link">
                    {{ page }}
                </a>
            </li>
            <li class="page-item"  
                :class="{ 'disabled': meta_data.current_page === meta_data.last_page }">
                <a  href="#" 
                    class="page-link"
                    @click="next(meta_data.current_page+1)">
                    &raquo;
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: ['meta_data'],
    methods: {
        next(page) {
            this.$emit('next', page);
        }
    }
}
</script>