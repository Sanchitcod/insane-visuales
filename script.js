const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

/*// ======== FINANCIAL GUIDE POP-UP LOGIC START ========
const myTeamBtn = document.getElementById('my-team-btn');
const guideSection = document.getElementById('financial-guide-section');
const closeGuideBtn = document.getElementById('close-guide-btn');

// Add click event to the "My Team" button to show the pop-up
myTeamBtn.addEventListener('click', () => {
    guideSection.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents scrolling of the background page
});

// Add click event to the close button to hide the pop-up
closeGuideBtn.addEventListener('click', () => {
    guideSection.classList.remove('active');
    document.body.style.overflow = ''; // Re-enables scrolling
});
// ======== FINANCIAL GUIDE POP-UP LOGIC END ========*/