// Main JavaScript functionality for Psilocybe Cubensis site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initModal();
    initCultivationModal();
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

}

// Cultivation modal functionality
function initCultivationModal() {
    const cultivationBtn = document.getElementById('cultivation-details-btn');
    const cultivationModal = document.getElementById('cultivation-modal');
    const cultivationClose = document.getElementById('cultivation-close');
    const cultivationModalBody = document.getElementById('cultivation-modal-body');

    if (cultivationBtn) {
        cultivationBtn.addEventListener('click', function() {
            openCultivationModal();
        });
    }

    if (cultivationClose) {
        cultivationClose.addEventListener('click', function() {
            cultivationModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === cultivationModal) {
            cultivationModal.style.display = 'none';
        }
    });
}

function openCultivationModal() {
    const modal = document.getElementById('cultivation-modal');
    const modalBody = document.getElementById('cultivation-modal-body');
    
    modalBody.innerHTML = `
        <h2>🍄 Guia Completo de Cultivo de Psilocybe Cubensis</h2>
        
        <div class="cultivation-detailed-content">
            <div class="cultivation-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <p><strong>Aviso Legal:</strong> Este conteúdo é puramente educacional. O cultivo de cogumelos psicodélicos pode ser ilegal em muitas jurisdições. Verifique as leis locais antes de qualquer atividade.</p>
            </div>
            
            <div class="cultivation-section">
                <h3>🧪 Materiais Necessários</h3>
                <div class="materials-grid">
                    <div class="material-category">
                        <h4>Substrato</h4>
                        <ul>
                            <li>Arroz integral</li>
                            <li>Vermiculita</li>
                            <li>Farinha de arroz integral</li>
                            <li>Água destilada</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h4>Equipamentos</h4>
                        <ul>
                            <li>Frascos de vidro</li>
                            <li>Panela de pressão</li>
                            <li>Seringa estéril</li>
                            <li>Luvas de látex</li>
                            <li>Álcool isopropílico</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h4>Ambiente</h4>
                        <ul>
                            <li>Caixa de frutificação</li>
                            <li>Perlita</li>
                            <li>Termômetro</li>
                            <li>Higrômetro</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="cultivation-section">
                <h3>🔬 Processo Detalhado</h3>
                <div class="detailed-stages">
                    <div class="detailed-stage">
                        <div class="stage-header">
                            <span class="stage-icon">1️⃣</span>
                            <h4>Preparação do Substrato</h4>
                        </div>
                        <div class="stage-content">
                            <p><strong>Duração:</strong> 2-3 horas</p>
                            <p><strong>Processo:</strong></p>
                            <ul>
                                <li>Misture vermiculita, farinha de arroz e água em proporções específicas</li>
                                <li>Preencha frascos de vidro com a mistura</li>
                                <li>Esterilize em panela de pressão por 90 minutos</li>
                                <li>Deixe esfriar completamente em ambiente estéril</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="detailed-stage">
                        <div class="stage-header">
                            <span class="stage-icon">2️⃣</span>
                            <h4>Inoculação</h4>
                        </div>
                        <div class="stage-content">
                            <p><strong>Duração:</strong> 30 minutos</p>
                            <p><strong>Processo:</strong></p>
                            <ul>
                                <li>Trabalhe em ambiente estéril (caixa de luvas ou fluxo laminar)</li>
                                <li>Injete esporos através da tampa dos frascos</li>
                                <li>Sele os pontos de injeção com fita micropore</li>
                                <li>Armazene em local escuro a 24-27°C</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="detailed-stage">
                        <div class="stage-header">
                            <span class="stage-icon">3️⃣</span>
                            <h4>Colonização</h4>
                        </div>
                        <div class="stage-content">
                            <p><strong>Duração:</strong> 2-4 semanas</p>
                            <p><strong>Processo:</strong></p>
                            <ul>
                                <li>Monitore o crescimento do micélio branco</li>
                                <li>Mantenha temperatura constante (24-27°C)</li>
                                <li>Evite luz direta</li>
                                <li>Aguarde colonização completa (100% branco)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="detailed-stage">
                        <div class="stage-header">
                            <span class="stage-icon">4️⃣</span>
                            <h4>Frutificação</h4>
                        </div>
                        <div class="stage-content">
                            <p><strong>Duração:</strong> 1-2 semanas</p>
                            <p><strong>Processo:</strong></p>
                            <ul>
                                <li>Transfira para caixa de frutificação</li>
                                <li>Mantenha umidade alta (80-95%)</li>
                                <li>Forneça luz indireta</li>
                                <li>Ventile 2-3 vezes ao dia</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="detailed-stage">
                        <div class="stage-header">
                            <span class="stage-icon">5️⃣</span>
                            <h4>Colheita</h4>
                        </div>
                        <div class="stage-content">
                            <p><strong>Duração:</strong> Conforme necessário</p>
                            <p><strong>Processo:</strong></p>
                            <ul>
                                <li>Colha antes dos esporos se abrirem</li>
                                <li>Corte na base com lâmina estéril</li>
                                <li>Seque imediatamente ou consuma fresco</li>
                                <li>Prepare para próximas ondas de frutificação</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="cultivation-section">
                <h3>⚠️ Problemas Comuns e Soluções</h3>
                <div class="problems-grid">
                    <div class="problem-item">
                        <h4>🦠 Contaminação</h4>
                        <p><strong>Sintomas:</strong> Cores verdes, pretas ou azuis no substrato</p>
                        <p><strong>Solução:</strong> Descarte imediatamente e melhore esterilização</p>
                    </div>
                    <div class="problem-item">
                        <h4>💧 Umidade Baixa</h4>
                        <p><strong>Sintomas:</strong> Cogumelos rachados ou secos</p>
                        <p><strong>Solução:</strong> Aumente borrifação e ventilação</p>
                    </div>
                    <div class="problem-item">
                        <h4>🌡️ Temperatura Incorreta</h4>
                        <p><strong>Sintomas:</strong> Crescimento lento ou parado</p>
                        <p><strong>Solução:</strong> Ajuste para 24-27°C</p>
                    </div>
                </div>
            </div>
            
            <div class="cultivation-section">
                <h3>🧙‍♂️ Dicas dos Mestres Cultivadores</h3>
                <div class="tips-container">
                    <div class="tip-item">
                        <span class="tip-icon">🧚‍♀️</span>
                        <p><strong>Paciência é Mágica:</strong> Como as fadas cuidam de suas plantas, o cultivo requer tempo e dedicação. Não apresse o processo.</p>
                    </div>
                    <div class="tip-item">
                        <span class="tip-icon">🍄</span>
                        <p><strong>Limpeza Ritual:</strong> Mantenha tudo estéril como se fosse um ritual sagrado. Contaminação é o maior inimigo.</p>
                    </div>
                    <div class="tip-item">
                        <span class="tip-icon">🌙</span>
                        <p><strong>Ambiente Místico:</strong> Crie um ambiente controlado e estável. Os cogumelos são sensíveis às mudanças.</p>
                    </div>
                    <div class="tip-item">
                        <span class="tip-icon">✨</span>
                        <p><strong>Observação Atenta:</strong> Como um duende guardião, observe diariamente sem perturbar o processo.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
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

