import React from 'react'

export const Comentarios = ({comentarios}) => {
    return (
        <div>
            {comentarios.map(comentario => {
                return <p>{comentario.comentario}</p>
            })}
        </div>
    )
}