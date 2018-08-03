// let signOutButton = document.querySelector('#signOutButton')


// signOutButton.addEventListener('click', e => {
// 	signOutWithGoogle()
// 	window.location.href = 'index.html'
// })


// submit.addEventListener('click', e => {
//   addProfileToUser()
// })


// function checkIfUserHasProfile() {
// 	const uid = auth.currentUser.uid
// 	const query = database.collection('profile')
// 		// .doc(id)
// 		.where('id', '==', uid)
// 		.get()
// 		.then(snapshot => {
// 			if (snapshot.size) {
// 				//if user exists then autopopulate the page with their preset profile information
// 				console.log("testing")
// 				snapshot.forEach(doc => {
// 					let profileInfo = doc.data()
// 					console.log('something')
// 					autoPopulateThePage(profileInfo)
// 				})
// 			}
// 		})
// }


// function autoPopulateThePage(profileInfo) {
// 	console.log('its wooooooorking!')
// 	name_input.value = profileInfo.name
// 	dorm_input.value = profileInfo.dorm
// 	descrip_input.value = profileInfo.descrip
// 	phoneNumber_input.value = profileInfo.phoneNumber
// 	// name_input.innerHTML += `<p>Name: <input type="text" id="name_input" value ='${profileInfo.name}' /></p>`
// }

// function toggleMenu() {
// 	document.getElementById('upper-slide').classList.toggle('upper-slide-right');
// 	document.getElementById('slide').classList.toggle('slide-right');
// }

// function toggleMenuLink() {
// 	document.getElementById("links").classList.toggle('slide-in');
// }

// function toggleX() {
// 	x[0].classList.toggle('hover');
// }
