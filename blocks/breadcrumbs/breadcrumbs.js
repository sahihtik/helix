export default function decorate($block) {
  const $ul = document.createElement('ul');
  $ul.classList.add('breadcrumb-list');
  $block.append($ul);
  
  const pageTitle = "Plasmid Products"; 
  
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
    
    
    $li.append($content);
    
    if (index < trail.length - 1) {
      const $separator = document.createElement('span');
      $separator.classList.add('breadcrumb-separator');
      $separator.innerHTML = ' &gt; ';
      $li.append($separator);
    }
  });
  

}