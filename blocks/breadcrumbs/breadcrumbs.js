export default function decorate($block) {
  const $ul = document.createElement('ul');
  $block.append($ul);

  const trail = [
    { text: 'Home', link: '/' }, 
    { text: 'Aldevron' , link: '/'},
    { text: document.title } 
  ];

  trail.forEach(step => {
    const $li = document.createElement('li');
    $ul.append($li);

    const $content = step.link ? document.createElement('a') : document.createElement('span');
    $content.textContent = step.text;
    
    $li.append($content);
  });
}