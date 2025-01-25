var X = +prompt('Введите число')
var Y = +prompt('Введите число')
var Z = +prompt('Введите число')

if (X > Y > Z || X < Y < Z){
    alert('Середина чисел ' + Y)
}else if (Y > Z > X || Y < Z < X){
    alert('Середина чисел ' + Z)
}else if (Z > X > Y || Z < X < Y){
    alert('Середина чисел ' + X)
}else {
        alert('Нету середины чисел')
}