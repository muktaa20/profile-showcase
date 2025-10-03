import profiles from "./data.js";

const container = document.getElementById("profile-container");
const followBtn = document.getElementById("follow")
console.log(profiles);

profiles.forEach((profile) => {
  const card = document.createElement("div");
  card.innerHTML = `
  <div class="card-container">
    <div class="card">
        <div class="secone">
          <img class="img" src="${profile.img}" alt="${profile.name}">
        </div>

        <div class="sectwo">
            <div class="content">
              <h3>${profile.name}</h3>
              <p>${profile.role}</p>
            </div>

            <div class="stats">
               <div class="firstdiv">
                 <span class="followers">${profile.followers}</span>
                 <span class="following">${profile.following}</span>
               </div>

               <div class="btns">
                  <button class="btn" id="follow">Follow</button>
                  <button class="btn" id="message">Message</button>
               </div>
            </div>
        </div>
    </div>
  </div>
  `;
  container.appendChild(card);
});



/*
- big container for all cards
    - sigle cards
      - two section
        - 1st sec. image align
        - 2nd sec.  content
             -div for content center
             -div for stats
                - div for followers  
                - div for following  
                - div for follow 
                - div for message
             -
  -> add hover effect  
  -> if i click follow change it Following
  
*/

// <div class="card">
//    ${profile.color}
//    <img class="img" ${profile.img}>
// </div>

// <div>
// <h3 class="name">${profile.name}</h3
// <P class="role">${profile.role} </p>
// </div>

// <div>
// <span class="followers">${profile.followers}</span>
// <span class="following">${profile.following}</span>
// </div>

// <div>
// <button class="btn follow"> Follow</button>
// <button class="btn message"> Message</button>
// </div>
