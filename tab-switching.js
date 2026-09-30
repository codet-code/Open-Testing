// Get all navigation links
const links = document.querySelectorAll('.nav-link');
// Get all content sections
const contents = document.querySelectorAll('.tab-content');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    // 1. Prevent the page from jumping down to the anchor ID
    event.preventDefault();

    // 2. Remove 'active' class from all links
    links.forEach(l => l.classList.remove('active'));
    // Add 'active' class to the clicked link
    this.classList.add('active');

    // 3. Remove 'active-content' class from all divs to hide them
    contents.forEach(content => content.classList.remove('active-content'));

    // 4. Get the ID from the href attribute (e.g., "#news")
    const targetId = this.getAttribute('href');
    // Find the matching div and show it
    document.querySelector(targetId).classList.add('active-content');
  });
});
