import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChartLine,
  faMoneyBillTransfer,
} from '@fortawesome/free-solid-svg-icons';

const getIconeTabView = props => {
  const {route} = props;

  switch (route.key) {
    case 'dashboard':
      return <FontAwesomeIcon icon={faChartLine} color="#fff" size={25} />;
    case 'lancamentos':
      return (
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="#fff" size={25} />
      );
  }
};

export {getIconeTabView};
