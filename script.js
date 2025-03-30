document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initAnimations();
  
  // Animate skill bars
  animateSkillBars();
  
  // Add typing effect to name and title
  typeEffect(document.getElementById('name'), 'Said Garnit', 100);
  setTimeout(() => {
      typeEffect(document.getElementById('job-title'), 'IT SECURITY AND DIGITAL TRUST ENGINEER', 50);
  }, 1500);
  
  // Skill item click handlers
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
      item.addEventListener('click', function() {
          showSkillPopup(this.dataset.skill);
      });
  });
  
  // Close popup when clicking the X or outside the popup
  document.querySelector('.close-popup').addEventListener('click', closeSkillPopup);
  document.getElementById('skill-popup').addEventListener('click', function(e) {
      if (e.target === this) {
          closeSkillPopup();
      }
  });
  
  // Scroll event for animation triggers
  window.addEventListener('scroll', function() {
      animateOnScroll();
  });
  
  // Initial animation check
  animateOnScroll();
});

// Typing effect for text elements
function typeEffect(element, text, speed) {
  element.textContent = '';
  let i = 0;
  
  function type() {
      if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
      }
  }
  
  type();
}

// Animate progress bars for language skills
function animateSkillBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
      // Reset width
      bar.style.width = '0%';
      
      // Animate after a short delay
      setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
      }, 300);
  });
}

// Show skill description popup
function showSkillPopup(skill) {
  const popup = document.getElementById('skill-popup');
  const title = document.getElementById('skill-popup-title');
  const description = document.getElementById('skill-popup-description');
  
  title.textContent = skill;
  description.innerHTML = getSkillDescription(skill);
  
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close skill popup
function closeSkillPopup() {
  const popup = document.getElementById('skill-popup');
  popup.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Get description text for each skill
function getSkillDescription(skill) {
  const descriptions = {
      'Java': 'Object-oriented programming language used for enterprise applications and Android development.',
      'Python': 'Versatile scripting language often used in cybersecurity for automation, scripting, and data analysis.',
      'C': 'Low-level programming language that provides direct access to memory and hardware, ideal for system programming.',
      'C++': 'Extension of C with object-oriented features, used for system/application software and game development.',
      'PHP': 'Server-side scripting language designed for web development and creating dynamic web pages.',
      'JavaScript': 'Programming language that enables interactive web pages and is an essential part of web applications.',
      'Wireshark': 'Network protocol analyzer that lets you capture and examine data traveling over a network.',
      'Metasploit': 'Penetration testing framework used to develop and execute exploit code against remote targets.',
      'Nmap': 'Network scanning tool used to discover hosts and services on a computer network.',
      'MySQL': 'Open-source relational database management system known for its reliability and ease of use.',
      'MongoDB': 'NoSQL database program that uses JSON-like documents with optional schemas.',
      'Laravel': 'PHP web application framework with expressive syntax designed for web application development.',
      'Linux': 'Open-source operating system that forms the foundation of many cybersecurity tools and servers.',
      'Git': 'Distributed version control system for tracking changes in source code during software development.',
      'Docker': 'Platform that uses OS-level virtualization to deliver software in packages called containers.',
      'VMware': 'Virtualization software that provides cloud computing and platform virtualization services.',
      'VMware ESXi': 'Enterprise-class, type-1 hypervisor for deploying and serving virtual computers.',
      'VirtualBox': 'Free and open-source hosted hypervisor for x86 virtualization.',
      'Cisco Packet Tracer': 'Network simulation tool that allows for practice and visualization of network configurations.',
      'TCP/IP': 'Set of networking protocols that enable computers to communicate over networks, including the internet.',
      'DNS': 'Domain Name System that translates domain names to IP addresses, essential for internet navigation.',
      'DHCP': 'Network management protocol that dynamically assigns IP addresses to devices on a network.',
      'VPNs': 'Virtual Private Networks that extend private networks across public networks for secure communication.',
      'Firewalls': 'Network security systems that monitor and control incoming and outgoing network traffic.'
  };
  
  return descriptions[skill] || 'Description not available.';
}

// Initialize animations
function initAnimations() {
  // Set initial states for animation elements
  document.querySelectorAll('.timeline-item').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
  });
  
  document.querySelectorAll('.project-item').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
  });
  
  document.querySelectorAll('.certification-item').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'rotateX(30deg)';
  });
}

// Trigger animations when elements come into view
function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  
  document.querySelectorAll('.timeline-item').forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      
      if (itemTop < triggerBottom) {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
      }
  });
  
  document.querySelectorAll('.project-item').forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      
      if (itemTop < triggerBottom) {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
      }
  });
  
  document.querySelectorAll('.certification-item').forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      
      if (itemTop < triggerBottom) {
          item.style.opacity = '1';
          item.style.transform = 'rotateX(0)';
      }
  });
}