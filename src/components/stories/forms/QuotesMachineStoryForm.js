import { useRef } from "react";

export default function QuotesMachineStoryForm({ quoteId, userId, showModal }) {
  const textAreaRef = useRef(null);

  const processForm = (e) => {
    e.preventDefault();
    const body = textAreaRef.current.value.trim();
    if (!body.length) {
      showModal("hello", 3);
    }
  };

  return (
    <div id="form-container">
      <form id="new-story-form" onSubmit={processForm}>
        {/* <input type="hidden" class="user_id" value= ${user_id}>
    <input type="hidden" class="quote_id" value= ${quote_id}> */}
        <br />
        <div className="form-floating">
          <textarea
            className="form-control"
            id="description"
            required
            style={{ height: "100px" }}
            ref={textAreaRef}
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
        <br />
        <input type="submit" className="btn btn-success" id="create" />
      </form>
    </div>
  );
}
