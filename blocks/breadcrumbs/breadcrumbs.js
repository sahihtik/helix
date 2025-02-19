export default function decorate($block) {
  const $ul = document.createElement('ul');
  $block.append($ul);

  const trail = [
    { text: 'Home', link: '/' }, // Always start with Home
    // Add more breadcrumb segments as needed.  Ideally get this from metadata
    // or page hierarchy. Example:
    // { text: 'Products', link: '/products' },
    // { text: 'Electronics', link: '/products/electronics' },
    { text: document.title } // Last item is usually the current page title
  ];

  trail.forEach(step => {
    const $li = document.createElement('li');
    $ul.append($li);

    const $content = step.link ? document.createElement('a') : document.createElement('span');
    $content.textContent = step.text;
    if (step.link) {
        $content.href = step.link;
    }
    $li.append($content);
  });
}