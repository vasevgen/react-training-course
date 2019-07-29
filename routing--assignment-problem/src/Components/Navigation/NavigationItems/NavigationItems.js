import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul>
        <NavigationItem link="/courses">Courses</NavigationItem>
        <NavigationItem link="/users">Users</NavigationItem>
    </ul>
);

export default navigationItems;