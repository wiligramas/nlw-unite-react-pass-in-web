import nlwUniteIcon from '../assets/nlw-unite-icons.svg' 
import { NavLink } from './nav-link'
 
 /*O nome das funções devem ser sempre escrito
 com inicias maiúsculas
 */ 
 export function Header() {
   return (  
      <div className='flex items-center gap-5 py-2'>
            <img src={nlwUniteIcon} alt="Unite Icon"/>
        
            <nav className='flex items-center gap-5'>
              <NavLink href="/eventos">Eventos</NavLink>
              <NavLink href="/participantes">Participantes</NavLink>  
            </nav>
      </div>
   )
 } 