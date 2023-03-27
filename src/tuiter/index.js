import React from "react";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import tuitsReducer from "./tuits/tuits-reducer";
import whoReducer
  from "./reducers/who-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
 return (
  <Provider store={store}>
   <div className="row mt-2">
     <div className="col-4 col-md-3 col-lg-3 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-8 col-md-9 col-lg-6 col-xl-6"
          style={{"position": "relative"}}>
       {<HomeComponent />}
     </div>
     <div className="d-sm-none d-md-none d-lg-block col-lg-3">
       <WhoToFollowList/>
     </div>
   </div>
  </Provider>
  );
}

export default Tuiter