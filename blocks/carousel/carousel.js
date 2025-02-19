export default function decorate(block) {
  console.log("carousel is calling");

  const buttons = document.createElement('div');
  buttons.className = 'carousel-buttons';
  block.parentElement.append(buttons); // Add buttons container outside the block

  [...block.children].forEach((row, i) => {
    row.children[0].classList.add('carousel-image'); // Add class to image
    row.children[1].classList.add('carousel-text');  // Add class to text

    const button = document.createElement('button');
    button.title = 'Carousel Nav';
    button.classList.toggle('selected', i === 0); // Select first button initially

    button.addEventListener('click', () => {
      block.scrollTo({
        top: 0,
        left: row.offsetLeft - block.offsetLeft, // Use block's offsetLeft
        behavior: 'smooth'
      });

      // Toggle 'selected' class on buttons (more efficient)
      buttons.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      button.classList.add('selected');
    });

    buttons.append(button);
  });
}