import React from "react";
import storyList from "./StoryList";

/**
 *
 * accepts story choice function as prop
 * renders a dropdown menu with titles of stories,
 * sends story choice back to Madlibs (parent component)
 */

function StoryChoices({ setStoryChoice }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-warning dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose your adventure!
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {Object.values(storyList.stories).map((story) => {
          const { id, title } = story;
          return (
            <li key={id}>
              <button
                onClick={() => setStoryChoice(id)}
                className="dropdown-item"
                type="button"
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StoryChoices;
