import { NavLink, Outlet } from "react-router-dom";

import './styles.css'

export function Layout() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#"/>
        </div>
        <nav>
          <NavLink to="/" className={({ isActive}) => isActive ? "a-active" : ""}>Home</NavLink>
          <NavLink to="professores" className={({ isActive}) => isActive ? "a-active" : ""}>Professores</NavLink>
          <NavLink to="disciplinas" className={({ isActive}) => isActive ? "a-active" : ""}>Disciplinas</NavLink>
          <NavLink to="alunos" className={({ isActive}) => isActive ? "a-active" : ""}>Alunos</NavLink>
          <NavLink to="turmas" className={({ isActive}) => isActive ? "a-active" : ""}>Turmas</NavLink>
        </nav>
        <div className="right"></div>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}