// Animations for the Portfolio Website

// Initialize all animations
function initAnimations() {
  // Animate skill progress bars on scroll
  animateSkillsOnScroll();
  
  // Animate elements on scroll
  animateOnScroll();
  
  // Animate color blocks
  animateColorBlocks();
}

// Animate skill progress bars when they come into view
function animateSkillsOnScroll() {
  const skillSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress-bar');
  
  if (skillSection && progressBars.length) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Reset progress bars first
          progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            // Trigger reflow
            void bar.offsetWidth;
            
            // Set the width back with transition
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
          
          // Unobserve after animation is triggered
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    skillsObserver.observe(skillSection);
  }
}

// Animate elements when they come into view
function animateOnScroll() {
  const elementsToAnimate = document.querySelectorAll('.section-header, .about-content, .project-card, .achievement-card, .contact-content');
  
  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        // Unobserve after animation is triggered
        elementObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elementsToAnimate.forEach(element => {
    // Reset opacity to 0
    element.style.opacity = '0';
    elementObserver.observe(element);
  });
}

// Animate color blocks in the hero section
function animateColorBlocks() {
  const colorBlocks = document.querySelectorAll('.color-block');
  
  if (colorBlocks.length) {
    colorBlocks.forEach((block, index) => {
      // Add random delay to each block
      const delay = Math.random() * 2;
      block.style.animationDelay = `${delay}s`;
      
      // Add slight variation to animation duration
      const duration = 6 + index;
      block.style.animationDuration = `${duration}s`;
    });
  }
}

// Handle hover animations
document.addEventListener('mouseover', (e) => {
  // Skill cards pulse effect
  if (e.target.closest('.skill-card')) {
    const icon = e.target.closest('.skill-card').querySelector('.skill-icon i');
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease';
    
    // Reset after hover
    e.target.closest('.skill-card').addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  }
  
  // Project images zoom effect
  if (e.target.closest('.project-img')) {
    const img = e.target.closest('.project-img').querySelector('img');
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.5s ease';
  }
});