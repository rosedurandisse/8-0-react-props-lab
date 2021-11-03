const RecentDonations = ({ name, amount, caption }) => {
  return (
    <ul>
      <li>
        <span>
          {name} donated $ {amount}
        </span>
        {caption}

      </li>

    </ul>
  );
};

export default RecentDonations;
