import React, { useState } from 'react';
import { View, Button } from 'react-native';

export default function MyButton() {
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
