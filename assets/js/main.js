(async () => {
    
    // #region Preloader
    const preloader = document.getElementById('preloader');
    if(preloader){
        document.body.style.overflow = 'hidden';
    }
    window.addEventListener('load', () => {
        if(preloader){
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.style.overflow = '';
            }, 3500);
        }
    });
    // #endregion Preloader
})()