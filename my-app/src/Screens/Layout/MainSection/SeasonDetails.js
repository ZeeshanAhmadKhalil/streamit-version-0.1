import React from "react";

function SeasonDetails() {
  return (
    <div className="season-details-container box">
      <div className="season-details-left not_box">
        <div>
          <h3>Season 2</h3>
        </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since
        </div>
      </div>

      <div className="season-image-container">
        <img className="season-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVDyakoA-59hyCEOztx1NFU6u7YzUwkvyAGmJyGl5DKK6grrFsCTM9uBTRldPtNuHtQg&usqp=CAU" />
      </div>
    </div>
  );
}

export default SeasonDetails;
