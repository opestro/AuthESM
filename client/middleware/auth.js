export default function ({ store, redirect }) {
    // Authentication
    // Check if the user is not authenticated
    this.$store.commit('auth/login').then(()=>{
        if (!store.state.user) {
            return redirect('/login')
        }
    })

}