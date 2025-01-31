function modifyPage() {
  // Remove query params from images
  document.querySelectorAll('img[src*="bytescale.mobbin.com"]').forEach(img => {
    img.src = img.src.split('?')[0];
  });

  // Remove specific div classes
  document.querySelectorAll('div.after\\:bg-neutral-white\\/40.after\\:backdrop-blur-\\[10px\\]')
    .forEach(div => div.classList.remove(
      'after:bg-neutral-white/40', 
      'after:backdrop-blur-[10px]'
    ));

  // Remove aside elements
  document.querySelectorAll('aside').forEach(aside => aside.remove());
}

// Apply modifications once and on dynamic content changes
modifyPage();
new MutationObserver(modifyPage).observe(document.body, {
  childList: true,
  subtree: true
});