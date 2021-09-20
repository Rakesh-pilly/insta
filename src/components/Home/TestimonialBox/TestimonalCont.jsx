
import styled from 'styled-components'


const Comments = styled.div`



  * {
    margin: 0%;
  }
  q{
        font-size: 14px;
      line-height:25px;
  }


  section {
      text-align: center;
    width: 90%;
    display: flex;
    
    align-items: center;
    padding: 5%;
    background-color: #eeede4;
    border-radius: 15px;
    padding-bottom: 30px;
    
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 90%,
      52% 90%,
      45% 100%,
      43% 90%,
      0% 90%
    );
  }
`;

const Div = styled.div`

  display: grid;
 grid-gap: 5%;
 margin: 50px 0;


  
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2,auto);
    justify-content:center;
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    grid-template-columns: repeat(2,345px);
    justify-content:center;


} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(2,345px);
    justify-content:center;


}



`

const TestDiv = styled.div`
display : flex;

img{
    display: block;
    width:100px;
    height: 100px;
    border-radius: 50px;
    margin-right:15px;
}
align-items: center;
h3{
    font-size:15px;
    margin-bottom: 10px;
}
p{
    font-size: 14px;
}
    

`

const Button = styled.button`
    
    background-color: #02BFA0;
    border: 0;
    border-bottom: 3px solid #029A82;
    color : white;
    font-weight: 900;
    letter-spacing: 0.5px;
    padding: 15px 16px;
    width: 180px;
    border-radius: 6px;
    margin:  auto;
    display:block;

    :hover{
        cursor: pointer;
        background-color: #016153;

    }

`

export default  function TestimonialCont(){

    return (
        <div style = {{paddingBottom:'50px'}}>

        <Div>
<Comments>
          <div>
            <section>
              <q>
              "It was a really cool experience with Instahyre. It was very simple and clean without the bugging from job consultants. Keep up the good work guys!"
              </q>
            </section>
          </div>
          <TestDiv>
              <div>
                  <img src = 'https://static.instahyre.com/images/candidates/tushar.jpg' alt = 'proflie'/>
              </div>

            
            <div>
              <h3>Tushar, Hired buy Paytm</h3>
              <p>as Senior Engineering Mangaer</p>
            </div>
          </TestDiv>
         
        </Comments>

        <Comments>
          <div>
            <section>
              <q>
              "Little did I know about the reach of Instahyre. They have hundreds of start-ups searching for candidates. I received a good number of offers!"
              </q>
            </section>
          </div>
          <div>
            <TestDiv>
            <div>
                  <img src = 'https://static.instahyre.com/images/candidates/pravesh.jpg' alt = 'proflie'/>
              </div>
              <div>
              <h3>Pravesh, Hired byh Wooplr</h3>
              <p>as software Developer</p>

              </div>
            </TestDiv>
          </div>
         
        </Comments>

        

           </Div>

<Button> Your Dream Job »</Button>

</div>



    )

}