import React from "react";

function Usercreate() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input name="username" type={"text"} className="form-control" />
          </div>
          <div className="col-lg-6">
            <label>email</label>
            <input name="email" type={"text"} className="form-control" />
          </div>
          <div className="col-lg-4">
            <label>country</label>
            <select name=" country" className="form-control">
              <option value={""}>---SELECT</option>
              <option value={"IN"}>india</option>
              <option value={"USA"}>america</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>state</label>
            <select name="state" className="form-control">
              <option value={""}>---SELECT</option>
              <option value={"TN"}>tamilnadu</option>
              <option value={"KL"}>kerla</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>city</label>
            <select name="city" className="form-control">
              <option value={""}>---SELECT</option>
              <option value={"KR"}>karur</option>
              <option value={"MI"}>madurai</option>
            </select>
          </div>
          <div className="col-lg-3 mt-4">
            <input type={"submit"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;
