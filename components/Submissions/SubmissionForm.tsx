import { FormEventHandler, ReactElement } from "react";

interface SubmissionFormProps {
    disabled: boolean;
}

const SubmissionForm = (props: SubmissionFormProps) => {

    if (props.disabled) {
        return (
            <h1>Submission form coming soon!</h1>
        )
    }

    const registerEntry: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        console.log("SubmissionForm: registerEntry");
        console.log("CF:", formData.get("cfProject"));
        console.log("Deps:", formData.get("dependencies"));
    }

    return (
        <div className="text-center bg-secondary bg-opacity-50 rounded-lg w-max mx-auto">
            <div className="h-72 top-4 relative mx-4">
                <h1 className="underline">Submit your project</h1>
                <form id="submit" onSubmit={registerEntry} className="mx-auto my-4 w-max items-center flex flex-col">
                    <div className="sm:px-44 lg:px-72" />
                    <label htmlFor="cfProject">Link to your CurseForge project:</label>
                    <input type="url" id="cfProject" name="cfProject" className="text-secondary mb-4 w-full max-w-full rounded-full px-3" placeholder="https://www.curseforge.com/minecraft/mc-mods/YOUR_MOD" required />
                    <label htmlFor="dependencies">List your depdendencies, if any:</label>
                    <input type="text" id="dependencies" name="dependencies" className="text-secondary mb-4 w-full max-w-full rounded-full px-3" placeholder="List your dependencies here"/>

                    <button type="submit" className="bg-accent rounded-full p-3 font-bold text-secondary my-2 self-center hover:bg-important hover:text-primary">Submit your Entry</button>
                </form>
            </div>
        </div>
    );
}

export default SubmissionForm;