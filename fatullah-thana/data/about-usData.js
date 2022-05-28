const usersData = [
    {}
];

function userTemplate(user) {
    return `
    <!-- Founder & Founder -->
    <div class="col-md-12">
    <div class="justify-content-between align-content-between team-card">
        <a href="resources/icons/team/narayanganj-sp.jpg"><img src="resources/icons/team/narayanganj-sp.jpg" alt="narayanganj-sp" class="team-img"></a>
            <h2>Md Jaidul Alam</h2>
            <p class="text-center">Directions</p>
            <a href="mailto:ocfatps@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="#" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="#" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>
    <!-- Founder & Founder -->
    <div class="col-md-6">
    <div class="justify-content-between align-content-between team-card">
        <a href="resources/icons/team/rakibuzzaman.jpg"><img src="resources/icons/team/rakibuzzaman.jpg" alt="rakibuzzaman" class="team-img"></a>
            <h2>Rakibuzzaman</h2>
            <p class="text-center">Founder & Host</p>
            <a href="mailto:ocfatps@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="#" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="#" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- Founder & Co-Founder -->
    <div class="col-md-6">
        <div class="justify-content-between align-content-between team-card">
        <a href="resources/icons/team/ashik-imran.jpg"><img src="resources/icons/team/ashik-imran.jpg" alt="ashik-imran" class="team-img"></a>
            <h2>Ashik Imran</h2>
            <p class="text-center">Co-Host</p>
            <a href="mailto:ocfatps@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="#" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="#" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>
    
    <!-- Founder & Founder -->
    <div class="col-md-6">
    <div class="justify-content-between align-content-between team-card">
            <a href="resources/icons/team/moinul-islam.jpg"><img src="resources/icons/team/moinul-islam.jpg" alt="moinul islam" class="team-img"></a>
            <h2>Moinul Islam</h2>
            <p class="text-center">Project Creator</p>
            <a href="mailto:usermoin@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/OurMoin" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/OurMoin" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- Founder & Co-Founder -->
    <div class="col-md-6">
        <div class="justify-content-between align-content-between team-card">
            <a href="resources/icons/team/sharif-imtaz.jpg"><img src="resources/icons/team/sharif-imtaz.jpg" alt="sharif imtaz" class="team-img"></a>
            <h2>Sharif Imtaz</h2>
            <p class="text-center">Project Manager</p>
            <a href="mailto:shorifallrobi321@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/sharifimtaz" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/SharifImtaz" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- Founder & Co-Founder -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="resources/icons/team/shanto-mondol.jpg"><img src="resources/icons/team/shanto-mondol.jpg" alt="shanto mondol" class="team-img"></a>
            <h2>Shanto Mondol</h2>
            <p class="text-center">Web Designer</p>
            <a href="mailto:shantomondol816@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/shantomondol" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/shantomondol08" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="resources/icons/team/rabiul-islam.jpg"><img src="resources/icons/team/rabiul-islam.jpg" alt="rabiul islam" class="team-img"></a>
            <h2>Rabiul Islam</h2>
            <p class="text-center">Web Developer</p>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/rabiulislam-xyz" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/rabiulislam.xyz" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="resources/icons/team/abdul-aziz-mia.jpg"><img src="resources/icons/team/abdul-aziz-mia.jpg" alt="asikur rahman" class="team-img"></a>
            <h2>Abdul Aziz Mia</h2>
            <p class="text-center">App Developer</p>
            <a href="mailto:sendemailbro@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/AreaPhonebook" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/Abdul.Aziz.Mia.0" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>    

    `;
}


document.getElementById("user").innerHTML = `
    ${usersData.map(userTemplate).join("")}
  `;

{ /* <a href="tel:${user.ourNumber}"><i class="fas fa-ellipsis-v"></i></a> */ }