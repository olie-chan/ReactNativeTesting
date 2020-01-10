import React, {useState} from 'react';
import {create, act} from 'react-test-renderer';
import {Button, View} from 'react-native';

function MyButton() {
  const [someText, updateSomeText] = useState('');
  return (
    <View>
      {someText}
      <Button
        title="Nothing to do for now"
        onPress={() => updateSomeText('CLICKED')}
      />
    </View>
  );
}
describe('Button component', () => {
  test('it changes text when clicked', () => {
    let component;
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
