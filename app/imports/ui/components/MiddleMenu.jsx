import React from 'react';
import { Menu, Grid, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="midmenu">
          <Grid centered container>
            <Dropdown text='MEN' icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item >Tanktops</Dropdown.Item>
                <Dropdown.Item >Shirts</Dropdown.Item>
                <Dropdown.Item >LongSleeves</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='WOMEN' icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item >Tanktops</Dropdown.Item>
                <Dropdown.Item >Shirts</Dropdown.Item>
                <Dropdown.Item >LongSleeves</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='KIDS' icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item >Tanktops</Dropdown.Item>
                <Dropdown.Item >Shirts</Dropdown.Item>
                <Dropdown.Item >LongSleeves</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='BRANDS' icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item >Tanktops</Dropdown.Item>
                <Dropdown.Item >Shirts</Dropdown.Item>
                <Dropdown.Item >LongSleeves</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='SEARCH' icon="dropdown">
            </Dropdown>
          </Grid>
        </Menu>

    );
  }
}
