<template>
  <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">Users</div>
                <div class="card-body">
                    <user
                        v-for="user in users" 
                        :user="user" 
                        :key="user.id">
                    </user>
                    <pagination 
                        :meta_data="meta_data"
                        v-on:next="fetchUsers">
                    </pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import User from './partials/User';
import Pagination from './pagination/Pagination';

export default {

    components: {
        User,
        Pagination
    },

    data() {
        return {
            users: [],
            meta_data: {
                last_page: null,
                current_page: 1,
                prev_page_url: null
            }
        }
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        fetchUsers(page = 1) {
            axios.get('/api/users/', {
                params: {
                    page
                }
            }).then((res) => {
            this.users = res.data.data;
            this.meta_data.last_page = res.data.last_page;
            this.meta_data.current_page = res.data.current_page;
            this.meta_data.prev_page_url = res.data.prev_page_url;            
        });
        }
    }
}
</script>

