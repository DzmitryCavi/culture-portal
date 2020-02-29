import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
// import YandexMap from './YandexMap'

function Test() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };
  const k = '0';
  const name = 'Lutsenko';
  return (
    <div>
        <nav>
            <button onClick={() => changeLanguage('ru')}>ru</button>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('be')}>be</button>
        </nav>
        <div>
            <Trans>
                tr:{name}.timeLine.{k}.text
            </Trans>
            <Trans>
                in:Home
            </Trans>
        </div>
  
    </div>
  );
}

export default Test;
