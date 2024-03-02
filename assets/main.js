function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
let accordian_1 = document.querySelectorAll(".accordian_1");
        accordian_1.forEach(function (e) {
            e.addEventListener("click", function () {
                const isitactive = e.classList.contains("active");
                accordian_1.forEach(function (e) {
                    e.classList.remove("active");
                })
                if (!isitactive) {
                    e.classList.toggle("active");
                }
            })
        });

        
        
          
        const tab_les = document.querySelectorAll('.tab_les')
        function nav_tabs(tabs) {
            tab_les.forEach(content => {
                content.style.display = 'none'
        
            })
            const select = document.getElementById(tabs)
            select.style.display = 'block'
          
        }
        
                                                                         
        nav_tabs('tabfirst')
        



        const tablets = document.querySelectorAll('.tablets')
        function navtabs(tabs) {
            tablets.forEach(content => {
                content.style.display = 'none'
        
            })
            
            const select = document.getElementById(tabs)
            select.style.display = 'block'
          select.classList.add("active")
        }
        
                                                                         
        navtabs('tab1')
        
      
const mytimeout = setTimeout(layout,3000)
function  layout()
{
    document.getElementById("preloader").classList.remove("image")
    document.getElementById("img").style.display ="none"
}