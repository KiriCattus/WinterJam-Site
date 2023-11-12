import { FormEventHandler } from "react";

interface SubmissionFormProps {
    disabled: boolean;
}

const SubmissionForm = (props: SubmissionFormProps) => {

    if (props.disabled) {
        return (
            <h1>Submission form currently in Discord under the winterjam-2021 channel!</h1>
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
        <div className="mx-auto text-center bg-opacity-50 rounded-lg bg-secondary w-max">
            <div className="relative mx-4 h-72 top-4">
                <h1 className="underline">Submit Your Project</h1>
                <form id="submit" onSubmit={registerEntry} className="flex flex-col items-center mx-auto my-4 w-max">
                    <div className="sm:px-44 lg:px-72" />
                    <label htmlFor="cfProject">Link to your CurseForge project:</label>
                    <input type="url" id="cfProject" name="cfProject" className="w-full max-w-full px-3 mb-4 rounded-full text-secondary" placeholder="https://www.curseforge.com/minecraft/mc-mods/YOUR_MOD" required />
                    <label htmlFor="dependencies">List your depdendencies, if any:</label>
                    <input type="text" id="dependencies" name="dependencies" className="w-full max-w-full px-3 mb-4 rounded-full text-secondary" placeholder="List your dependencies here"/>

                    <button type="submit" className="self-center px-6 py-3 my-2 font-bold rounded-full bg-accent text-secondary hover:bg-important hover:text-primary">Submit your Entry</button>
                </form>
            </div>
        </div>
    );
}

export default SubmissionForm;