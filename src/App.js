import React from 'react';
import api from './services/api';

import { useState, useEffect } from 'react';
 
import Header from './components/Header';
import './App.css'


/* 
Conceitos fundamentais do React:

Componente: 
Propriedade:
Estado e Imutabilidade: 

*/


function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

   async function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`);
        //setProjects([...projects, `Novo projeto ${Date.now()}` ]);
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Castr0visk"
        });

        const project = response.data;
        setProjects([...projects, project]);

    }

    return(
        <>   
            <Header title="Homepage" />

            {/* \\ <img /> */}

            <ul>
                {projects.map(project => <li key={project.id}> {project.title} </li>)}
            </ul>

            <button type="button" onClick={handleAddProject} >Adicionar projeto</button>


        </>
    );
}

export default App;