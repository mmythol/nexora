import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import NexoraChat from '../app/NexoraChat';
import PortfolioHub from '../app/PortfolioHub';
import RiskScanner from '../app/RiskScanner';
import { colors } from '../themes/colours';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
      }}
    >
      <Tab.Screen
        name="Hub"
        component={PortfolioHub}
        options={{ title: 'Portfolio' }}
      />
      <Tab.Screen
        name="Nexora"
        component={NexoraChat}
        options={{ title: 'Nexora' }}
      />
      <Tab.Screen
        name="Risk"
        component={RiskScanner}
        options={{ title: 'Risk' }}
      />
    </Tab.Navigator>
  );
}
