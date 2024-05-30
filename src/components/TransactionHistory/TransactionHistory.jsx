import Transaction from "../Transaction/Transaction";
import transactions from "../../transactions.json";
import css from "./TransactionHistory.module.css";

const TransactionHistory = () => {
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
          {transactions.map((el) => {
            return (
              <Transaction
                key={el.id}
                type={el.type}
                amount={el.amount}
                currency={el.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
