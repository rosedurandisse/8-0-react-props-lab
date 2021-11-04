const DonationForm = (props) => {
  const donationNumber = Number(props.field.length) + 1
  return (
    <section class="donation">
      <h1> You could be donation #{donationNumber}! </h1>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" />
        <label for="caption">Caption</label>
        <input type="text" id="caption" name="caption" placeholder="Add a brief message" />
        <label for="amount">Amount</label>
        <input type="number" id="amount" name="amount" placeholder="0" />
        <input type="submit" id="button" name="button" value="Donate!" />
      </form>
    </section>
  );
};

export default DonationForm;
