export default function decorate(block) {
   console.log("breadcrumb is calling");
   const $ul = document.createElement('ul');
   $block.append($ul);
   const trail = [{
    text: 'Adventures',
    link: '/adventures',
  }, {
    text: title, 
  }];
  while (trail.length) {
    const step = trail.shift();
    const $li = document.createElement('li');
    $ul.append($li);
    let $wrap = $li;
    if (step.link) {
      $wrap = document.createElement('a');
      $wrap.href = step.link;
      $li.append($wrap);
    }
    const $span = document.createElement('span');
    $wrap.append($span);
    $span.textContent = step.text;}
    function getMetadata(name) {
      const meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      return meta ? meta.getAttribute('content') : null;
    }
  }




