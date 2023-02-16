<template>
    <div>
        <v-container>
            <v-card class=" align-center">
                <v-card-title>
                    Login
                </v-card-title>

                <div class=" pa-2 ma-1 ">
                    <v-text-field v-model="email" label="Email"></v-text-field>
                    <v-text-field v-model="password" label="Password"></v-text-field>
                    <v-btn @click="login()">Login</v-btn>
                </div>

            </v-card>


        </v-container>
    </div>
</template>
<script>

export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login(){
            this.$axios.post("http://192.168.1.5:9000/api/login",{
                "email" : this.email,
                "password" : this.password
            }).then((data)=>{
                console.log(data);
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
    

}
</script>