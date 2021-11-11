import React from 'react'
import STNavbar from './STNavbar'

function STHeader() {
    return (
        <header id="main-header">
        <div class="main-header">
           <div class="container-fluid">
              <div class="row">
                 <div class="col-sm-12">
                  <STNavbar/>
                 </div>
              </div>
           </div>
        </div>
     </header>
    )
}

export default STHeader
