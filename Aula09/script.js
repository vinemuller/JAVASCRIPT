function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var img = document.createElement('manha.png.png')
        img.setAttribute('id', 'foto')
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.setAttribute('src', 'manha.png.png')
        document.body.style.background ='#afafd6'
            res.appendchild(img)

    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.setAttribute('src', 'tarde.png.png')
        document.body.style.background ='#b2da55'
            res.appendchild(img)

    } else {
        //Boa noite
        img.setAttribute('src', 'noite.png.png')
        document.body.style.background ='#131c72'
            res.appendchild(img)

    }
}