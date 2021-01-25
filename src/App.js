import React from 'react'
import emailjs from "emailjs-com";

const App = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('apicoat', 'apicoat', e.target, '') // User ID will be here
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
          <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                  <div className="col-8 form-group mx-auto">
                      <input type="text" className="form-control" placeholder="Name" name="Name"/>
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                      <input type="text" className="form-control" placeholder="Country" name="Country" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                      <input type="text" className="form-control" placeholder="Brand" name="Brand"/>
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                      <input type="text" className="form-control" placeholder="Model" name="Model"/>
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                      <input type="email" className="form-control" placeholder="Email" name="Email"/>
                  </div>
                  <div className="col-8 pt-3 mx-auto" style={{ marginBottom: "60px" }}>
                      <input type="submit" className="btn btn-info" value="Contact Request" name="contactRequest"/>
                  </div>
              </div>
          </form>
      </div>
    </div>
  )
}

export default App
