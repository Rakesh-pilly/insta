

import axios from "axios"
import { useEffect, useRef, useState } from "react"

const Profile = () => {

    const roleRef = useRef();
const [skills,setSkills] = useState('');
    let l = localStorage.getItem('login')
    
       

    useEffect(() => {
        axios.get(`http://localhost:3001/skills/?userId=${l}`).then((res) => {
            roleRef.current.value=res.data[0].role;
            setSkills(res.data[0]);
        });


    },[l])

const handleChange = (e) => {
    setSkills({...skills,[e.target.name]:e.target.value})
}

const handlePut = () => {
    axios.put(`http://localhost:3001/skills/${skills.id}`,skills)
}

    return (
        <div>
            <select name="role" ref={roleRef} onChange={(e) => handleChange(e)} id="">

            <option value="" defaultValue>Select Role...</option>
            
                        <option  value = 'Frontend Development'>Frontend Development</option>
                        <option value = 'Fullstack Development'>Fullstack Development</option>
                        <option value = 'Mobile Development'>Mobile Development</option>

            </select>

            <button onClick={handlePut}>Save Changes</button>
        </div>
    )
}

export default Profile
