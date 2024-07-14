function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active")
}

document.getElementById('show-more').addEventListener('click', function() {
    var items = document.querySelectorAll('.bento-grid .bento-item');
    items.forEach(function(item) {
        item.style.display = 'block';
    });
    this.style.display = 'none';
});
