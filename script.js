var kiritilganyosh = +prompt('Yoshingizni kiriting')
if (kiritilganyosh <= 18) {
    alert('Siz hali yoshsiz oqishingiz kerak')
}
else if (kiritilganyosh > 18 && kiritilganyosh <= 50) {
    alert('Siz ishlashingiz kerak')
}
else if (kiritilganyosh > 50 && kiritilganyosh <= 59) {
    alert('yaqinda pensiyaga chiqasiz')
}
else if (kiritilganyosh > 59 && kiritilganyosh <= 150) {
    alert('pensiyanerga ohwaysz agar tirik bolsangiz')
}
else{
    alert('aldama')
}