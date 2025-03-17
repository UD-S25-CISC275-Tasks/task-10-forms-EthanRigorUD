import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "black",
    "white",
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <Form.Check
                    key={c}
                    inline
                    type="radio"
                    name={c}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                    id={c}
                    label={c}
                    value={c}
                    style={{
                        backgroundColor: c,
                    }}
                    checked={color === c}
                />
            ))}
            <div>
                you have chosen
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {color}
                </span>{" "}
                .
            </div>
        </div>
    );
}
