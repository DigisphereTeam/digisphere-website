import React from 'react'
import Counter from '../../../../components/Counter/Counter'

export default function MarketingCounter() {
    const stats = [
        {
            end: 4.2,
            suffix: "x",
            label: "Average ROAS on paid campaigns"
        },
        {
            end: 340,
            suffix: "%",
            label: "Organic traffic growth (avg 12 months)"
        },
        {
            prefix: "₹",
            end: 2.8,
            suffix: "cr",
            label: "Revenue attributed to our campaigns"
        },
        {
            end: 87,
            suffix: "%",
            label: "Client retention rate"
        },
    ]
  return (
    <section className='marketing-counter-section'>
        <div className='container'>
            {stats.map((item,index)=>(
                <div key={index} className='col-lg-3 col-md-6 col-12'>
                    <Counter 
                        prefix={item.prefix} 
                        end={item.end}
                        suffix={item.suffix}       
                    />
                    <p>{item.label}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
