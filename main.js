// Main JavaScript functionality for Psilocybe Cubensis site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initStrainCards();
    initModal();
    initSmoothScrolling();
    initParallaxEffects();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll('.about-card, .compound-card, .strain-card, .stage-card, .research-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Strain cards functionality
function initStrainCards() {
    const strainCards = document.querySelectorAll('.strain-card');
    
    strainCards.forEach(card => {
        card.addEventListener('click', function() {
            const strainType = this.getAttribute('data-strain');
            openStrainModal(strainType);
        });

        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('strain-modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openStrainModal(strainType) {
    const modal = document.getElementById('strain-modal');
    const modalBody = document.getElementById('modal-body');
    
    const strainData = {
        'golden-teacher': {
            title: 'Golden Teacher',
            description: 'Uma das variedades mais populares e respeitadas de Psilocybe cubensis.',
            characteristics: [
                'Chapéu dourado característico',
                'Crescimento robusto e confiável',
                'Efeitos equilibrados e educativos',
                'Ideal para iniciantes no cultivo'
            ],
            potency: 'Moderada (0.63-0.85% psilocibina)',
            difficulty: 'Fácil',
            origin: 'Flórida, EUA',
            details: 'O Golden Teacher é conhecido por proporcionar experiências introspectivas e educativas. Seu nome deriva tanto da coloração dourada quanto da natureza "educativa" dos efeitos relatados.'
        },
        'b-plus': {
            title: 'B+ (Be Positive)',
            description: 'Variedade extremamente resistente e produtiva, perfeita para cultivadores iniciantes.',
            characteristics: [
                'Muito resistente a contaminações',
                'Crescimento rápido e vigoroso',
                'Produção abundante',
                'Adaptável a diferentes condições'
            ],
            potency: 'Moderada (0.57-0.78% psilocibina)',
            difficulty: 'Muito Fácil',
            origin: 'Desconhecida',
            details: 'A B+ é uma das variedades mais forgiving para iniciantes, com alta tolerância a erros de cultivo e excelente produtividade.'
        },
        'penis-envy': {
            title: 'Penis Envy',
            description: 'Variedade distintiva conhecida por sua alta potência e formato único.',
            characteristics: [
                'Formato distintivo e único',
                'Alta concentração de psilocibina',
                'Crescimento mais lento',
                'Chapéus que raramente se abrem'
            ],
            potency: 'Alta (0.90-1.80% psilocibina)',
            difficulty: 'Difícil',
            origin: 'Amazônia (desenvolvida por Terence McKenna)',
            details: 'Considerada uma das variedades mais potentes, requer experiência em cultivo devido ao crescimento mais lento e necessidades específicas.'
        },
        'amazonian': {
            title: 'Amazonian',
            description: 'Variedade robusta originária da região amazônica.',
            characteristics: [
                'Crescimento vigoroso',
                'Resistente a altas temperaturas',
                'Chapéus grandes e carnudos',
                'Hastes grossas e robustas'
            ],
            potency: 'Moderada-Alta (0.71-0.95% psilocibina)',
            difficulty: 'Moderado',
            origin: 'Bacia Amazônica',
            details: 'Adaptada ao clima tropical, esta variedade é conhecida por sua robustez e capacidade de crescer em condições mais quentes que outras variedades.'
        }
    };

    const strain = strainData[strainType];
    if (!strain) return;

    modalBody.innerHTML = `
        <h2>${strain.title}</h2>
        <p class="strain-description">${strain.description}</p>
        
        <div class="strain-details">
            <div class="detail-section">
                <h3>Características</h3>
                <ul>
                    ${strain.characteristics.map(char => `<li>${char}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-grid">
                <div class="detail-item">
                    <strong>Potência:</strong> ${strain.potency}
                </div>
                <div class="detail-item">
                    <strong>Dificuldade:</strong> ${strain.difficulty}
                </div>
                <div class="detail-item">
                    <strong>Origem:</strong> ${strain.origin}
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Detalhes</h3>
                <p>${strain.details}</p>
            </div>
        </div>
        
        <div class="modal-warning">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Informações apenas para fins educacionais. O cultivo e uso podem ser ilegais em sua jurisdição.</p>
        </div>
    `;

    modal.style.display = 'block';
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Add loading animation for images
function addImageLoadingEffect() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
}

// Initialize image loading effects
addImageLoadingEffect();

// Add CSS for modal details
const modalStyles = `
<style>
.strain-description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: var(--gray-medium);
}

.strain-details {
    margin-bottom: 1.5rem;
}

.detail-section {
    margin-bottom: 1.5rem;
}

.detail-section h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.detail-section ul {
    list-style: none;
    padding: 0;
}

.detail-section li {
    padding: 0.25rem 0;
    padding-left: 1rem;
    position: relative;
}

.detail-section li::before {
    content: '🍄';
    position: absolute;
    left: 0;
}

.detail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.detail-item {
    background: var(--gray-light);
    padding: 0.75rem;
    border-radius: 8px;
    text-align: center;
}

.modal-warning {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
}

.modal-warning i {
    color: #856404;
}

.modal-warning p {
    margin: 0;
    color: #856404;
    font-size: 0.9rem;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);

