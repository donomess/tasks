import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Donovan Messer
                Hello World
            </header>
            <h1> ur mom</h1>
            <img
                src="./src/augh.jpg"
                alt="pufferfish eats carrot, makes funny noise"
            />
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <Container>
                    <Row>
                        <Col>Column one</Col>
                        <Col>Second Column.</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
