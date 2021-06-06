import React from 'react'

// TODO hacer que cada item de ul aparezca de a uno

const DetallesList = ({selected}) => {
    return(
        <ul>
            <li>Prenda: {
                    selected.producto
                }
            </li>
            <li>Técnica: {
                    selected.tecnica === 'sublimado' ? 'Sublimado' :
                    selected.tecnica === 'estampado' ? 'Estampado' :
                    selected.tecnica === 'bordado' && 'Bordado'
                }
            </li>
            <li>Tamaño del logo: {
                    selected.size === "big" ? 'Grande' : 'Chico'
                }
            </li>
            <li>Ubicación del logo: {
                    selected.ubicacion === 'frente' ? 'Frente' :
                    selected.ubicacion === 'dorso' ? 'Dorso':
                    selected.ubicacion === 'ambos' && 'Frente y Dorso'
                }
            </li>
            <li>Color de la prenda: {
                    selected.color === 'blanco' ? 'Blanco':
                    selected.color === 'negro' ? 'Negro':
                    selected.color === 'azul-marino' ? 'Azul Marino':
                    selected.color === 'azul-francia' ? 'Azul Francia':
                    selected.color === 'verde-benetton' ? 'Verde Benetton':
                    selected.color === 'rojo' ? 'Rojo':
                    selected.color === 'gris' && 'Gris'
                }
            </li>
            <li>Cantidad: {
                    selected.cantidad === "A" ? '10 - 20' : 
                    selected.cantidad === "B" ? '21 - 50' :
                    selected.cantidad === "C" ? '51 - 100' :
                    selected.cantidad === "D" && '101 - 200'
                }
            </li>
        </ul>
    )
}

export default DetallesList