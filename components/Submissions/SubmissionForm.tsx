import { FormEventHandler, ReactElement } from "react";

interface SubmissionFormProps {
    disabled: boolean;
}

const SubmissionForm = (props: SubmissionFormProps) => {

    if(props.disabled) {
        return (
            <h1>Submission form coming soon!</h1>
        )
    }

    const registerEntry: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        console.log("SubmissionForm: registerEntry");
    }

    return (
        <form id="submit" onSubmit={registerEntry}>
            <h1>Submission Form</h1>
            <label htmlFor="cfProjectId">Curseforge Project ID:</label><br />
            <input type="number" id="cfProjectId" name="cfProjectId" className="text-secondary" />
        </form>);
}

export default SubmissionForm;