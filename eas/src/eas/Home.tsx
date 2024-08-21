import GradientBar from "../components/GradientBar";
import { Sidebar } from "../components/Sidebar"
import { 
  Title,
  Container,
  WhiteBox,
} from "../styles/web"

function Home() {
  
  return (
    <Container>
      <Sidebar />
      <GradientBar />
      <WhiteBox>
        <Title>
        Welcome to Attested Crypto Fan!
          
          To allow Farcaster users attest that they are true crypto fans!
        </Title>
  
      </WhiteBox>
    </Container>
  );
}

export default Home;
 