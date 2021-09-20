import React from 'react';
import styles from "../Opportunities/Opportunity.module.css"


const OpportunityViews = ({jobs}) => {
    // const [jobs, setJobs] = useState('');

    // if (!jobs) {
    //     axios.get('http://localhost:3001/jobs').then(res => { console.log(res, 'res'); setJobs(res.data) })
    // }

    if (jobs) {
       
            var { responsibilities,skills, about, location, functions} = jobs;
            return (

                
                <div className={styles.oppview__box}>
                    <div className={styles.oppview__box2}>
                        <div>
                            <img className={styles.opp__logo} src={jobs.logo} alt="" />
                        </div>
                        <div>
                            <h2 className={styles.opp__role}> {jobs.role} </h2>
                            <p className={styles.location}> {jobs.company} </p>
                            <p className={styles.location}> {jobs.location} </p>
                        </div>
                    </div>
                    <div>
                        <h1 className={styles.oppview__descriptions}> JOB DESCRIPTION </h1>
                        <p> <span className={styles.oppview__head} > {skills}  </span> </p>
                        <p> <span className={styles.oppview__head}> Location :  {location} </span></p>
                        <p> <span className={styles.oppview__head}> Function : {functions} </span></p>
                        
                            <h4 className={styles.oppview__descriptions}>Responsiblity</h4>
                        <ul className={styles.opp__ul}>    
                            <li>{responsibilities[0]}</li>
                            <li>{responsibilities[1]}</li>
                            <li>{responsibilities[2]}</li>
                        </ul>

                        <h1 className={styles.oppview__descriptions}> ABOUT </h1>
                        <p> <span className={styles.oppview__head}> {about} </span> </p>
                    </div>
                    <div className={styles.opp__productphotos}> 
                           <h1 className={styles.oppview__descriptions}> Infozzle Office and Product Photos </h1>
                           <div className={styles.oppview__images}> 
                                <div>
                                    <img className={styles.opp__logo} src={jobs.images[0]} alt=""/>
                                  
                                </div>
                                <div>
                                    <img className={styles.opp__logo} src={jobs.images[1]} alt=""/>
                                </div>
                                <div>
                                    <img className={styles.opp__logo} src={jobs.images[2]} alt=""/>
                                </div>
                                <div>
                                    <img className={styles.opp__logo} src={jobs.images[3]} alt=""/>
                                </div>
                           </div>
                    </div>
               
                </div>
               

            )
        
    }
    return <h1>Fetching...</h1>

}

export default OpportunityViews
