/*Utilizamos interface para declarar um tipo
especifico a ser utilizado e o componentProps 
para cada função NavLink poder exportar
qualquer atributo da tag de ancora 'a' */

import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'>{
    children: string
}

/* Logo a expressão {...props} torna disponivel a importação de todas as tags 'a' */
export function NavLink(props: NavLinkProps) {
    return(
        <a {...props} className='font-medium text-sm'>
            {props.children}
            </a>
        
    )
} 