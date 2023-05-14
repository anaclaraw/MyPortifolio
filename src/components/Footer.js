import styles from './Footer.module.css'
import { Link } from "react-router-dom"
import {MdLocationOn} from "react-icons/md"

function Footer() {
    return (
        <div>
            <>
                <footer className={styles.footer}>
                    <div className={styles.containers}>
                        <div>
                            <h2>Portifolio</h2>
                            <p>Ana Clara Melo de Sousa</p>
                            <MdLocationOn/> São Paulo - SP
                        </div>
                        <div className={styles.container}>
                            <h3>PÁGINAS</h3>
                            <li><Link to="/Cursos"> Home </Link></li>
                            <li><Link to="/ProjetosPage"> Projetos </Link></li>
                            <li><Link to="/contato"> Contato </Link></li>
                            
                        </div>
                        <div className={styles.container}>
                            <h3>REDES</h3>
                            {/* <a href='https://www.linkedin.com/in/euanaclaramelo' >Linkedin</a> */}
                            <Link to="https://www.linkedin.com/in/euanaclaramelo">Linkedin</Link>
                            <Link to="https://twitter.com/">Github</Link>
                            <Link to="mailto:cadastrosanaw@gmail.com?subject=Resposta portifólio&body=Ol%C3%A1%2C%20Ana%20Clara!">Email</Link>
                            <Link to="https://www.instagram.com/anclaramelo/">Instagram</Link>

                        </div>
                        <div className={styles.container}>
                            <h3>RECURSOS</h3>
                            <li>React</li>
                            <li>React-router</li>
                            <li>Versel e Github</li>
                            <li>Referências</li>
                        </div>
                    </div>
                    {/* <div className={styles.container}></div> */}
                    <img className={styles.copy} src='logo_footer.png' width={40} height={50} alt='ft_logo'></img>
                    <p className={styles.copy}>&copy; Copyright 2023</p>
                </footer>

            </>
        </div>

    )
}

export default Footer;