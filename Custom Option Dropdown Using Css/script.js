const togglers = document.querySelectorAll('.toggler')

togglers.forEach(btn => {
    btn.addEventListener('click',()=>{
        let target = btn.getAttribute('data-target')
        document.getElementById(target).classList.toggle('active')
    })
})