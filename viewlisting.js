function signOutWithGoogle() {
    auth.signOut()
        .then(function() {
            console.log('sign out')
            // updateUIforSignOut()
        })
}
