export default function decorate($block) {
  const $ul = document.createElement('ul');
  $block.append($ul);

  const trail = [
    { text: 'Home', link: '/' }, 
    { text: 'Aldevron' , link: '/' },
    { text: 'Aldevron' , link: '/' },
    { text: 'Aldevron' , link: '/' },
    { text: document.title } 
  ];

  trail.forEach(step => {
    const $li = document.createElement('li');
    $ul.append($li);

    if (step.link) {
        $content.href = step.link;
    }
    $li.append($content);
  });
}