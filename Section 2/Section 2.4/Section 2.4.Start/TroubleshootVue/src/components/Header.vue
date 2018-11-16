<template>
    <div>
        <!-- HEADER -->
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <router-link class="navbar-brand" to="/home">Troubleshooting Vue</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- NAVIGATION -->
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/home">Home
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/users">All Users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/user">Single User</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Signup</router-link>
                    </li>
                </ul>
                <Search/>
            </div>
        </nav>
        <!-- END NAVIGATION -->
    </div>
    <!-- END HEADER -->
</template>

<script>

    import Search from '@/components/Search'

    export default {
        name: "Header",
        components : { Search }
    };

</script>

<style>
</style>