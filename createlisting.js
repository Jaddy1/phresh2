// const database = firebase.firestore()

// let createListing = document.querySelector('#createListing')
// let listingContent = document.querySelector('#listingContent')
// let submitButton = document.querySelector('#submit')
// let main = document.querySelector('#main')
// let name_input = document.querySelector("#name_input")
// let dorm = document.querySelector('#dorm')
// let dateTime = document.querySelector('#dateTime')
// let descrip = document.querySelector('#description')

// const database = firebase.firestore()
// const auth = firebase.auth()

// createListing.addEventListener('click', e => {
//   listingContent.innerHTML = 
//   `
//     <h1>Create A Listing!</h1>
//     <div>
//         Name: <input type="text" id="name"/><br>
//         Dorm: <input type="text" id="dorm"/><br>
//         Date & Time: <input type="datetime-local" id="dateTime"/><br>
//         Description: <input type="text" id="description"/><br>
//         <input type="submit" value="Submit" id='submit'/>
//     </div>
//   `

// })

// submitButton.addEventListener('click', e => {
//   submitListingData()
// })

// function submitListingData() {
//   const uid = auth.currentUser.uid
//   console.log(uid)
//   const displayName = auth.currentUser.displayName
//   console.log(displayName)
//   const email = auth.currentUser.email
//   console.log(email)
//   console.log(name_input.value)
//   console.log(dorm.value)
//   console.log(dateTime.value)
//   console.log(descrip.value)
//   let listingData = {
//     name: name_input.value,
//     gmailName: displayName,
//     dorm: dorm.value,
//     dateTime: dateTime.value,
//     descrip: descrip.value,
//     id: uid,
//     email: email
//   }
//   const listingReference = database.collection('listings').doc()
//   listingReference.set(listingData)
//     .then(res => {
//       console.log('success')
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
