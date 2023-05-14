import styles from './css/Projetos.module.css'
import { Link } from 'react-router-dom';

// import {AiFillBulb, AiOutlineTwitter, AiOutlineInstagram,AiOutlineLinkedin} from "react-icons/ai";
// import {FaFolder} from "react-icons/fa"
import { FiMoreHorizontal } from "react-icons/fi"
import { TbCircleArrowRightFilled } from "react-icons/tb"

function Projetos() {

    return (

        <div className={styles.sobre}>
            {/* <h1 className={styles.linha}></h1> */}
            <div className={styles.container_projetos}>
                <div className={styles.container_sobre}>
                    <h1>Meus projetos  </h1>
                    <p>Aqui alguns dos meus projetos recentes, você pode conferir melhor seus detalhes e acessa-los pelo github.
                    </p>

                </div>
                <div className={styles.grid1}>

                    <div className={styles.box}>
                        <h1>Locadora</h1>
                        <p>Projeto em C# e MySQL, com método CRUD completo.</p>
                       
                        {/* <div className={styles.title_project}>
                            <h1>Locadora</h1>
                            <p>Projeto em C# e MySQL, com metodo CRUD completo.</p><FiMoreHorizontal/>
                            </div> */}
                        <img className={styles.ftprojects} src='logoLocadora.png' alt='foto_perfil'>
                        </img> 
                        {/* <FiMoreHorizontal /> */}
                    </div>
                    <div className={styles.box}>
                        
                            <h1>CRUD</h1>
                            <p>Projeto em PHP e MySQL, com estrutura em HTML e CSS.</p>
                       
                            
                        <img className={styles.ftprojects}  src='lojaLogo.png' alt='foto_perfil'>
                        </img>
                    </div>
                    <div className={styles.box}>

                            <h1>Login</h1>
                            <p>Projeto em PHP e MySQL, com estrutura em HTML e CSS.</p>
                        <img className={styles.ftprojects} src='loginLogo.png' alt='foto_perfil'>
                            
                        
                        </img>
                    </div>
                    {/* <div className={styles.box}>
                        <div className={styles.title_project}>
                            <h1>Consulta </h1>
                            <p>Projeto usando Json e PHP, com estrutura em HTML e CSS.</p><FiMoreHorizontal />
                        </div>
                        <img className={styles.ftprojects} src='logoJson.png' alt='foto_perfil'>
                        </img></div>
                    <div className={styles.box}>
                        <div className={styles.title_project}>
                            <h1>Portifolio</h1>
                            <p>Projeto em React, com estrutura em HTML e CSS.</p><FiMoreHorizontal />
                        </div>
                        <img className={styles.ftprojects} src='ftPort.png' alt='foto_perfil'>
                        </img>
                    </div>
                    <div className={styles.box}>uso de api ou React native</div> */}
                    {/* <div className={styles.box}> Mais e detalhes
                    </div> */}

                </div>
                <Link to="/ProjetosPage"> <TbCircleArrowRightFilled /> </Link>
            </div>
        </div>

    )
}
export default Projetos; 