function toggleMobileMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
    }
    
    // Get and process URL hash
    var text = window.location.hash.substring(1);
    text = text.replace(/%20/g, " ");
    text = text.replace(/%E2%80%94/g, "VS ");
    text = text.replace(/%F0%9F%8F%86/g, "");
    
    // Update display
    var displayDiv = document.getElementById("display");
    displayDiv.innerHTML = `<h1>${text} Live Stream</h1>`;
    
    // Initialize player components
    document.addEventListener('DOMContentLoaded', function() {
      // Add player initialization code here if needed
    });
