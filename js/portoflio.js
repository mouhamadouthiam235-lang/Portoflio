// Progress bars animation
window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.progress-bar');
  const barObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.getAttribute('data-width');
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => barObserver.observe(bar));

  // Fade-in sections
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => fadeObserver.observe(el));

  // Nav active highlight on scroll
  const sections = document.querySelectorAll('section[id], header');
  const navLinks = document.querySelectorAll('.nav-btn');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.style.color = '');
        const id = entry.target.id || 'à-propos';
        const active = document.querySelector(`.nav-btn[href="#${id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => scrollObserver.observe(s));
});
