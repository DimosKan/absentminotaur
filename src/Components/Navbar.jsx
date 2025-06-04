import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import i18n from 'i18next';
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { t } = useTranslation();
  const navigation = [
  { name: t("menuElement1"), href: '/#essay' },
  { name: t("menuElement2"), href: '/#poem' },
  { name: t("menuElement3"), href: '/gallery' },
  { name: t("menuElement4"), href: '/#bio' },
  { name: t("menuElement5"), href: '/banner' },
];
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('gr');

const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('appLanguage', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('appLanguage');
      if (savedLang && savedLang !== language) {
        setLanguage(savedLang);
        i18n.changeLanguage(savedLang);
      }


    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);



  const currentPath = location.pathname + location.hash;

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      navigate(href);
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
            <button onClick={() => navigate('/')} className="focus:outline-none ml-16 sm:ml-0">
              <img
                alt="Σαν λείπει ο Μινώταυρος"
                src="./labyrinth.ico"
                className="h-8 w-auto"
              />
            </button>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={classNames(
                      currentPath === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
            </div>
          </div>
            {/* Language toggle */}
            <div className="flex space-x-2 items-center">
              <img
                src="/absentminotaur/flags/greek-flag.svg"
                alt="Greek"
                onClick={() => handleLanguageChange('gr')}
                className={`w-8 h-6 cursor-pointer transition-opacity duration-200 ${language === 'gr' ? 'opacity-100' : 'opacity-70'}`}
              />
              <img
                src="/absentminotaur/flags/british-flag.svg"
                alt="English"
                onClick={() => handleLanguageChange('en')}
                className={`w-8 h-6 cursor-pointer transition-opacity duration-200 ${language === 'en' ? 'opacity-100' : 'opacity-70'}`}
              />
            </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="button"
          onClick={() => handleNavClick(item.href)}
          aria-current={item.current ? 'page' : undefined}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          )}
        >
          {item.name}
        </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
