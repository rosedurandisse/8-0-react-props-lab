const Progress = (props, target) => {
  let initialValue = 0
  const total = props.donations.reduce(function (accumulator, currentValue) {
    return accumulator += currentValue.amount
  }, initialValue)
  return (<section class="progress">
    <h2>
      Raised <span class="secondary">${total}</span> of
      <span class="secondary"> $1000</span>
    </h2>
  </section>
  )
};

export default Progress;
