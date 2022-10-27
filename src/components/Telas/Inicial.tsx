import React, {useState} from 'react';;
import {Dimensions} from 'react-native';;
import {SceneMap, TabView} from 'react-native-tab-view';

import Dashboard from './Dashboard';
import Lancamento from './Lancamento';

const dashboard = () => <Dashboard />;
const lancamento = () => <Lancamento />;

const initialLayout = {width: Dimensions.get('window').width};

const Inicial = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Dashboard'},
    {key: 'second', title: 'Lançamentos'},
  ]);

  const renderScene = SceneMap({
    first: dashboard,
    second: lancamento,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default Inicial;
