
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Tooltip, message, DatePicker, Input } from 'antd';
import dayjs from 'dayjs';


// const day1 = dayjs().format('YYYY-MM-DD')
// console.log('day1 = ',day1)


// const onChange = (date, dateString) => {
//   console.log(date, dateString);
// };

// const dayjsa = require('dayjs');
// console.log('dayjsa = ')
// let customParseFormat = require('dayjs/plugin/customParseFormat');
// dayjs.extend(customParseFormat)
// console.log('customParseFormat = ',dayjs)

// let day1 = dayjs('09-08-2020','MM-DD-YYYY');
// console.log('day1 = ',day1)
// let day2 = dayjs('09-08-2020','DD-MM-YYYY')
// console.log('day2 = ',day2);
// const quarterOfYear = require('dayjs/plugin/quarterOfYear');
// const relativeTime = require('dayjs/plugin/relativeTime');
// require('dayjs/locale/zh-cn');
// dayjs.locale('zh-cn');
// dayjs.extend(relativeTime);
// dayjs.extend(quarterOfYear);
// let day = dayjs()
// .endOf('quarter')
// .startOf('week')
// .add(2,'week')
// .add(1,'day')
// .add(10,'hours');
// let duration = day.fromNow();
// console.log(day,duration);


// const date = dayjs('2021-05-06')
// date.format('YYYY-MM-DD')
// dayjs()
// dayjs('2023-05-01').diff(dayjs('2023-04-30'), 'day')
// dayjs('2023-05-01').add(7, 'day')
// const now = dayjs()

// console.log(now)
// console.log(now.valueOf())
// console.log(now.format('YYYY-MM-DD'))

// const yestoday =  dayjs().subtract(1, 'days') 
// const yestodayStart = yestoday.startOf('date') 
// const yestodayEnd = yestoday.endOf('date') 

// console.log(yestoday)
// console.log(yestodayStart, yestodayStart)
// console.log(yestodayStart.valueOf(), yestodayEnd.valueOf())
// const theDayBeforeYestoday = dayjs().subtract(2, 'days') 
// const theDayBeforeYestodayStart =  theDayBeforeYestoday.startOf('date') 
// const theDayBeforeYestodayEnd =  theDayBeforeYestoday.endOf('date') 
// console.log('前天', theDayBeforeYestoday)
// console.log('前天期间', theDayBeforeYestodayStart, theDayBeforeYestodayEnd)
// console.log('前天时间戳期间', theDayBeforeYestodayEnd.valueOf(), theDayBeforeYestodayEnd.valueOf())

// const lastSunDay = dayjs().startOf('week') 
// const lastSunDayEnd =  lastSunDay.endOf('date') 
// console.log('上周日期间', lastSunDay, lastSunDayEnd)


// const lastSunDayFromWeekday = dayjs().day(0) 
// console.log(lastSunDay.isSame(lastSunDayFromWeekday.startOf('date')))
// const Monday = dayjs().startOf('week').add(1, 'days') 
// const Sunday = dayjs().endOf('week').add(1, 'days') 

// console.log(Monday.diff(Sunday, 'days'))
// console.log(Monday.diff(Sunday, 'hours')) 







const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)

function Demo() {
  const [text, setText] = React.useState('');
  const [name, setName] = React.useState('');
  const btnOnchange = (e) => {
    setText(e.target.value)
    console.log('Change:', e.target.value)
  }

  const onChange = () => {
    const check = dayjs(text).isValid();
    console.log('check = ',check)
   if(check===true){
    const week = dayjs(text).week()
    console.log('week =',week)
    setName(week)
   }else{
    setName('')
    setText('')
   } return

  }
  const checkValue = () =>{

  }
    const month = dayjs(text).date()
    console.log('month =',month)
    const s =dayjs(text).unix()
    console.log('s =',s)
    const check = dayjs(text).isValid();
    console.log('check = ',check)

    const endTime = dayjs().format('YYYY-MM-DD')
    const  startTime = dayjs(text).format('YYYY-MM-DD')
     const days =dayjs(endTime).diff(dayjs(startTime), 'days') 
     console.log('days=',days)

     const endScond = dayjs().format('YYYY-MM-DD')
     const  startSecond = dayjs(text).format('YYYY-MM-DD')
      const b =dayjs(endScond).diff(dayjs(startSecond), 'seconds') 
      console.log('b=',b)

      const endHours = dayjs().format('YYYY-MM-DD')
      const  startHours = dayjs(text).format('YYYY-MM-DD')
       const hour =dayjs(endHours).diff(dayjs(startHours), 'hours') 
       console.log('hour=',hour)


      


// true, parsed to 2022-02-0


  return <div>

    <div className='date'>
      <Input style={{ width: 200 }} onChange={btnOnchange} value={text} status={check} />
      <Button type='primary' onClick={onChange}>提交</Button>
      <span>{`${text}为今年的第${name}周 距离下一年元旦还有天 距离今天还有${days}天 距离今天还有${hour}小时  距离今天还有${b}秒`}</span>
    </div>
    {/* <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
    Dropdown
  </Dropdown.Button>
  <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
    Dropdown
  </Dropdown.Button>
  <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>
    Dropdown
  </Dropdown.Button>
  <Dropdown.Button
    menu={menuProps}
    buttonsRender={([leftButton, rightButton]) => [
      <Tooltip title="tooltip" key="leftButton">
        {leftButton}
      </Tooltip>,
      React.cloneElement(rightButton, {
        loading: true,
      }),
    ]}
  >
    With Tooltip
  </Dropdown.Button>
  <Dropdown menu={menuProps}>
    <Button>
      <Space>
        Button
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
  <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
    Danger
  </Dropdown.Button> */}
  </div>


}
export {
  Demo
}