import './styles.css'

export function Coodenador() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#"/>
        </div>
      </header>
      <div className='container'>
          <h1>Coordenador</h1>
          <nav>
            <button className='button-active'>Professor</button>
            <button>Disciplina</button>
            <button>Aluno</button>
            <button>Turma</button>
          </nav>
      </div>
    </>
    
  )
}