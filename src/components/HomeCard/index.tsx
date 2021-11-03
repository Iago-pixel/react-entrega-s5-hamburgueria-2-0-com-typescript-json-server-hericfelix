import { BallsContainer, Container, IconBox } from "./style";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useState } from "react";

const HomeCard = () => {
  const [balls] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]);

  return (
    <Container>
      <div>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
      </div>
      <div>
        <IconBox>
          <LocalMallOutlinedIcon />
        </IconBox>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os
          <strong> melhores</strong> ingredientes.
        </p>
      </div>
      <BallsContainer>
        {balls.map((_, index) => (
          <div key={index}></div>
        ))}
      </BallsContainer>
    </Container>
  );
};

export default HomeCard;
