// Fetch user data from the API
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(data => {
  // Update the profile content with the fetched data
  document.getElementById('profile-image').src = `https://robohash.org/${data.username}?size=80x80`;
  document.getElementById('profile-name').textContent = data.name;
  document.getElementById('profile-title').textContent = 'Senior Product Designer';
  document.getElementById('profile-location').textContent = `${data.address.city}, ${data.address.country} · Fulltime Freelancer`;
  document.getElementById('about-me-text').textContent = 'Hi, I\'m a final year student completing a bachelor\'s In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side.';
  document.getElementById('work-experience-text').textContent = 'Details about work experience go here.';
})
.catch(error => console.error('Error fetching user data:', error));