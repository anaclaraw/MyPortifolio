import { Link } from 'react-router-dom';
import styles from './css/ProjetosPage.module.css'
import { TbCircleArrowRightFilled } from "react-icons/tb"


export default function ProjetoPage() {
    return (
        <div className={styles.op}>
            <h2>Meus projetos</h2>
            
            <div className={styles.grid}>
              <div className={styles.grid_item}>
                <h3>Locadora</h3>
                <p>Em C#, MySQL e xml.</p>
                <Link to="https://github.com/anaclaraw/Locadora.git"><TbCircleArrowRightFilled /></Link>
              </div>
              <div className={styles.grid_item}>
                <h3>CRUD</h3>
                <p>PHP e MySQL, estruturado em HTML e CSS.</p>
                <Link to="https://github.com/anaclaraw/CRUD-Loja.git"><TbCircleArrowRightFilled /></Link>
              </div>
              <div className={styles.grid_item}>
                <h3>Login e Logout</h3>
                <p>Em PHP e MySQL, estruturado em HTML e CSS.</p>
                <Link to="https://github.com/anaclaraw/LoginPHP.git"><TbCircleArrowRightFilled /></Link>
              </div>
              <div className={styles.grid_item}>
                <h3>Design Telas</h3>
                <p>Parte criativa com criação de prototipos de design para apps e sites.</p>
                <Link to="https://www.figma.com/proto/xuy4CRXpWyGVDanxeIizlm/Untitled?type=design&node-id=1-99&scaling=min-zoom&page-id=0%3A1"><TbCircleArrowRightFilled /></Link>
              </div>
              <div className={styles.grid_item}>
                <h3>Portifólio</h3>
                <p>Em React, estruturado em JSX e CSS.</p>
                <Link to="/projeto01"><TbCircleArrowRightFilled /></Link>
              </div>
              <div className={styles.grid_item}>
                <h3>Usando API</h3>
                <p>Em PHP, estruturado em HTML e CSS.</p>
                <Link to="https://github.com/anaclaraw/APIfatos.git"><TbCircleArrowRightFilled /></Link>
              </div>
             
            
{/* PROJETOS: FIGMA DESING, TELA LOGIN, LOCADORA, PORTIFOILIO, LOJA-PW, JSON, LINK GIT HUB */}
              
            </div>
            
        </div>

    )
}