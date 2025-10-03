import profiles from "./data.js";

const container = document.getElementById("profile-container");
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




