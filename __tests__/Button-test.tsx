import React from 'react';
import { create, act } from 'react-test-renderer';
import { MyButton } from '../Components';

describe('Button component', () => {
  test('it changes text when clicked', () => {
    let component: any;
    act(() => {
      component = create(<MyButton />);
    });
    if (!component) {
      throw new Error('Component cannot be found');
    }

    const instance = component.root;
    const wrapper = instance.findByType('View');
    let [text, button] = wrapper.children;

    expect(text).toEqual('');

    act(() => button.props.onPress());
    text = wrapper.children[0];
    expect(text).toEqual('CLICKED');
  });
});
