import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector: React.FC = () => {
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(e.target.value);
    };

    return (
        <select value={language} onChange={handleLanguageChange} style={{ backgroundColor:'transparent', border:'none', color:'#054E5C' }} >
            <option value="en">EN</option>
            <option value="ua">UA</option>
        </select>
    );
};

export default LanguageSelector;


