let signIn = document.querySelector("#gplus")
let profile = document.querySelector("#profile")
let listings = document.querySelector("#listings")

signIn.addEventListener('click', e => {
 console.log('debug')
 signInWithGoogle()
})

let content = document.querySelector(".content")

// function updateUIwithHamburger(userInfo) {
//  content.innerHTML = `
// <div id='about' style='#about{font-size:15px; display:flex;}'>
//  <div style='{display:flex; flex:1}'>
//   <a href="createprofile.html">
//    <button id="profile">
//      <img src="images/profileicon.png" id="icon"/>
//    </button>
//    <h1>Create Profile</h1>
//    </a>
//   </div>
  
//   <div style='{display:flex; flex:1}'>
//    <a href="createlisting.html">
//     <button id="listings">
//      <img src="images/listicon.png" id="icon"/>
//     </button>
//     <h1>Listings</h1>
//    </a>
//   </div>
// </div>
//  `
//  console.log('hi')
// }

// function updateGoogleIcon(avatarSrc) {
//  signIn.innerHTML = `<i><img id="gplus" src="${avatarSrc}" /> </i>`
// }