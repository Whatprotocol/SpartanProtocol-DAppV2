import React, { useState } from 'react'
import {
  DropdownItem,
  Row,
  Col,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap'

// i18n
import i18n from '../../i18n'

// flags
import gbFlag from '../../assets/flags/gb.svg'
import cnFlag from '../../assets/flags/cn.svg'
import esFlag from '../../assets/flags/es.svg'
import deFlag from '../../assets/flags/de.svg'
import frFlag from '../../assets/flags/fr.svg'
import grFlag from '../../assets/flags/gr.svg'
import inFlag from '../../assets/flags/in.svg'
import irFlag from '../../assets/flags/ir.svg'
import itFlag from '../../assets/flags/it.svg'
import nlFlag from '../../assets/flags/nl.svg'
import plFlag from '../../assets/flags/pl.svg'
import ptFlag from '../../assets/flags/pt.svg'
import roFlag from '../../assets/flags/ro.svg'
import ruFlag from '../../assets/flags/ru.svg'
import seFlag from '../../assets/flags/se.svg'
import uaFlag from '../../assets/flags/ua.svg'
import zaFlag from '../../assets/flags/za.svg'

const locales = [
  {
    id: 'en',
    name: 'English',
    flag: gbFlag,
  },
  {
    id: 'zh',
    name: '中国人',
    flag: cnFlag,
  },
  {
    id: 'es',
    name: 'Español',
    flag: esFlag,
  },
  {
    id: 'fr',
    name: 'Français',
    flag: frFlag,
  },
  {
    id: 'af',
    name: 'Afrikaans',
    flag: zaFlag,
  },
  {
    id: 'bn',
    name: 'বাংলা',
    flag: inFlag,
  },
  {
    id: 'de',
    name: 'Deutsche',
    flag: deFlag,
  },
  {
    id: 'el',
    name: 'Ελληνικά',
    flag: grFlag,
  },
  {
    id: 'fa',
    name: 'فارسی',
    flag: irFlag,
  },
  {
    id: 'hi',
    name: 'हिंदी',
    flag: inFlag,
  },
  {
    id: 'it',
    name: 'Italiano',
    flag: itFlag,
  },
  {
    id: 'nl',
    name: 'Nederlands',
    flag: nlFlag,
  },
  {
    id: 'pa',
    name: 'ਪੰਜਾਬੀ',
    flag: inFlag,
  },
  {
    id: 'pl',
    name: 'Polskie',
    flag: plFlag,
  },
  {
    id: 'pt',
    name: 'Português',
    flag: ptFlag,
  },
  {
    id: 'ro',
    name: 'Română',
    flag: roFlag,
  },
  {
    id: 'ru',
    name: 'Pусский',
    flag: ruFlag,
  },
  {
    id: 'sv',
    name: 'Svenska',
    flag: seFlag,
  },
  {
    id: 'uk',
    name: 'Український',
    flag: uaFlag,
  },
]

const getLocale = () => locales?.filter((x) => x.id === i18n.languages[0])[0]

const LanguageDropdown = () => {
  const [lng, setLng] = useState(i18n.languages[0])
  const [flag, setFlag] = useState(getLocale()?.flag || locales[4]?.flag)

  const changeLanguageAction = (lang) => {
    i18n.changeLanguage(lang)
    setLng(lang)
    setFlag(getLocale().flag)
  }

  return (
    <>
      <Button
        id="PopoverClick1"
        type="Button"
        className="btn-round btn-transparent btn-icon ml-1"
        href="#"
      >
        <img src={flag} alt="flag" className="icon-small mt-2" />
        {/* <i className="icon-small icon-lang icon-dark mt-2" /> */}
      </Button>
      <UncontrolledPopover
        trigger="legacy"
        rootclose="true"
        placement="bottom"
        target="PopoverClick1"
      >
        <PopoverHeader className="mt-2">Language</PopoverHeader>
        <PopoverBody>
          <Row>
            {locales.map((x) => (
              <Col xs={6} key={x.id}>
                <DropdownItem
                  tag="a"
                  href="#"
                  onClick={() => changeLanguageAction(x.id)}
                  className={`notify-item ${lng === x.id ? 'active' : 'none'}`}
                >
                  <img src={x.flag} alt="Spartan" height="12" />
                  <span className="align-middle ml-1 output-card">
                    {x.name}
                  </span>
                </DropdownItem>
              </Col>
            ))}
          </Row>
        </PopoverBody>
      </UncontrolledPopover>
    </>
  )
}

export default LanguageDropdown
