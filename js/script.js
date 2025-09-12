// JavaScript para funcionalidades interactivas
        document.addEventListener('DOMContentLoaded', function() {
            // Menu móvil
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Cerrar menú al hacer clic en un enlace
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
            
            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Animación al hacer scroll
            const animateElements = document.querySelectorAll('.animate-on-scroll');
            
            function checkScroll() {
                animateElements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('animated');
                    }
                });
            }
            
            window.addEventListener('scroll', checkScroll);
            // Ejecutar una vez al cargar la página
            checkScroll();
            
            // Form validation
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Aquí iría la lógica para enviar el formulario
                    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                    contactForm.reset();
                });
            }
            
            // Testimonials slider (simplificado para este ejemplo)
            const testimonialDots = document.querySelectorAll('.testimonial-dot');
            testimonialDots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    testimonialDots.forEach(d => d.classList.remove('active'));
                    dot.classList.add('active');
                    // Aquí iría la lógica para cambiar el testimonio
                });
            });
        });