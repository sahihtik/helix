export default function decorate(block) {
    console.log("calling new block");
    const content = block.textContent.trim();
    block.innerHTML = '';
  
    const pullQuote = document.createElement('div');
    pullQuote.className = 'pull-quote';
  
    const [quote, author] = content.split('—').map(s => s.trim());
  
    pullQuote.innerHTML = `<p>${quote}</p>${author ? `<p>— ${author}</p>` : ''}`; 
  
    pullQuote.addEventListener('click', () => {
      navigator.clipboard.writeText(`${window.location.href}#quote-${Math.random().toString(36).slice(2, 15)}`);
    });
  
    block.appendChild(pullQuote);
  }