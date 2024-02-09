import { InputContainer } from "./InputContainer";
import "./WriteThought.css";
import { addThought } from "@/app/actions";

export async function WriteThought() {
  return (
    <div className="outer-container">
      <form className="form-container" action={addThought}>
        <div className="form-inner-container">
          <label htmlFor="form">
            <h1>What&apos;s making you happy at the moment</h1>
          </label>
          <InputContainer />
        </div>
      </form>
    </div>
  );
}
