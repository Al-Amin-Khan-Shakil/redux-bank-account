import { connect } from 'react-redux';

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay({ balance, isLoading }) {
  return (
    <div className="balance">
      {isLoading ? 'Converting...' : `${formatCurrency(balance)}`}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
    isLoading: state.account.isLoading,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
