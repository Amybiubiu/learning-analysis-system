import React from "react";
import SLayout from "../components/sLayout";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom'
import SGrade from './sGrade'
import SRecommend from './sRecommend'
import SPredict from './sPredict'
import SCloud from './sCloud'
const Student = () => {
  const { path } = useRouteMatch()
  return (
    <SLayout>
      <Switch>
        <Route path={`${path}/grade`} component={SGrade} />
        <Route path={`${path}/recommend`} component={SRecommend} />
        <Route path={`${path}/predict`} component={SPredict} />
        <Route path={`${path}/cloud`} component={SCloud} />
      </Switch>
    </SLayout>
  );
};

export default Student
