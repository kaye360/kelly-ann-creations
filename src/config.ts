/**
 * 
 * Site Configuration
 * 
 */


/**
 * Site Info
 */

export const SITE_URL = 'http://'

export const SITE_BASE_PATH = '/'

export const SITE_FULL_NAME = 'Kelly Ann Creations'

export const SITE_SHORT_NAME = 'Kelly Ann Creations'

export const LOGO_NAME = SITE_SHORT_NAME

export const PHONE_NUMBER = ''

export const EMAIL_ADDRESS = ''

export const LOCATION = ''

export const ADDRESS = ''

export const HEADER_LOGO_PATH = '/img/logo.svg'

export const HEADER_LOGO_DIMENSIONS = { width : 50, height : 50 }

export const HERO_IMG_PATH = '/img/hero.webp'

export const HERO_IMG_ALT_TEXT = 'Hero image alt text'

export const HERO_IMG_DIMENSIONS = { width : 602, height : 508 }

export const FAVICON_PATH = '/meta-img/favicon.svg'

export const OPENGRAPH_PATH = '/meta-img/og.png'


/**
 * Site Pages
 */

export interface Page {
    title            : string,
    path             : string,
    mainNav          : boolean,
    footerNav        : boolean,
    cta              : boolean,
    ignoreLangPrefix : boolean,
}

/** Note: There can only be 1 Call to Action link */
export const PAGES : Page[] = [
    {
        title            : 'Cakes',
        path             : '#cakes',
        mainNav          : true,
        footerNav        : true,
        cta              : false,
        ignoreLangPrefix : true
    },
    {
        title            : 'Pricing',
        path             : '#pricing',
        mainNav          : true,
        footerNav        : true,
        cta              : false,
        ignoreLangPrefix : true
    },
    {
        title            : 'Contact',
        path             : '#contact',
        mainNav          : true,
        footerNav        : true,
        cta              : false,
        ignoreLangPrefix : true
    },
]

export interface Contactlink {
    title : string,
    icon? : string,
    path?  : string
}

export const CONTACT_LINKS: Contactlink[] = [
    {
        title : PHONE_NUMBER,
        icon  : 'phone_iphone',
        path  : 'tel:' + PHONE_NUMBER
    },
    {
        title : EMAIL_ADDRESS,
        icon  : 'email',
        path  : 'mailto:' + EMAIL_ADDRESS
    },
    {
        title : LOCATION,
        icon  : 'place',
    },
]


export interface Language {
    code : string,
    full : string
}

export const LANGUAGES : Language[] = [
    {
        code : 'en',
        full : 'English',
    },
    {
        code : 'pt',
        full : 'Portuguese',
    },
    {
        code : 'cn',
        full : 'Chinese',
    },
]

/**
 * General Types
 */

export interface Layout {
    title : string,
    description : string,
    lang? : string,
    class? : string
}

