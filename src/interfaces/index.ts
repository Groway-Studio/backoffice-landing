export interface ServicesOfInterest {
  name: string;
  active: boolean;
}

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessType: string;
  monthlyIncomes: string;
  interestServices: string[];
}
