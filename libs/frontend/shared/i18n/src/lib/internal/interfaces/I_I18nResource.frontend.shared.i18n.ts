import { ELocale } from '@squeak-shared.enums';
import { Resource } from 'i18next';

export interface I_I18nResource extends Resource {
  translation: {
    // data related (in the future I need to plan this beforehand)
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    today: string;
    open_24_hours: string;
    closed: string;

    // domain specific
    web: {
      app: {
        hocs: {
          dummyData: {
            error: string;
            no_data: string;
          };
        };
        pages: {
          home: {
            name: string;
          };
          restaurants: {
            name: string;
            panel: {
              opening_hours_header: string;
            };
          };
          not_found: {
            name: string;
          };
        };
        components: {
          'app-header': {
            items: {
              'nav-items': {
                'language-options': Record<ELocale, string>;
              };
            };
          };
          notice: {
            funny: string;
          };
        };
      };
      ui: {
        components: {
          organisms: {
            header: {
              helpers: {
                'burger-menu': {
                  trigger: string;
                };
                'mobile-header-overlay': {
                  'close-button': string;
                };
              };
            };
          };
        };
        layouts: {
          page: {
            footer: {
              date: string;
            };
          };
        };
      };
    };
  };
}
