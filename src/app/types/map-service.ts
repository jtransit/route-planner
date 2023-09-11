export interface Suggestions {
  attribution: string;
  features: Record<string, unknown>[];
  query: string[];
  type: string;
}

export const defaultSuggestions: Suggestions = {
  attribution: '',
  features: [{}],
  query: [''],
  type: '',
};
