import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqEvents, setReqEvents] = useState<string>("0");
    const giveEvents = parseInt(reqEvents) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>attempts: {attempts}</div>
            <Form.Group>
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqEvents}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqEvents(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                disabled={!attempts}
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + giveEvents);
                }}
            >
                gain
            </Button>
        </div>
    );
}
