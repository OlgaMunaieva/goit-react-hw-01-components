import { Profile } from './profile/Profile';
import user from '../data/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './friends/Friends';
import friends from '../data/FriendList.json';
import { TransactionHistory } from './transactions/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
