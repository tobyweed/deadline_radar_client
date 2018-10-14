import { SideNav, Nav } from 'react-sidenav'
import React from 'react';
import Collapsible from '../Collapsible.js';
import ShowDeadline from './ShowDeadline';


const Navigation = () => (
  state = {
    deadlineIds: []
  };
    <SideNav defaultSelectedPath="1">
        <Nav id="1">
        <Collapsible addDeadlineId={this.addDeadlineId.bind(this)} />
        {deadlineIds.map(function(deadlineId, i) {
          return (
            <li key={i}>
              <ShowDeadline id={deadlineId} />
            </li>
          );
        })}
        </Nav>
        <Nav id="2">Item 2</Nav>
        <Nav id="3">Item 3</Nav>
    </SideNav>
)

export default Navigation;
