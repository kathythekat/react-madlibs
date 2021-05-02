import React, { useState } from "react";
import StoryForm from "./StoryForm";
import StoryChoices from "./StoryChoices";
import "./Madlibs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const bookIcon = <FontAwesomeIcon icon={faBookOpen} size="4x" />;
function Madlibs() {
  const [isShowingForm, setIsShowingForm] = useState(false);
  const [isShowingStory, setIsShowingStory] = useState(false);
  const [isShowingStorySelector, setIsShowingStorySelector] = useState(true);

  const [story, setStory] = useState("");
  const [storyChoice, setStoryChoice] = useState("");

  function createStory(newStory) {
    setStory(newStory);
    showStory();
  }

  function showForm() {
    setIsShowingForm(true);
    setIsShowingStorySelector(false);
    setIsShowingStory(false);
  }

  function showStory() {
    setIsShowingForm(false);
    setIsShowingStorySelector(false);
    setIsShowingStory(true);
  }

  function showStorySelector() {
    setIsShowingForm(false);
    setIsShowingStorySelector(true);
    setIsShowingStory(false);
  }

  return (
    <div className="Madlibs">
      <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-3">
        <h1>Madlibs!</h1>
        <div className="my-1">{bookIcon}</div>
      </div>

      {isShowingStorySelector && (
        <StoryChoices
          setStoryChoice={(storyChoice) => {
            setStoryChoice(storyChoice);
            showForm();
          }}
        />
      )}

      {isShowingForm && (
        <div className="Madlibs-form">
          <StoryForm
            storyChoice={storyChoice}
            setStory={createStory}
            navigateBack={showStorySelector}
          />
        </div>
      )}

      {isShowingStory && (
        <div className="Madlibs-story">
          <div className="Story">
            <p>{story}</p>
          </div>
          <button className="btn btn-outline-warning" onClick={showForm}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default Madlibs;
