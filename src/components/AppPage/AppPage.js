import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Modules from './Modules';
import Consumes from './Consumes';
import Shared from './Shared';
import DirectDependecies from './DirectDependencies';

const AppPage = ({ app }) => {
  return (
    <div className="appPage">
      <br />
      <center>
        <h1>Application Information</h1>
      </center>
      <div id="appInfoContainer">
        <h2>{app.data.name}</h2>
        <VerticalTimeline layout="1-column-left" class="timeline">
          <VerticalTimelineElement>
            <Modules modules={app.data.modules} />
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <Consumes consumes={app.data.consumesNodes} />
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <Shared shared={app.data.overrides} />
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <DirectDependecies dependencies={app.data.dependencies} />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default AppPage;
