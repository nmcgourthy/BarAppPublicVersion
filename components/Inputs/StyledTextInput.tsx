import React, { FunctionComponent } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet ,} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputProps } from './types';
import { colors } from '../colors';
const StyledTextInput :  FunctionComponent<InputProps> = ({ icon, placeholder , onChangeText , iconColor = colors.secondary}) => {
 

  return (
    <KeyboardAvoidingView behavior='padding' style = {{flex:1}}>
        <View style={styles.container}>
          <MaterialCommunityIcons name = {icon} size={24} color = {iconColor} />
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor= {colors.grey}
              onChangeText={onChangeText}
              
            />
        </View>
      
    </KeyboardAvoidingView>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    height : 60,
    width : 220
  },
  textInput: {
    flex: 1,
    padding: 8,
    fontSize: 16
  }
});

export default StyledTextInput;
