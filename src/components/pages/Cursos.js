import styles from "./Cursos.module.css"
// import {Link} from "react-router-dom"

function Curso() {
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>CURSOS E CERTIFICADOS</h1>
      <div className={styles.cursos}>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='hardware_img.png' alt='foto_perfil'></img>
          <div className={styles.text}>
            <h1>Oficina de Hardware</h1>
            <strong>2023-Em execução</strong>
            <p>Oficina realizada na FATEC Santana de Parnaíba. Aulas presenciais de perifericos até sistemas operacionais.</p>
          </div>
        </div>

        <div className={styles.curso_item}>
          <img className={styles.ftprojects} src='curso2.png' alt='foto_perfil'></img>
          <div className={styles.text}>
            <h1>Design de Aplicativos na Transformação Digital</h1>
            <strong>2023</strong>
            <p>Sobre a compreensão da importância de desenvolvimento e aplicação de produtos
              e serviços para atender às necessidades atuais dos cidadãos por meio da inovação tecnológica.
              Abordando assuntos como: CX,UX,Experiencia do usuário, </p>
          </div>

          
        </div>
      </div>
    </div>)
}
export default Curso;