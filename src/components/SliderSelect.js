import React, { Fragment } from "react"
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {
  console.log(data)
  console.log(setData)

  const bank_limit = 10000
  return (

    <Fragment>
      <SliderComponent
        min={1000}
        max={bank_limit }
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        label="Home Value"
        unit="$"
        amount={data.homeValue}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value * 0.2,
          loanAmount: value * 0.8,
          homeValue: value
        })}
      />
      

      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
        onChange={(e, value) => setData({
          ...data,
          loanAmount : (data.homeValue - value),
          downPayment: value
        })}
      />

      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
        onChange={(e, value) => setData({
          ...data,
          downPayment : (data.homeValue - value),
          loanAmount: value
        })}
      />

<SliderComponent
        min={2}
        max={18}
        defaultValue={data.intrestRate}
        value={data.intrestRate}
        step={0.5}
        label="Interest Rate"
        unit="%"
        amount={data.intrestRate}
        onChange={(e, value) => setData({
          ...data,
          intrestRate: value
        })}
      />

    </Fragment>
  )
}

export default SliderSelect