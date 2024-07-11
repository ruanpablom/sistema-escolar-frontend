import { NavLink } from 'react-router-dom'
import { FaUserEdit, FaUserGraduate, FaBook, FaBookReader  } from "react-icons/fa";
import './styles.css'

export function Coordenador() {
  return (
    <>
      
      <div className='container'>
        <h1 style={{margin:0}}>Seja bem vindo!</h1> 
        <h1 style={{margin:0, color: 'var(--secondary-color)'}}>Coordenador Ruan Pablo Medeiros</h1>
        <nav>
          <NavLink to="/professores" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <FaUserEdit size={56} />
            <span>Professores</span>
          </NavLink>
          <NavLink to="/disciplinas" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <FaBook size={56} />
            <span>Disciplinas</span>
          </NavLink>
          <NavLink to="/alunos" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <FaUserGraduate  size={56} />
            <span>Alunos</span>
          </NavLink>
          <NavLink to="/turmas" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <FaBookReader  size={56} />
            <span>Turmas</span>
          </NavLink>
        </nav>
      </div>
    </>
    
  )
}