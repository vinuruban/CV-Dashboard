import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class CVDashboard extends Component {
  render() {
    return (

          <form>
                
              <h1 id="dashTitle">CV Dashboard</h1>
          
              <div>
                <button id =  "btnBrowse">
                    Browse
                </button>

                <button id = "btnUpload">
                    Upload CV
                </button>

                <button id = "btnFlaggedCV">
                    Flagged CV's
                </button>

                <button id = "btnSearch">
                    Q
                </button>

                <input id = "emailSearch" type="text" name="name" />
                </div>


              <div>
                  {/* <FilePond allowMultiple={true} ondrop="myFunc(event)"/> */}
                <FilePond id = "cvArea" allowMultiple={true} server="http://qacvmanager.azurewebsites.net/user/1/cv" />
              </div>


              <div>
                <button id = "btnDownload">
                    Download CV
                </button>
                
                <button id = "btnFlagToggle">
                    Flag / Unflag CV
                </button>

                <button id = "btnDelete">
                    Delete CV
                </button>
              </div>

        </form>
    );

      // function myFunc(e) {
      //   if (e.files.length > 3) {
      //     alert("Please select max 20 files.");
      //     e.preventDefault();
      //     }
      //   }
  }
}

export default CVDashboard;
