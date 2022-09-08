import { useState } from "react";
// import fbIlus from "./../assets/fb.svg";
// import linkedinIlus from "./../assets/linkedin.svg";
// import igIlus from "./../assets/instagram.svg";
import ilusContact from "./../assets/ilus-contact.svg";
import { ButtonComponent } from "./shared";
import "../sass/component/_form.scss";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Checkbox,
  Option,
} from "./shared/forms";
import {
  monthly_income,
  types_of_business,
  services_of_interest,
} from "../utils";
import { FormState, SelectOptions } from "../interfaces";

interface Props {
  showOverlay: boolean;
}

export default function FormContact({ showOverlay }: Props) {
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

      const body = { ...formState, ...options, services_requested };

      console.log(JSON.stringify(body));

      // const request = await fetch(
      //   "https://backoffice-flax-gamma.vercel.app/api/contact.py",
      //   {
      //     method: "POST",
      //     body: JSON.stringify(body),
      //   }
      // );

      // const response = await request.json();

      // console.log(response);
    } catch (error: any) {
      throw new Error(error);
    }
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

  return (
    <div className="formComponent" id="form">
      <section className="container">
        <article className="talkto">
          <aside>
            <img src={ilusContact} alt="" className="ilusContact" />
            <div className="text">
              <h2>
                Empieza tu
                <br />
                prueba <span>gratuita</span>
              </h2>
              <p>
                Déjanos tus datos y un asesor se pondrá en contacto contigo a la
                brevedad.
              </p>
              {/* <div className="socials">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/groway.studio/"
                  >
                    <img src={igIlus} alt="Instagram Groway" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/growaystudio/"
                  >
                    <img src={linkedinIlus} alt="Linkedin Groway" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/groway.studio"
                  >
                    <img src={fbIlus} alt="Facebook Groway" />
                  </a>
                </div> */}
            </div>
          </aside>
          <aside>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="form__group">
                <Label htmlFor="first_name">Nombre</Label>
                <Input
                  type="text"
                  id="first_name"
                  value={first_name}
                  name="first_name"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="last_name">Apellido</Label>
                <Input
                  type="text"
                  id="last_name"
                  value={last_name}
                  name="last_name"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  type="tel"
                  id="phone"
                  value={phone}
                  name="phone"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label>Tipo de Negocio</Label>
                <Select
                  value={business_type}
                  onChange={({ target }) =>
                    setOptions((prevState) => ({
                      ...prevState,
                      business_type: target.value,
                    }))
                  }
                >
                  {types_of_business.map(({ text, value }) => (
                    <Option key={value} value={value}>
                      {text}
                    </Option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="business_name">Nombre del negocio</Label>
                <Input
                  id="business_name"
                  value={business_name}
                  name="business_name"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label>Facturación Mensual</Label>
                <Select
                  value={market_size}
                  onChange={({ target }) =>
                    setOptions((prevState) => ({
                      ...prevState,
                      market_size: target.value,
                    }))
                  }
                >
                  {monthly_income.map(({ text, value }) => (
                    <Option key={value} value={value}>
                      {text}
                    </Option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup className="form__group">
                <Label>Servicios de Interés</Label>

                {services_of_interest.map(({ name }, index) => (
                  <div
                    key={name}
                    className={`${index === 2 ? "disabled" : ""}`}
                  >
                    <Checkbox
                      id={name}
                      name={name}
                      onChange={handleServices}
                      disabled={index === 2}
                    />
                    <Label htmlFor={name}>{name}</Label>
                  </div>
                ))}
              </FormGroup>
              <ButtonComponent text="Enviar" type="submit" />
            </Form>
          </aside>
        </article>
      </section>
    </div>
  );
}
