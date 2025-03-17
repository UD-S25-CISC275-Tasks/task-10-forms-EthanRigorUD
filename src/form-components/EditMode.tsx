import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("Your Name");

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit mode:"
                checked={isEditMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIsEditMode(event.target.checked);
                }}
            />
            <Form.Check
                disabled={!isEditMode}
                type="checkbox"
                id="is-happy-check"
                label="Student?"
                checked={isStudent}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIsStudent(event.target.checked);
                }}
            />
            <Form.Group controlId="formMovieName">
                <Form.Label disabled={!isEditMode}>Name:</Form.Label>
                <Form.Control
                    disabled={!isEditMode}
                    value={username}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(event.target.value);
                    }}
                />
            </Form.Group>
            {!isEditMode && (
                <div>
                    {" "}
                    {username} {isStudent ? "is a" : "is not a"} student
                </div>
            )}
        </div>
    );
}
