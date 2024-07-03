
import "./Team.css"
import Card from "../Cards/index.js";
const Team = ({members, teams, deleteMember}) => {
    
    /*useEffect(() => {
        const fetchMembers = async () => {
          const response = await  config.get();
          setMembers(response);
        };
        fetchMembers();
      }, [members, setMembers]);*/
    return (
        <div className="team">
        {teams.map((team) => {
          return(
          <div key={team.title} className="teams-container" style={{backgroundColor:team.secondaryColor}}><h3>{team.title}</h3>
              <div className="team-members" >
                {
                  members.map((member, index) => {
                    return(
                    member.category === team.title && 
                    <div key={`team-${team.title}-member-${index}`}> 
                      <Card key={member.id} member={member} teams={teams} deleteMember={deleteMember}/> 
                    </div>
                    )
                  }
                )
                }
              </div>
            </div>
         
          )}
      )}
      </div>
      
    );
}

export default Team;