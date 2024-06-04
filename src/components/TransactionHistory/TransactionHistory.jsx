import Transaction from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
  return (
    <div  >
      <table className={css.container}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <Transaction
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
