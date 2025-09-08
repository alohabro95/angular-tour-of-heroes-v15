import * as fromForm from '../reducers/form.reducer';
import { selectFormState } from './form.selectors';

describe('Form Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFormState({
      [fromForm.formFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
