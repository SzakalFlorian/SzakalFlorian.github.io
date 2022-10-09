n = 20, m = 20, x = 15, y = 15, u = 3, z = 4, ud = 1, zd = 0, xd = -1, yd = 0
table = Array(n).fill().map(() => Array(n).fill())
to = document.getElementById('t'), to.innerHTML = `
<table>${Array(m).fill(`
    <tr>
    ${Array(n).fill(`<td/>`).join('')}
    </tr>`).join('')}
</table>`
bo = document.getElementById('b'), bo.innerHTML = `
<table class="masodik">${Array(m).fill(`
    <tr>
    ${Array(n).fill(`<td/ class="masodik">`).join('')}
    </tr>`).join('')}
</table>`
to = to.children[0].children[0], table[y][x] = 1
to.children[y].children[x].style.backgroundColor = "#314d34"
addEventListener("keydown", e => { switch (e.key) {
    case "ArrowUp"    : [xd, yd] = [ 0,-1]; break
    case "ArrowDown"  : [xd, yd] = [ 0, 1]; break
    case "ArrowLeft"  : [xd, yd] = [-1, 0]; break
    case "ArrowRight" : [xd, yd] = [ 1, 0]; break
}})
iv = setInterval(() => {
    x += xd, y += yd
    if (x >= n || y >= m || x < 0 || y < 0 || table[y][x] == 1)
        clearInterval(iv)
    else
        table[y][x] = 1,
        to.children[y].children[x].style.backgroundColor = "#314d34"
}, 100)


bo = bo.children[0].children[0], table[z][u] = 1
bo.children[z].children[u].style.backgroundColor = "#24282e"
addEventListener("keydown", f => { switch (f.key) {
    case "w"    : [ud, zd] = [ 0,-1]; break
    case "s"  : [ud, zd] = [ 0, 1]; break
    case "a"  : [ud, zd] = [-1, 0]; break
    case "d" : [ud, zd] = [ 1, 0]; break
}})
iv = setInterval(() => {
    u += ud, z += zd
    if (u >= n || z >= m || u < 0 || z < 0 || table[z][u] == 1)
        clearInterval(iv)
    else
        table[z][u] = 1,
        to.children[z].children[u].style.backgroundColor = "#24282e"
}, 100)