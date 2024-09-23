import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Markdown from "react-markdown";
import { useState } from "react";
import Game from "../components/TicTacToe/Game.tsx";

function TicTacToePage() {
  const [reqVisible, setReqVisible] = useState(false);

  const requirementsBlock = `
**Difficulty: Hard**
1. Game Board:
   - Create a 3x3 grid to represent the game board.
   - Each cell should be clickable.

2. Player Turns:
   - Alternate between two players (X and O).
   - Display whose turn it is.

3. Game Logic:
   - Allow players to make a move by clicking on an empty cell.
   - Prevent moves on already occupied cells.
   - Declare a winner when a win condition is met.

4. Reset Functionality:
   - Add a button to reset the game and start over.

5. Responsiveness:
    - Ensure the game is playable on different screen sizes.

6. Performance:
    - Optimize rendering to avoid unnecessary re-renders.
`;
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>
                Requirements{" "}
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => setReqVisible(!reqVisible)}
                >
                  {reqVisible ? "^" : "v"}
                </Button>
              </span>
            </Card.Header>
            <Card.Body
              style={{
                maxHeight: reqVisible ? "1000px" : "0",
                overflow: "hidden",
                transition: "max-height 0.5s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Title>Tic Tac Toe: Classic Variant</Card.Title>
              <Card.Text as="div">
                <Markdown>{requirementsBlock}</Markdown>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>Implementation</Card.Header>
            <Card.Body>
              <Game />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TicTacToePage;
