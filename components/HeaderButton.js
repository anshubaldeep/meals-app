import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import colors from '../constants/colors';
import {Ionicons} from '@expo/vector-icons';


const CustomHeaderButton=(props)=>{
        return(
            <HeaderButton 
            {...props} 
            IconComponent={Ionicons}
            iconSize={30}
            color={colors.secondaryColor}
            >

            </HeaderButton>
        );
};


const styles=StyleSheet.create({

});

export default CustomHeaderButton;