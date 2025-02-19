export default function decorate($block) {
  const $ul = document.createElement('ul');
  $ul.classList.add('breadcrumb-list');
  $block.append($ul);
  
  // Make sure you're setting the correct title here
  const pageTitle = "Plasmid Products"; // Replace with dynamic title if needed
  
  const trail = [
    { text: 'Home', link: '/' },
    { text: 'Aldevron', link: '/' },
    
  ];
  
  trail.forEach((step, index) => {
    const $li = document.createElement('li');
    $li.classList.add('breadcrumb-item');
    $ul.append($li);
    
    const $content = step.link ? document.createElement('a') : document.createElement('span');
    $content.textContent = step.text;
    if (step.link) {
      $content.href = step.link;
    }
    
    $li.append($content);
    
    // Add separator after all items except the last
    if (index < trail.length - 1) {
      const $separator = document.createElement('span');
      $separator.classList.add('breadcrumb-separator');
      $separator.innerHTML = ' &gt; ';
      $li.append($separator);
    }
  });
  

}