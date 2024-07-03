import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js'; // Importa el componente Header
import Myorg from './components/Myorg';
import Team from './components/Team/index.js'
import Footer from './components/Footer';




function App() {
  const [teams,setTeam] = useState([
    {
        title: "Programación",
        primaryColor : "#57C278",
        secondaryColor : "#D9F7E9"
    },
    {
        title: "Data Science",
        primaryColor : "#82CFFA",
        secondaryColor : "#E8F8FF"
    },
    {
        title: "Diseño",
        primaryColor : "#E06B69",
        secondaryColor : "FDE7E8"
    },
    {
        title: "Devops",
        primaryColor : "#DB6EBF",
        secondaryColor : "#FAE9F5"
    },
    {
        title: "UX/UI",
        primaryColor : "#FF8A29",
        secondaryColor : "#FFEEDF"
    }
])

  const [initialState, setUseState] = useState(true);
  const isVisible = () => {
    setUseState(!initialState);
  }
  const [members, setMembers] = useState([]);
  //const [currentMembers, deleteOneMember] = useState([...members]);

  const removeMember = (id) => {
     const newMembers=members.filter((mem) => (mem.id!==id));
     setMembers([...newMembers]);
  }

  const addTeam=(team)=>{
    setTeam([...teams,team])
  }
  
  return (
    <div className="App">
      <Header />
      {initialState && <Form teams={teams.map(team=> team.title)} members={members} setMembers={setMembers} addTeam={addTeam} />}
      <Myorg changeVisibility={isVisible} />
      <Team members={members} setMembers={setMembers} teams={teams} deleteMember={removeMember}/>
      <Footer />
    </div>
  );
}

export default App;
