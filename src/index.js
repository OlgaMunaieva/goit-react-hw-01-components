import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Profile } from 'components/profile/Profile';
import user from './components/profile/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from './components/statistics/data.json';
import { FriendList } from 'components/friends/Friends';
import friends from './components/friends/FriendList.json';
import { TransactionHistory } from 'components/transactions/TransactionHistory';
import transactions from './components/transactions/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </React.StrictMode>
);
