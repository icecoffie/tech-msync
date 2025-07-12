 const navbarToggle = document.querySelector('.navbar-toggle');
        const navbarMenu = document.querySelector('.navbar-menu');

        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        document.querySelectorAll('.navbar-menu a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                if (navbarMenu.classList.contains('active')) {
                    navbarMenu.classList.remove('active');
                }
            });
        });

        const viewProjectsBtn = document.getElementById('view-projects-btn');
        if (viewProjectsBtn) {
            viewProjectsBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }

        const projectCards = document.querySelectorAll('.project-card');
        const loadMoreBtn = document.getElementById('load-more-projects');
        const initialProjectsToShow = 6;

        function hideExtraProjects() {
            projectCards.forEach((card, index) => {
                if (index >= initialProjectsToShow) {
                    card.classList.add('hidden-project');
                } else {
                    card.classList.remove('hidden-project');
                }
            });
            if (projectCards.length > initialProjectsToShow) {
                loadMoreBtn.style.display = 'inline-block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                projectCards.forEach(card => {
                    card.classList.remove('hidden-project');
                });
                loadMoreBtn.style.display = 'none';
            });
        }
        
        const projectDetailModal = document.getElementById('project-detail-modal');
        const modalCloseBtn = document.querySelector('.modal-close');
        const modalProjectImage = document.getElementById('modal-project-image');
        const modalProjectTitle = document.getElementById('modal-project-title');
        const modalProjectDescription = document.getElementById('modal-project-description');

        projectCards.forEach(card => {
            card.addEventListener('click', (event) => {
                if (!event.target.classList.contains('hidden-link')) {
                    const title = card.dataset.title;
                    const description = card.dataset.description;
                    const image = card.dataset.image;

                    modalProjectImage.src = image;
                    modalProjectTitle.textContent = title;
                    modalProjectDescription.textContent = description;

                    projectDetailModal.classList.add('active');
                }
            });
        });

        modalCloseBtn.addEventListener('click', () => {
            projectDetailModal.classList.remove('active');
        });

        projectDetailModal.addEventListener('click', (event) => {
            if (event.target === projectDetailModal) {
                projectDetailModal.classList.remove('active');
            }
        });

        const testimonialWrapper = document.querySelector('.testimonial-wrapper');
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const prevTestimonialBtn = document.querySelector('.prev-testimonial');
        const nextTestimonialBtn = document.querySelector('.next-testimonial');
        let currentTestimonialIndex = 0;

        function updateTestimonialSlider() {
            const offset = -currentTestimonialIndex * 100;
            testimonialWrapper.style.transform = `translateX(${offset}%)`;
        }

        prevTestimonialBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
            updateTestimonialSlider();
        });

        nextTestimonialBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
            updateTestimonialSlider();
        });

        const careersSliderWrapper = document.querySelector('.careers-slider-wrapper');
        const careersSlideItems = document.querySelectorAll('.careers-slide-item');
        const prevCareersBtn = document.querySelector('.prev-careers');
        const nextCareersBtn = document.querySelector('.next-careers');
        let currentCareersIndex = 0;

        function updateCareersSlider() {
            const offset = -currentCareersIndex * 100;
            careersSliderWrapper.style.transform = `translateX(${offset}%)`;
        }

        if (prevCareersBtn) {
            prevCareersBtn.addEventListener('click', () => {
                currentCareersIndex = (currentCareersIndex - 1 + careersSlideItems.length) % careersSlideItems.length;
                updateCareersSlider();
            });
        }

        if (nextCareersBtn) {
            nextCareersBtn.addEventListener('click', () => {
                currentCareersIndex = (currentCareersIndex + 1) % careersSlideItems.length;
                updateCareersSlider();
            });
        }

        hideExtraProjects();
        updateTestimonialSlider();
        updateCareersSlider();

        const style = document.createElement('style');
        style.innerHTML = `
            .hidden-project {
                display: none;
            }
        `;
        document.head.appendChild(style);
