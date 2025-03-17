import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Group>
                    <Form.Label>What iss your answer:</Form.Label>
                    <Form.Control
                        value={givenAnswer}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setGivenAnswer(event.target.value);
                        }}
                    />
                </Form.Group>
                <div> {givenAnswer === "42" ? "✔️" : "❌"}</div>
            </Form.Group>
        </div>
    );
}
