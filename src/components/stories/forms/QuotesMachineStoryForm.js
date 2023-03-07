import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createStory } from "../../../app/features/users/usersSlice";

export default function QuotesMachineStoryForm({ quoteId, userId, showModal }) {
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();

  const processForm = (e) => {
    e.preventDefault();
    const body = textAreaRef.current.value.trim();
    if (!body.length) {
      showModal("The story cannot be blank", 2);
      return;
    }
    const payload = {
      description: body,
      user_id: 2,
      quote_id: quoteId,
    };
    dispatch(createStory(payload))
      .unwrap()
      .then((resp) => {
        console.log(resp);
        showModal("Story successfully created");
      })
      .catch((err) => {
        console.log(err);
        showModal(err.message, 2);
      });
  };

  return (
    <div id="form-container">
      <form id="new-story-form" onSubmit={processForm}>
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
