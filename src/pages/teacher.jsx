import React from "react";
import TLayout from "../components/tLayout";
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import TGrade from './tGrade'
import TPredict from './tPredict'
import TBan from './tBan'
import TPositivity from './tPositivity'
const Teacher = () => {
  const { path } = useRouteMatch()
  return (
    <TLayout>
      <Switch>
        <Route path={`${path}/predict`} component={TPredict} />
        <Route path={`${path}/grade`} component={TGrade} />
        <Route path={`${path}/ban`} component={TBan} />
        <Route path={`${path}/positivity`} component={TPositivity} />
      </Switch>
    </TLayout>
  );
}

export default Teacher