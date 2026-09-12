class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        this.innerHTML = `
            <nav class="navbar">
                <div class="container nav-container">
                    <a href="index.html" class="logo">
                        <span class="logo-icon">🦷</span>
                        <div>
                            <h1>Rani Multispeciality</h1>
                            <p>Dental Clinic</p>
                        </div>
                    </a>
                    
                    <div class="mobile-menu-btn" id="mobileMenuBtn">☰</div>
                    
                    <ul class="nav-links" id="navLinks">
                        <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
                        <li><a href="services.html" class="${currentPath === 'services.html' ? 'active' : ''}">Services</a></li>
                        <li><a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">About Doctor</a></li>
                        <li><a href="testimonials.html" class="${currentPath === 'testimonials.html' ? 'active' : ''}">Testimonials</a></li>
                        <li><a href="blog.html" class="${currentPath === 'blog.html' ? 'active' : ''}">Blog</a></li>
                        <li><a href="gallery.html" class="${currentPath === 'gallery.html' ? 'active' : ''}">Gallery</a></li>
                    </ul>
                    <a href="appointment.html" class="btn btn-primary">Book Appointment</a>
                </div>
            </nav>
        `;

        // Mobile menu toggle logic
        setTimeout(() => {
            const btn = document.getElementById('mobileMenuBtn');
            const links = document.getElementById('navLinks');
            if(btn && links) {
                btn.addEventListener('click', () => {
                    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
                    links.style.flexDirection = 'column';
                    links.style.position = 'absolute';
                    links.style.top = '90px';
                    links.style.left = '0';
                    links.style.right = '0';
                    links.style.backgroundColor = 'var(--white)';
                    links.style.padding = '20px';
                    links.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                    links.style.zIndex = '999';
                });
            }
        }, 100);
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container footer-container">
                    <div class="footer-col">
                        <h3>Rani Multispeciality</h3>
                        <p>Providing premium, painless dental care with modern equipment and highly qualified professionals.</p>
                        <p><strong>Phone:</strong> <br>+91 8340547519 <br> +91 6299917464</p>
                    </div>
                    <div class="footer-col">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Our Services</a></li>
                            <li><a href="about.html">About Dr. Komal Rani</a></li>
                            <li><a href="appointment.html">Book Appointment</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h3>Address</h3>
                        <p>
                            Kathal More - Argora - Ranchi Rd,<br>
                            beside TVs Showroom,<br>
                            near Padosan Hotel,<br>
                            Ranchi, Jharkhand 835303
                        </p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        &copy; ${new Date().getFullYear()} Rani Multispeciality Dental Clinic. All rights reserved.
                    </div>
                </div>
            </footer>
        `;
    }
}

class WhatsappButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a href="https://wa.me/918340547519" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2.004c-7.72 0-14 6.28-14 14 0 2.456.634 4.836 1.84 6.942L2 29.996l7.25-1.905c2.054 1.096 4.364 1.674 6.75 1.674 7.72 0 14-6.28 14-14s-6.28-14-14-14zM16 27.273c-2.127 0-4.21-.572-6.04-1.656l-.434-.256-4.493 1.18 1.196-4.38-.282-.448A11.455 11.455 0 0 1 4.492 16c0-6.353 5.172-11.524 11.524-11.524 6.354 0 11.526 5.172 11.526 11.525S22.355 27.273 16 27.273zm6.33-8.625c-.347-.174-2.052-1.013-2.37-1.13-.318-.115-.55-.174-.78.174-.233.348-.897 1.13-1.1 1.36-.202.233-.405.26-.75.088-.348-.175-1.465-.54-2.79-1.72-1.033-.92-1.73-2.057-1.932-2.404-.202-.348-.022-.536.152-.71.156-.156.348-.405.52-.61.173-.202.232-.347.347-.578.115-.23.058-.433-.028-.607-.087-.174-.78-1.88-1.07-2.575-.28-.678-.565-.586-.78-.596-.202-.01-.433-.01-.665-.01-.23 0-.607.086-.925.433-.318.348-1.215 1.186-1.215 2.893 0 1.707 1.244 3.355 1.417 3.587.173.23 2.446 3.733 5.926 5.234 3.48 1.5 3.48.998 4.116.94s2.052-.838 2.34-1.648c.29-.81.29-1.505.204-1.65-.088-.145-.318-.23-.665-.405z"/>
                </svg>
            </a>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
customElements.define('whatsapp-button', WhatsappButton);
