import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaymentFormData } from '../interfaces/types'; 

interface FormState {
  data: PaymentFormData;
}

const initialState: FormState = {
  data: {
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
      state.data = action.payload;
    },
  },
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;
