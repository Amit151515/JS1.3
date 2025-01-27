var X = +prompt('Введите 1 число') //2
var Y = +prompt('Введите 2 число') //7
var Z = +prompt('Введите 3 число') //10

if (Y < X && Y > Z || Y > X && Y < Z){
    alert('Середина чисел ' + Y)
}else if (Z < X && Z > Y || Z > X && Z < Y){
    alert('Середина чисел ' + Z)
}else if (X < Y && X > Z || X > Y && X < Z){
    alert('Середина чисел ' + X)
}else {
        alert('Нету середины чисел')
}