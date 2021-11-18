import React from "react";

function Notifications() {
  return (
    <div>
      <div class="iq-sub-dropdown">
        <div class="iq-card shadow-none m-0">
          <div class="iq-card-body">
            <a href="#" class="iq-sub-card">
              <div class="media align-items-center">
                <img
                  src="images/notify/thumb-1.jpg"
                  class="img-fluid mr-3"
                  alt="streamit"
                />
                <div class="media-body">
                  <h6 class="mb-0 ">Boop Bitty</h6>
                  <small class="font-size-12"> just now</small>
                </div>
              </div>
            </a>
            <a href="#" class="iq-sub-card">
              <div class="media align-items-center">
                <img
                  src="images/notify/thumb-2.jpg"
                  class="img-fluid mr-3"
                  alt="streamit"
                />
                <div class="media-body">
                  <h6 class="mb-0 ">The Last Breath</h6>
                  <small class="font-size-12">15 minutes ago</small>
                </div>
              </div>
            </a>
            <a href="#" class="iq-sub-card">
              <div class="media align-items-center">
                <img
                  src="images/notify/thumb-3.jpg"
                  class="img-fluid mr-3"
                  alt="streamit"
                />
                <div class="media-body">
                  <h6 class="mb-0 ">The Hero Camp</h6>
                  <small class="font-size-12">1 hour ago</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
