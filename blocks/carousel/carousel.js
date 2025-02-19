export default function decorate(block) {
  const buttons = document.createElement('div');
  buttons.className = 'carousel-buttons';
  block.parentElement.append(buttons);
  
  [...block.children].forEach((row, i) => {
    // Add classes to contents
    row.children[0].classList.add('carousel-image');
    row.children[1].classList.add('carousel-text');
    
    // Create navigation button
    const button = document.createElement('button');
    if (i === 0) button.classList.add('selected');
    
    // Add click handler
    button.addEventListener('click', () => {
      // Scroll to this slide
      block.scrollTo({
        left: row.offsetLeft - block.offsetLeft,
        behavior: 'smooth'
      });
      
      // Update button states
      buttons.querySelectorAll('button').forEach(b => 
        b.classList.remove('selected'));
      button.classList.add('selected');
    });
    
    buttons.append(button);
  });
}