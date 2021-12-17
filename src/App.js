import React from "react";
import Main from "./component/main";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <div class="container-fluid" style={{ padding: "0" }}>
      <div class="col-lg-12">
        <div class="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
