import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>What is your answer?</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setAnswer(event.target.value);
                    }}
                >
                    {options.map((options: string) => (
                        <option key={options} value={options}>
                            {options}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
