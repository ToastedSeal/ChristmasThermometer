import './thermometer.css'

const Thermometer = ({goal, currentTotal}) => {

  console.log('Goal: ', goal, ' Current: ', currentTotal)

  const currentPercentage = Math.min((currentTotal/goal) * 100, 100);
  const currentPercentageString = `${currentPercentage}%`;

  return (
    <div class="thermometer_container">
      <div class="thermometer">
        <div class="stem">
          <div class="fluid" style={{height: currentPercentageString}}></div>
        </div>
      </div>
      <div class="base">£{currentTotal}</div>
    </div>
  )


}

export default Thermometer;



