import React, { useEffect, useState }from "react";
import { Icon } from '@iconify/react';
import './style.scss'


export default function Salary () {
  const [monthlySalary, setmonthlySalary] = useState(40000);
  const [checked, setChecked] = useState('monthlySalary');
  const [toggle, setToggle] = useState(true);
  const [salary, setSalary] = useState(monthlySalary);

  const tax = Math.round(monthlySalary * 0.13);
  const salaryWithoutTax =  Math.ceil(monthlySalary - tax);
  const mrot =  24801; 
  
  const payForDay = Math.ceil(monthlySalary / 21);
  const payForHour = Math.ceil(payForDay / 8);


  useEffect(() => {
if(checked === 'monthlySalary') setSalary(monthlySalary)
if(checked === 'mrot') setSalary(mrot)
if(checked === 'payForDay') setSalary(payForDay)
if(checked === 'payForHour') setSalary(payForHour)
  }, [checked, monthlySalary, payForDay, payForHour]);
  

const changeInput = (e) => {
  setmonthlySalary(e.target.value);
}

  return (
    <>
      <div className="containerBoxes">
        <p className="title">
          Сумма
        </p>
        <div>
        <input className="salaryMonth" name='1' type="radio" checked={checked === 'monthlySalary'} id="flexCheckDefault" onClick={() => setChecked('monthlySalary')}/>
          <label class="form-check-label" for="flexCheckDefault">
          Оклад за месяц
          </label>
        </div>

        <div>
        <input className="mrot" name='1' type="radio" checked={checked === 'mrot'}  id="flexCheckDefault" onClick={() => setChecked('mrot')}/>
          <span className="formCheckLabel" for="flexCheckDefault">
          МРОТ
          <div class="tooltip"> 
            <div class="tooltiptext">
              <p>МРОТ - минимальный размер оплаты труда. Разный для разных регионов. </p>
            </div>
              <Icon icon="ph:info-thin" width={15}></Icon>
          </div>
          </span>
        </div>

        <div>
        <input className="salaryDay" name='1' type="radio" checked={checked === 'payForDay'}  id="flexCheckDefault" onClick={() => setChecked('payForDay')}/>
          <label class="form-check-label" for="flexCheckDefault">
          Оплата за день
          </label>
        </div>

        <div>
        <input className="salaryHour" name='1' type="radio" checked={checked === 'payForHour'} id="flexCheckDefault" onClick={() => setChecked('payForHour')} />
          <label class="form-check-label" for="flexCheckDefault">
          Оплата за час
          </label>
        </div>


        <label className="checkbox">
          <input type="checkbox" className="checkboxInput" checked={toggle} onChange={()=> setToggle(tog => !tog)}/>
          <span className="checkboxInner"></span>
        </label>

        <div>
          <input className="resultInput" type="number" 
            value={salary} 
            onChange={changeInput}
            />
            <>₽</>

        </div>        
          {checked === 'monthlySalary' && (

        <div className="resultList">
          {toggle ? (
            <>
              <p> {`${monthlySalary} ₽ сотрудник получает на руки`}</p>
              <p> {` ${Math.round(monthlySalary / 0.87) - monthlySalary} ₽ НДФЛ, 13% от оклада`}</p>
              <p> {`${ Math.round(monthlySalary / 0.87) } ₽ за сотрудника в месяц`}</p>
            </>
          )
        :
        (
          <>
            <p> {`${salaryWithoutTax} ₽ сотрудник получает на руки`}</p>
            <p> {` ${tax} ₽ НДФЛ, 13% от оклада`}</p>
            <p> {`${monthlySalary} ₽ за сотрудника в месяц`}</p>
          </>
        )}
        </div>
      )}
      </div>
    </>
  )
}
