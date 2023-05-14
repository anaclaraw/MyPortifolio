import styles from './css/Formacoes.module.css'
import { Link } from "react-router-dom"
import { SiHtml5, SiCss3, SiReact, SiMysql, SiPhp, SiFuturelearn } from 'react-icons/si'
import { RiCodeSSlashFill } from "react-icons/ri"
import { RiMapPinUserFill } from "react-icons/ri"
import {FaJava} from "react-icons/fa"
import {TbBrandCSharp} from "react-icons/tb"

function Formacoes() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textAbout}>

                    <div className={styles.div_title}>
                        <h1>Sobre mim</h1>
                        <p className={styles.mytext}>Aqui as minhas principais formações e para completar,
                            meus pontos de destaque são  raciocinio lógico, resolução de problemas, design inteligente,
                            prazos, comunicação e dedicação.</p>
                    </div>

                 
                </div>

                <div className={styles.grid}>
                    <div className={styles.box} id={styles.teste} >
                        {/* <img className={styles.ftforma} src='program.png' alt='foto_perfil'></img> */}
                        <h3>Programação</h3>
                        <p>Gosto da lógica de programação e entender o desenvolvimento do software por completo.</p>
                        <div className={styles.programacao}>
                            <li><SiHtml5 /></li>
                            <li><SiCss3 /></li>
                            <li><SiReact /></li>
                            <li><SiMysql /></li>
                            <li><SiPhp /></li>

                            <li><FaJava/></li>
                            <li><TbBrandCSharp/></li>

                        </div>

                    </div>
                    <div className={styles.box}>
                        {/* <img className={styles.ftforma} src='school.png' alt='foto_perfil'></img> */}
                        <h3>Formações</h3>
                        {/* <li>ETEC ERMELINDA GIANNINI </li> */}
                        <li><strong>2021-2023| ETEC Ermelinda</strong> </li>
                        <li> Técnico em Desnvolvimento de Sistemas, integrado ao ensino médio.</li>
                        <li>Inglês Básico A2 | CNA idiomas</li>

                    </div>

                    <div className={styles.box}>
                        {/* <img className={styles.ftforma} src='courses.png' alt='foto_perfil'></img> */}
                        <h3>Cursos Complementares</h3>
                        <li>2023| Oficina de Hardware - FATEC Santana de Parnaíba</li>
                        <li>2023| Curso de Hardware - FATEC Santana de Parnaíba</li>
                        <li><Link to="/Cursos" className={styles.link}> + Mais e certificados </Link></li>

                        {/* <a className={styles.link_absolute} href='https://www.google.com/search?q=certificados&rlz=1C1ISCS_pt-PTBR954BR954&sxsrf=APwXEddDREMyWHxlJCXgeGM3cxdxlO8ntQ:1682823077949&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiQn5--zND-AhXJvpUCHRNVB6QQ_AUoAXoECAEQAw&biw=718&bih=771&dpr=1'> +Mais e Certificados </a> */}
                    </div>
                </div>
                {/* <h2 className={styles.lala}>.</h2> */}

            </div>
        </div>
    )
};
export default Formacoes;