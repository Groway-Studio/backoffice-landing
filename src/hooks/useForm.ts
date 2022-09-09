import { useState } from "react";
import Swal from "sweetalert2";

import { FormState, SelectOptions } from "../interfaces";

const useForm = (showOverlay: boolean) => {
  const [formState, setFormState] = useState<FormState>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    business_name: "",
  });

  const [options, setOptions] = useState<SelectOptions>({
    business_type: "",
    market_size: "",
  });

  const [services_requested, setServicesRequested] = useState<string[]>([]);

  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(Object.keys(options).length).fill(false)
  );

  const { first_name, last_name, email, phone, business_name } = formState;
  const { business_type, market_size } = options;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ) => {
    e.preventDefault();

    if (showOverlay) return;

    try {
      const invalidService = services_requested.filter(
        (service) => service === "asesoría legal"
      );

      if (invalidService.length !== 0) return;

      if (
        Object.values({ ...formState, ...options }).every(
          (item) => item.trim() !== ""
        ) === false
      )
        return;

      if (services_requested.length === 0) return;
      if (!checkedState.some((state) => state === true)) return;

      const body = { ...formState, ...options, services_requested };

      const request = await fetch(
        "https://backoffice-git-main-joelibaceta.vercel.app/api/contact.py",
        {
          method: "POST",
          body: JSON.stringify(body),
        }
      );

      const response: string = await request.text();

      const responseValidation: string[] | null = response.match(/ok/i);

      if (responseValidation && responseValidation[0] === "OK") {
        Swal.fire({
          icon: "success",
          title: "¡Genial!",
          text: "Estamos felices de que formes parte de Groway Backoffice, pronto un ejecutivo de ventas lo contactará para poder gestionar su solicitud.",
        });

        resetInputsForm();
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleServices = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setServicesRequested((state) => [...state, target.name]);
    } else {
      const servicesFiltered = services_requested.filter(
        (service) => service !== target.name
      );
      setServicesRequested(servicesFiltered);
    }
  };

  const handleOptionsChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const resetInputsForm = () => {
    setFormState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      business_name: "",
    });
    setOptions({ business_type: "", market_size: "" });
    setServicesRequested([]);
    setCheckedState(new Array(Object.keys(options).length).fill(false));
  };

  return {
    business_name,
    business_type,
    checkedState,
    handleOnChange,
    email,
    first_name,
    last_name,
    market_size,
    phone,
    handleInputChange,
    handleOptionsChange,
    handleServices,
    handleSubmit,
  };
};

export default useForm;
