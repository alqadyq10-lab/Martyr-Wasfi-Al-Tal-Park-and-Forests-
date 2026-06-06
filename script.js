// وظيفة فتح الصورة وتكبيرها
function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("expandedImg");
    
    modal.style.display = "block";
    modalImg.src = element.src; // أخذ مسار الصورة التي تم النقر عليها
}

// وظيفة إغلاق نافذة الصورة
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// إغلاق الصورة في حال النقر على أي مكان فارغ بالشاشة
window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}