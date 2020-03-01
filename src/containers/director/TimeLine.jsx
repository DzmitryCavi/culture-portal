import React from 'react';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Trans } from 'react-i18next';
import Directors from '../../locales/en/translation.json';

export default function TimeLine({ director }) {
  const timeLineList = Directors[director].timeLine;

  const style = {
    point: {
      color: '#484745',
    },
    dateInnerStyle: {
      background: '#484745',
      color: '#FFFFFF',
      fontWeight: 'normal',
      fontSize: '20px',
      borderRadius: '10px',
    },
    bodyContainerStyle: {
      background: '#fafafa',
      padding: '20px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      fontSize: '20px',
      borderRadius: '20px',
    },
    dateStyle: {
      width: '60%',
      background: 'none',
      left: '81px',
    },
  };

  const timeLine = timeLineList.map((time, index) => (
    <TimelineItem
      key={time.date}
      dateText={time.date}
      style={style.point}
      dateInnerStyle={style.dateInnerStyle}
      bodyContainerStyle={style.bodyContainerStyle}
      dateStyle={style.dateStyle}
    >
      <p>
        <Trans>
          tr:{director}.timeLine.{`${index}`}.text
        </Trans>
      </p>
    </TimelineItem>
  ));

  return <Timeline lineColor={'#ddd'}>{timeLine}</Timeline>;
}
