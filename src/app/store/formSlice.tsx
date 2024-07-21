import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaymentFormData } from '../interfaces/types'; 

interface FormState {
  formData: PaymentFormData;
}

const initialState: FormState = {
  formData: {
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    zip: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveFormData: (state, action: PayloadAction<PaymentFormData>) => {
      state.formData = action.payload;
    },
    cleanFormData: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const { saveFormData, cleanFormData } = formSlice.actions;
export default formSlice.reducer;
