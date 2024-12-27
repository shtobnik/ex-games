import React, { useState } from 'react';
import classNames from 'classnames';

// Styles
import styles from './LanguageSwitcher.module.scss';

// Components
import Icon from '../Icon';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', label: 'English', flag: '/flags/uk-flag.svg' },
    { code: 'ua', label: 'Українська', flag: '/flags/ua-flag.svg' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (code: string) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const selectedFlag = languages.find(
    (lang) => lang.code === selectedLanguage
  )?.code;

  return (
    <div className={classNames(styles.languageDropdown, isOpen && styles.open)}>
      <div className={styles.selected} onClick={toggleDropdown}>
        <Icon
          image={`flag-${selectedFlag}`}
          width={'14px'}
          height={'11px'}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={styles.option}
              onClick={() => selectLanguage(lang.code)}
            >
              <Icon
                image={`flag-${lang.code}`}
                width={'14px'}
                height={'11px'}
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
