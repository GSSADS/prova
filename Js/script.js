document.addEventListener("DOMContentLoaded", function() {
    let currentBanner = 0; 
    const banners = document.querySelectorAll('.banner-slide'); 
    const totalBanners = banners.length; 

    function changeBanner() {
        banners[currentBanner].classList.remove('active');
        

        currentBanner = (currentBanner + 1) % totalBanners;
        
    
        banners[currentBanner].classList.add('active');
    }

   
    banners[currentBanner].classList.add('active');

    
    setInterval(changeBanner, 3000);
});
