import messages_nl from '../translations/nl.json';
import messages_en from '../translations/en.json';

export type Messages = {
  [langCode: string]: {
    [messageName: string]: string
  }
}

export const messages: Messages = {
  'nl': messages_nl,
  'en': messages_en
};

