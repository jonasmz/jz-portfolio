(()=>{
    // #region Sidebar Toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
    
    const toggleSidebar = () => {
      sidebar.classList.toggle('sidebar-show');
      sidebarToggleBtn.classList.toggle('ri-menu-unfold-3-line');
      sidebarToggleBtn.classList.toggle('ri-menu-fold-3-line');
    }
    sidebarToggleBtn.addEventListener('click', toggleSidebar);

    // Cerrar el sidebar al hacer click en un item del menu
    document.querySelectorAll('#sidebar-menu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.sidebar-show')) {
        toggleSidebar();
      }
    });
  });
    
    // cerrar sidebar al hacer click fuera de él
    document.addEventListener('click', (event) => {
        if(sidebar.classList.contains('sidebar-show') && !sidebar.contains(event.target) && !sidebarToggleBtn.contains(event.target)){
            toggleSidebar();
        }
    });
    // #endregion Sidebar Toggle
    
    // #region ScrollTop
    const scrollTopBtn = document.getElementById('scroll-top');
    const toggleScrollTop = () => {
        if(scrollTopBtn){
            (window.scrollY > 90) ? scrollTopBtn.classList.add('show') : scrollTopBtn.classList.remove('show');
        }
    }
    
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
    // #endregion ScrollTop
    
    // #region Theme Toggle
    const toggleTheme = () => {
        const themeMode = document.documentElement.getAttribute('jz-data-theme') || "light";
        const newThemeMode = themeMode === "light" ? "dark" : "light";
        setThemeMode(newThemeMode);
    }

    const setThemeMode = (newThemeMode = "light") => {
        const toggleElement = document.querySelector('.theme-toggle');

        if (!toggleElement) return;

        localStorage.setItem('theme-mode', newThemeMode);

        toggleElement.classList.toggle('ri-sun-line');
        toggleElement.classList.toggle('ri-moon-line');
        document.documentElement.setAttribute('jz-data-theme', newThemeMode);
    }

    const loadThemeMode = () => {
        const savedThemeMode = localStorage.getItem('theme-mode') || "light";
        setThemeMode(savedThemeMode);
    }

    loadThemeMode();

    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
    // #endregion Theme Toggle
    
    // #region Preloader
    const preloader = document.getElementById('preloader');
    if(preloader){
        document.body.style.overflow = 'hidden';
    }
    window.addEventListener('load', () => {
        if(preloader){
            preloader.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    // #endregion Preloader
})();