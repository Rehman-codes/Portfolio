import './projects.css';
import { useState, useEffect } from 'react';

function Projects() {
    const [allReposData, setAllReposData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch('https://api.github.com/users/Rehman-codes/repos');
            const data = await response.json();
            setAllReposData(data);
        } catch (error) {
            console.error('error fetching data', error);
        }
    }

    const allRepos = allReposData.map(repo => {
        return (
        <div key={repo.id} className="card">
            <h2>{repo.name || 'Title'}</h2>
            <p>{repo.description || 'Description'}</p>
            <button onClick={() => window.location.href = repo.html_url}>Github</button>
            <button onClick={() => window.location.href = repo.homepage}>Preview</button>
        </div>
        )
});

    return (
        <>
            <h1 id='projects-heading'>Projects</h1>
            <section id="projects">
                {allRepos}
            </section>
        </>
    );
}

export default Projects;
