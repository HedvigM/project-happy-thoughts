import { InputContainer } from "./InputContainer";
import "./WriteThought.css";
import { addThought } from "@/app/actions";

export async function WriteThought() {
  return (
    <div className="outer-container">
      <form className="list content-container" action={addThought}>
        <div className="form-container">
          <label htmlFor="form">
            <h1>What&apos;s making you happy at the moment</h1>
          </label>
          <InputContainer />
          <button
            type="submit"
            className="send-button"
            /*    disabled={thought.length < 5 || thought.length > 140} */
          >
            <p>
              <span role="img" aria-label="heart emoji">
                {" "}
                ❤️{" "}
              </span>{" "}
              Send happy Thought!{" "}
              <span role="img" aria-label="heart emoji">
                {" "}
                ❤️{" "}
              </span>
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}
