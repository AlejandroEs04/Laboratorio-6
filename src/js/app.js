const menu = [
    {
        "nombre" : "Carne asada", 
        "descripcion" : "Una tipica carne asada regia con salchicha asada y sus quesadillas", 
        "precio" : 500, 
        "img" : "https://images.unsplash.com/photo-1542365887-1149961dccc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "nombre" : "Cabrito", 
        "descripcion" : "Cabrito al asador con su guarnision de papa asada", 
        "precio" : 1500, 
        "img" : "https://images.unsplash.com/photo-1562625964-ffe9b2f617fc?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "nombre" : "Papa asada", 
        "descripcion" : "Guarnicion de papa asada con sus galletas saladitas y sus verduras", 
        "precio" : 200, 
        "img" : "https://www.elmesonsandwiches.com/wp-content/uploads/2015/03/Papa-Surfer-e1431545486743.jpg"
    },
    {
        "nombre" : "Carne asada", 
        "descripcion" : "Una tipica carne asada regia con salchicha asada y sus quesadillas", 
        "precio" : 500, 
        "img" : "https://images.unsplash.com/photo-1542365887-1149961dccc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "nombre" : "Carne asada", 
        "descripcion" : "Una tipica carne asada regia con salchicha asada y sus quesadillas", 
        "precio" : 500, 
        "img" : "https://images.unsplash.com/photo-1542365887-1149961dccc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const comentarios = [
    {
        "nombre" : "Diana Elizabeth", 
        "texto" : "Muy buena la comida, disfrute mucho mi visita", 
        "rating" : 5, 
        "img" : "https://static.vecteezy.com/system/resources/thumbnails/004/270/186/small_2x/on-the-elongated-hand-young-female-friends-take-selfie-in-the-restaurant-with-two-yellow-drink-on-table-photo.jpg"
    },
    {
        "nombre" : "Carlos Alejandro", 
        "texto" : "Muy malo, la comida no estaba rica y vi una rata", 
        "rating" : 2, 
        "img" : "https://s3.envato.com/files/295057102/Meridiana_covid_restaurant_2020_212.jpg"
    },
    {
        "nombre" : "Alejandro Raphael", 
        "texto" : "Ta bien", 
        "rating" : 4, 
        "img" : "https://www.gloriafood.com/wp-content/uploads/2018/06/dark-background-1024x683.jpg"
    },
    {
        "nombre" : "Jorge Inostroza", 
        "texto" : "Disfrute mucho mi visita, espero ir otra vez", 
        "rating" : 4, 
        "img" : "https://www.shutterstock.com/image-photo/happy-couple-taking-selfie-smart-600nw-2258498871.jpg"
    },
    {
        "nombre" : "José Manuel", 
        "texto" : "Todo bien, pero mi carne todavia hacia mu", 
        "rating" : 3, 
        "img" : "https://buenazo.cronosmedia.glr.pe/original/2021/03/01/603d903a234f265f020789bf.jpg"
    },
    {
        "nombre" : "Luis Antonio", 
        "texto" : "Creo que esta bien, me parece que la carne tiene el...", 
        "rating" : 1, 
        "img" : "https://www.saborusa.com/wp-content/uploads/2020/12/Conoce-el-termino-ideal-de-la-carne-segun-su-tamanio_4.png"
    },
]

$(document).ready(function(){
    for(i=0; i < menu.length; i++) {
        $("#lstMenu").append(`
        <div class="col-sm-6 col-xl-3 col-md-4 mt-4">
            <div class="card m-2 p-0 shadow h-100 w-100">
                <div class="divImg">
                    <img src="${menu[i].img}" class="card-img-top" alt="Imagen producto ${menu[i].nombre}">
                </div>

                <div class="p-2">
                    <h3>${menu[i].nombre}</h3>
                    <p>${menu[i].descripcion}</p>

                    <p class="fw-bold fs-4 text-primary">$${menu[i].precio} mxn</p>
                </div>
            </div>
        </div>
    `)
    }

    for(i=0; comentarios.length; i++) {
        $("#lstComentarios").append(`
            <div class="col-lg-6 px-3">
                <div class="card mb-3 shadow">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${comentarios[i].img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${comentarios[i].nombre}</h5>
                            <p class="card-text">${comentarios[i].texto}</p>

                            <div>
                                ${comentarios[i].rating} ${getRating(comentarios[i].rating)}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `)
    }

    function getRating(num) {
        let query = ""
        for(j = 0; j < num; j++) {
            query += '<span class="fa fa-star checked"></span>'
        }

        const noStarts = num - 5;

        if(noStarts > 0) {
            for(i = 0; i < noStarts; i++) {
                query += '<span class="fa fa-star"></span>'
            }
        }
        return query
    }
});