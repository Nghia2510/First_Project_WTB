// Automatic Slideshow - change image every 4 seconds
// Ham chay slider
    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("big-image");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 4000);    
    }
    /////////////////////////////////////////////
    const buyBtns = document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modalClose =document.querySelector('.js-modal-close')
// ham  hien thi modal mua ve ( them class open vao modal)
        function showBuytickets(){
            modal.classList.add('open')
        }
// ham an modal mua ve  ( go bo class open cua modal)
        function hideBuytickets(){
            modal.classList.remove('open')
        }
// lap qua tung the button va nghe hanh vi click
        for(const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuytickets)
        }
// nghe hanh vi click vao button close
        modalClose.addEventListener('click', hideBuytickets)

        modal.addEventListener('click', hideBuytickets)

        modalContainer.addEventListener('click', function(event){
            // ngan chan su noi bot 
            event.stopPropagation()
        })

        // tao ham dong mo menu
        var header = document.getElementById('header')
        var mobileMenu = document.getElementById('menu')
        var headerHight = header.clientHeight

        // Dong mo mobile menu
        mobileMenu.onclick = function(){
            var IsClosed = header.clientHeight === headerHight;
            if(IsClosed){
                header.style.height = "auto"
            }
            else{
                header.style.height = null;
            }
        }
        // Tu dong dong khi chon menu
            var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
            for( var i =0; i< menuItems.length; i++){
                var menuItem = menuItems[i];
                
                menuItem.onclick = function(event){
                var isParentmenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if(isParentmenu){
                    event.preventDefault();                    
                }
                else
                {
                    header.style.height = null;
                }
                }
                
            }
