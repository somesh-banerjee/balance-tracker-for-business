import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../utils/Context';

export const TransactionList: React.FC = () => {
  const { transactions } = useGameContext();
  const navigate = useNavigate();

  let sortedTransactions = transactions.sort((a, b) => {
    return Number(b.id) - Number(a.id);
  });

  sortedTransactions = sortedTransactions.slice(0, 5);

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">
        Last Few Transactions
        <span
          className="mx-2 text-xs font-normal text-center hover:underline cursor-pointer"
          onClick={() => {
            navigate('/txs');
          }}
        >
          Show all
        </span>
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-2 py-1 bg-gray-100 border border-gray-300">
                From
              </th>
              <th className="px-2 py-1 bg-gray-100 border border-gray-300">
                To
              </th>
              <th className="px-2 py-1 bg-gray-100 border border-gray-300 text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-2 py-1 border border-gray-300">
                  {transaction.from}
                </td>
                <td className="px-2 py-1 border border-gray-300">
                  {transaction.to}
                </td>
                <td className="px-2 py-1 border border-gray-300 text-right">
                  {transaction.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'INR',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const FullTransactionList: React.FC = () => {
  const { transactions } = useGameContext();

  let sortedTransactions = transactions.sort((a, b) => {
    return Number(b.id) - Number(a.id);
  });

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-md w-84">
        <h1 className="text-2xl font-bold text-center mb-4">Balance Tracker</h1>
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">All Transactions</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-2 py-1 bg-gray-100 border border-gray-300">
                    From
                  </th>
                  <th className="px-2 py-1 bg-gray-100 border border-gray-300">
                    To
                  </th>
                  <th className="px-2 py-1 bg-gray-100 border border-gray-300 text-right">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-2 py-1 border border-gray-300">
                      {transaction.from}
                    </td>
                    <td className="px-2 py-1 border border-gray-300">
                      {transaction.to}
                    </td>
                    <td className="px-2 py-1 border border-gray-300 text-right">
                      {transaction.amount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'INR',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
