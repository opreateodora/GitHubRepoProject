import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Sceren1 from './screen1';
import Screen2 from './screen2'
//import App from "./App.js"


test('changeMode return true', () => {
    expect( changeMode().toBe(false));
});
  