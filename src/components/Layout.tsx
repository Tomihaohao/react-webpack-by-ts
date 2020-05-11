import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

const styles = require('./layout.css') 
interface PropsType {
    children: JSX.Element[] | JSX.Element
}  
const Layout : React.FC<PropsType> = (props) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={styles.h1}>
          webpack-for-react
        </Header>
      </Link>
      {props.children}
      <Divider />
      <p className={styles.pullRight}>
        Made with <Icon name="heart" color="red" /> by 6666
      </p>
    </Container>
  );
};

export default Layout;