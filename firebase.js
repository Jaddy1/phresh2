const auth = firebase.auth()
const database = firebase.firestore()
// const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
database.settings(settings);

const profSignIn = document.querySelector('#prof-sign-in')
const name_input = document.querySelector('#name_input')
const dorm_input = document.querySelector('#dorm_input')
const descrip_input = document.querySelector('#descrip_input')
const phoneNumber_input = document.querySelector('#phoneNumber_input')
const signOutButton = document.querySelector('#signOutButton')
const submit = document.querySelector('#submit')
let viewListingBox = document.querySelector('#viewListingBox')
let createListing = document.querySelector('#createListing')
let listingContent = document.querySelector('#listingContent')


// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

window.onload = function() {
  initializeApp()
}

function initializeApp() {
  auth.onAuthStateChanged(function(user) {
    if (user) {
      updateAppForUser(user)
      checkIfUserHasProfile(user.uid)
      findListings(user.uid)
    }
    else {
      updateAppForAnonymousUser()
    }
  })
}

function updateAppForUser(user) {
  console.log('user signed in')
  console.log(user)
}

function updateAppForAnonymousUser() {
  console.log('user not signed in')
}

function checkIfUserHasProfile(uid) {
  const query = database.collection('profile')
    // .doc(id)
    .where('id', '==', uid)
    .get()
    .then(snapshot => {
      if (snapshot.size) {
        //if user exists then autopopulate the page with their preset profile information
        snapshot.forEach(doc => {
          let profileInfo = doc.data()
          console.log('found a profile')
          console.log(profileInfo)
          autoPopulateProfileInfo(profileInfo)
        })
      }
    })
}


function signInWithGoogle() {
  console.log('sign in')
  auth.signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token.
      const token = result.credential.accessToken
      // The signed-in user info.
      const user = result.user
      console.log(user)
      // checkForUser(user)
      const avatarSrc = user.photoURL
      const name = user.displayName
      const email = user.email
      const userId = user.uid
      const userInfo = {
        name: name,
        id: userId,
        photoURL: avatarSrc,
        email: email
      }
      addUserToDatabase(userInfo, userId)
      window.location.href="createprofile.html"

    })
    .catch(err => {
      // redirectToHomePageWithError()
    })
}

/*===============================
  This is for the create profile page
 ===============================*/

function autoPopulateProfileInfo(profileInfo) {
  // this pos variable checks if we are on the create profile page
  const pos = window.location.href.indexOf('createprofile')
  if (pos > 0) {
    name_input.value = profileInfo.name
    dorm_input.value = profileInfo.dorm
    descrip_input.value = profileInfo.descrip
    phoneNumber_input.value = profileInfo.phoneNumber
  }
  // 	console.log('its wooooooorking!')
}

/*===============================
  This is for the view listings page
 ===============================*/

function findListings(uid) {
  const query = database.collection('listings')
    .get()
    .then(snapshot => {
      if (snapshot.size) {
        // console.log('listingtest')
        snapshot.forEach(doc => {
          let listingInfo = doc.data()
          // console.log('listingtest2')
          presentListingsOnPage(listingInfo)
        })
      }
    })
}

function presentListingsOnPage(listingInfo) {
  console.log(listingInfo)
  console.log('Listings Go Here')
  // this pos variable checks if we are on the create profile page
  const pos = window.location.href.indexOf('viewlisting')
  if (pos > 0) {
    viewListingBox.innerHTML += 
    `
      <div class='listing_data'>
        <h3>Name:</h3><p>${listingInfo.name}<p>
        <h3>Dorm: </h3><p>${listingInfo.dorm}<p>
        <h3>Date & Time: </h3><p>${listingInfo.dateTime}<p>
        <h3>Description: </h3><p>${listingInfo.descrip}<p>
        <h3>Contact Me via Email: </h3><p>${listingInfo.email}<p>
      </div>
    `
  }
}


function addUserToDatabase(userInfo, userId) {
  // get a reference to the collection you need
  const userCollectionRef = firebase.firestore().collection('users')
  // create a document in that collection
  const newUserRef = userCollectionRef.doc(userId)
  // set the info equal to what you want
  newUserRef.set(userInfo)
}


// function checkForUser() {

//   const query = firebase.firestore().collection('users')
//     .get()
//     .then(snapshot => {
//       if (snapshot.size) {
//         snapshot.forEach(doc => {
//           let userInfo = doc.data()
//           console.log('hi2')
//           /*updateUIwithHamburger(userInfo)*/
//           window.location.href = "createprofile.html"
//         })
//       }
//     })
// }


//check if a profile exists for a user
// const query2 = database.collection('profile' + id)
//   .get()
//   .then( snapshot => {
//     if (snapshot.size) {
//       //if user exists then autopopulate the page with their preset profile information
//         autopopulateThePage(profileInfo)

//     }
//   })

// })

//if user exists then autopopulate the page with their preset profile information

//else create a collection within profile with that uid

function addProfileToUser() {
  console.log('adding profile to user')
  const uid = auth.currentUser.uid
  const profileRef = firebase.firestore().collection('profile').doc(uid)
  console.log(profileRef)
  const profileInfo = {
    id: uid,
    name: name1.value,
    dorm: dorm.value,
    phoneNumber: phoneNumber.value,
    descrip: descrip.value
  }
  profileRef.set(profileInfo, { merge: true })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

function signOutWithGoogle() {
  auth.signOut()
    .then(function() {
      console.log('sign out')
      // updateUIforSignOut()
    })
}

/*===============================
  This is for the create listing page
 ===============================*/
let submit_listing = document.querySelector('#submit_listing')
let name_listing = document.querySelector('#name_listing')
let dorm_listing = document.querySelector('#dorm_listing')
let dateTime_listing = document.querySelector('#dateTime_listing')
let description_listing = document.querySelector('#description_listing')

submit_listing.addEventListener('click', e => {
  console.log('clicked submit')
  return submitListingData()
})

function submitListingData() {
  const uid = auth.currentUser.uid
  // console.log(uid)
  const displayName = auth.currentUser.displayName
  // console.log(displayName)
  const email = auth.currentUser.email
  console.log(email)
  console.log(name_listing.value)
  console.log(dorm_listing.value)
  console.log(dateTime_listing.value)
  console.log(description_listing.value)
  let listingData = {
    name: name_listing.value,
    gmailName: displayName,
    dorm: dorm_listing.value,
    dateTime: dateTime_listing.value,
    descrip: description_listing.value,
    id: uid,
    email: email
  }
  const listingReference = database.collection('listings').doc()
  listingReference.set(listingData)
    .then(res => {
      console.log('success')
      return 'success'
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

signOutButton.addEventListener('click', e => {
	signOutWithGoogle()
	window.location.href = 'index.html'
})