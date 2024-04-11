import { ComponentProps } from 'react';
/*O operador '?:' Faz com que aceitamos diferentes tipos boolean*/
interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean    
}

/*Usamos contexto para separar a propriedade transparente da tag 'a' 
Logo se a borda for transparente escurecemos o botão*/
export function IconButton({ transparent, ...props }: IconButtonProps) {
    return (
        <button 
            {...props}  
            className={transparent 
                ? "bg-black/20 border border-white/10 rounded-md p-1.5"  
                : "bg-white/10 border border-white/10 rounded-md p-1.5" 
            }
          /> 
         )
}