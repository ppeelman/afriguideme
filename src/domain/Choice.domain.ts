export interface Option {
  id: string;
  label: string; // correct translation should be provided by backend
  default?: boolean;
}

export interface Choice {
  id: string;
  label: string; // correct translation should be provided by backend
  options: Option[];
  hasImpactOnDayPlanning: boolean;
}

export interface SelectedOption<T> {
  choiceId: string;
  optionId: string;
}
