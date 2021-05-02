import React, { useState } from "react";
import "./StoryForm.css";
import storyList from "./StoryList";
/**
 * Accepts setStory, storyChoice, and navigateBack functions as props
 * Uses storyList object to set form data
 * On submit, generates a string of the story, updates story state in Madlibs
 */

function StoryForm({ setStory, storyChoice, navigateBack }) {
  const storyType = storyList.stories[storyChoice];

  const [formData, setFormData] = useState(storyType.prompts);

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setStory(storyType.generate(formData));
  }

  return (
    <div className="StoryForm">
      <form id="form" onSubmit={handleSubmit}>
        {Object.keys(storyType.prompts).map((prompt) => (
          <div className="mb-3" key={prompt}>
            <input
              required="required"
              className="form-control"
              type="text"
              id={prompt}
              name={prompt}
              placeholder={prompt}
              onChange={handleChange}
              value={formData.prompt}
              aria-describedby={prompt}
              tabIndex={0}
            />
          </div>
        ))}
        <div className="StoryForm-btn">
          <button
            type="button"
            onClick={navigateBack}
            className="btn btn-outline-warning mr-1"
            tabIndex={-1}
          >
            Go Back
          </button>
          <button
            id="form"
            onSubmit={handleSubmit}
            type="submit"
            className="btn btn-warning"
            tabIndex={0}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="StoryForm-btn"></div>
    </div>
  );
}

export default StoryForm;
