import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nome }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState('Loading')

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${nome}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setLoading(false);
                    setRepos(resJson);
                }, 3000)
            })
    }, [nome]);
    return (
        <div className="container">
            {
                loading ? (
                    <h1>Carregando dados...</h1>
                ):(
                    <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {repositorio.name}<br />
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Tecnologia:</b>
                            {repositorio.language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Link do projeto</a>
                    </li>
                ))}
            </ul>

                )
                
            }
            
        </div>
    )
}

export default ReposList;