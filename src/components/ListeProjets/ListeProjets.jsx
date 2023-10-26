import { createContext, useState, useEffect } from 'react';

const ListeProjets = createContext();

export function ListeProjetsProvider({ children }) {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    fetch('/mon-portfolio/projects.json')
      .then(response => response.json())
      .then(data => setProjets(data))
      .catch(error => console.error('Erreur chargement projets:', error));
  }, []);

  return (
    <ListeProjets.Provider value={projets}>
      {children}
    </ListeProjets.Provider>
  );
}

export default ListeProjets;