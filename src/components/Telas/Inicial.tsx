import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {getIconeTabView} from '../IconesTabView';

import Dashboard from './Dashboard';
import Lancamento from './Lancamento';

const dashboard = () => <Dashboard />;
const lancamento = () => <Lancamento />;

const initialLayout = {width: Dimensions.get('window').width};

const Inicial = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'dashboard', title: 'Dashboard'},
    {key: 'lancamentos', title: 'Lançamentos'},
  ]);

  const renderScene = SceneMap({
    dashboard: dashboard,
    lancamentos: lancamento,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition="bottom"
      renderTabBar={props => (
        <TabBar
          {...props}
          renderIcon={props => getIconeTabView(props)}
          labelStyle={styles.noLabel}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  noLabel: {
    display: 'none',
    heiht: 0,
  },
});

export default Inicial;
