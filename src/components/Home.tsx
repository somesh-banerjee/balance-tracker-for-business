import { AddPlayer } from './AddPlayer';
import { PlayerList } from './PlayerList';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-md w-84">
        <h1 className="text-2xl font-bold text-center mb-4">Balance Tracker</h1>
        <TransactionForm />
        <PlayerList />
        <TransactionList />
        <AddPlayer />
      </div>
    </div>
  );
};
export default Home;
