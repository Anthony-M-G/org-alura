import "./cards.css"
import { MdDeleteForever } from "react-icons/md";
const Card = ({ member, teams ,deleteMember}) => {
    
    
    
    return (
        <>
            {
                teams.map((team) => {
                    
                        return(
                        member.category === team.title &&   
                        <>          
                        <div key={`member-${member.id}`} className="team-member" style={{ backgroundColor: team.primaryColor }} >
                            <MdDeleteForever  className="delete" onClick={()=>deleteMember(member.id)}/>
                            <img src={member.photo} alt={member.name} />
                         </div>
                        <div key={`member-${member.name}-info-${member.category}`} className="team-info">
                            <h4>{member.name}</h4>
                            <p>{member.position}</p>
                            <p>{member.category}</p>
                        </div>
                        </>
                        )
                })
        }</>
    );

}

export default Card;