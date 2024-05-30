// import css from './Transaction.module.css'

const Transaction = ({  type, amount, currency }) => {
  return <>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </>;
};

export default Transaction;
