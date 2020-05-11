import * as React from 'react';
import { Loader } from 'semantic-ui-react';
import ReactDelayRender from 'react-delay-render';

const Loading :React.FC = () => <Loader active size="massive" />;

export default ReactDelayRender({ delay: 300000 })(Loading);