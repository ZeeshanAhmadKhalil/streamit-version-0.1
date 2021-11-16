import React from 'react'

function LowerFooter() {
    let myCurrentDate = new Date();

    let year = myCurrentDate.getFullYear();
    return (
        <div className="lower-footer">


            <div classsName="lower-footer-list">
                <ul className="info-share"> 
                          <li><a target="_blank" href="#">Privacy Policy</a></li>
                          <li><a target="_blank" href="#">Terms</a></li>
                          <li><a target="_blank" href="#">Condition</a></li>
                         
            </ul>
            </div>
        

            <p>Copyright &copy; |  {year} <span> Multitude</span> All rights reserved.</p>


            <div className="col-lg-2 col-md-6 mt-4 mt-lg-0">
            <ul className="info-share"> 
                          <li><a target="_blank" href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a target="_blank" href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a target="_blank" href="#"><i class="fa fa-github"></i></a></li>
            </ul>
         </div>
         
                    
        </div>
    )
}

export default LowerFooter
