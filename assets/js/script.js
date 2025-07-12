 


const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((item) => {
    item.addEventListener("click", () => {
      // Collapse all accordions
      accordions.forEach((acc) => {
        acc.classList.remove("active");
        acc.querySelector(".accordion-content").style.display = "none";
        acc.querySelector(".toggle").textContent = "+";
      });

      // Expand clicked one
      item.classList.add("active");
      item.querySelector(".accordion-content").style.display = "block";
      item.querySelector(".toggle").textContent = "−";
    });
  });
 const slide = document.getElementById('carouselSlide');
    const totalSlides = slide.children.length;
    const dotsContainer = document.getElementById('dotsContainer');
    let currentIndex = 0;

    // Create dots dynamically
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.onclick = () => goToSlide(i);
      dotsContainer.appendChild(dot);
    }

    function updateCarousel() {
      slide.style.transform = `translateX(-${currentIndex * 350}px)`;
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

 document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
    //customers
    
   const testimonialTrack = document.getElementById("testimonialTrack");
    const testimonialDots = document.getElementById("testimonialDots");

    const totalTestimonials = testimonialTrack.children.length;
    let currentTestimonial = 0;

    function getVisibleTestimonials() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function updateTestimonialView() {
      const visible = getVisibleTestimonials();
      const shift = -(currentTestimonial * (100 / visible));
      testimonialTrack.style.transform = `translateX(${shift}%)`;

      document.querySelectorAll(".testimonial-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentTestimonial);
      });
    }

    function nextTestimonial() {
      const maxSlide = totalTestimonials - getVisibleTestimonials();
      currentTestimonial = Math.min(currentTestimonial + 1, maxSlide);
      updateTestimonialView();
    }

    function prevTestimonial() {
      currentTestimonial = Math.max(currentTestimonial - 1, 0);
      updateTestimonialView();
    }

    function renderTestimonialDots() {
      const count = totalTestimonials - getVisibleTestimonials() + 1;
      testimonialDots.innerHTML = "";
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("span");
        dot.className = "testimonial-dot";
        if (i === currentTestimonial) dot.classList.add("active");
        testimonialDots.appendChild(dot);
      }
    }

    window.addEventListener("resize", () => {
      renderTestimonialDots();
      updateTestimonialView();
    });

    // Initial load
    renderTestimonialDots();
    updateTestimonialView();

    window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });