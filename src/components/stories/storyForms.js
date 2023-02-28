export const quotesMachineStoryForm = (toggler) => {
  <form id="new-story-form">
    {/* <input type="hidden" class="user_id" value= ${user_id}>
    <input type="hidden" class="quote_id" value= ${quote_id}> */}
    <br />
    <div className="form-floating">
      <textarea
        className="form-control"
        id="description"
        required
        style="height: 100px"
      ></textarea>
      <label for="description">Description</label>
    </div>
    <br />
    <input type="submit" className="btn btn-success" id="create" />
  </form>;
};
