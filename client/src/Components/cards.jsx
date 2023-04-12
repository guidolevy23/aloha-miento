import React from "react";
import Card from "./card.jsx";

const deptos =[
    {
        meters: 70,
        ubication: "Calle 10, 123, Centro, Buenos Aires, Argentina",
        price: 1200,
        available: true,
        images: ["https://www.cronista.com/files/image/324/324650/6058ec0dead7c_360_480!.jpg?s=3974cb49ce20a2523bdf874d82334444&d=1650235271",
        "https://www.zonaprop.com.ar/noticias/wp-content/uploads/2016/08/depto.jpg"],
        description: "Este hermoso departamento cuenta con 70 metros cuadrados y está ubicado en el corazón de la ciudad de Buenos Aires, en el barrio de Centro. Dispone de dos habitaciones amplias y luminosas con camas matrimoniales, armarios y mesas de noche, una sala de estar cómoda con un sofá y televisión de pantalla plana, y una cocina totalmente equipada con nevera, horno, cocina eléctrica, microondas y cafetera. También dispone de un baño completo con ducha y agua caliente. La propiedad cuenta con aire acondicionado y calefacción central, y ofrece una ubicación privilegiada cerca de restaurantes, bares, tiendas y transporte público. No dude en contactarnos para más información y reservas.",
        id_seller: 1
    },
    {
        meters: 100,
        ubication: "Avenida 11, 123, Centro, Buenos Aires, Argentina",
        price: 12000,
        available: true,
        images: ["https://peru21.pe/resizer/Jm8PL1dej6pTymZ5-4Oif-7KoWY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZAHSA6RW6VBIPHJL6YW5CANUOI.jpg"],
        description: "Este hermoso departamento cuenta con 70 metros cuadrados y está ubicado en el corazón de la ciudad de Buenos Aires, en el barrio de Centro. Dispone de dos habitaciones amplias y luminosas con camas matrimoniales, armarios y mesas de noche, una sala de estar cómoda con un sofá y televisión de pantalla plana, y una cocina totalmente equipada con nevera, horno, cocina eléctrica, microondas y cafetera. También dispone de un baño completo con ducha y agua caliente. La propiedad cuenta con aire acondicionado y calefacción central, y ofrece una ubicación privilegiada cerca de restaurantes, bares, tiendas y transporte público. No dude en contactarnos para más información y reservas.",
        id_seller: 1
    },
    {
        meters: 150,
        ubication: "Avenida 145, 123, Centro, Buenos Aires, Argentina",
        price: 143000,
        available: true,
        images: ["https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/large_jpg/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896"],
        description: "Este hermoso departamento cuenta con 70 metros cuadrados y está ubicado en el corazón de la ciudad de Buenos Aires, en el barrio de Centro. Dispone de dos habitaciones amplias y luminosas con camas matrimoniales, armarios y mesas de noche, una sala de estar cómoda con un sofá y televisión de pantalla plana, y una cocina totalmente equipada con nevera, horno, cocina eléctrica, microondas y cafetera. También dispone de un baño completo con ducha y agua caliente. La propiedad cuenta con aire acondicionado y calefacción central, y ofrece una ubicación privilegiada cerca de restaurantes, bares, tiendas y transporte público. No dude en contactarnos para más información y reservas.",
        id_seller: 1
    },
    

]


function Cards (props){
    return(
        <div className="caja">
            {deptos.map(depto=>{
            return(
            <Card
                meters={depto.meters} 
                ubication={depto.ubication}
                price={depto.price}
                available={depto.available}
                images={depto.images}
            />
            )})}
        </div>
    )
}

export default Cards;