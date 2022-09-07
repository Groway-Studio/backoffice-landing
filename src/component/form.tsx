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
import { FormState } from "../interfaces";

export default function FormContact() {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessType: "",
    monthlyIncomes: "",
    interestServices: [],
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    // businessType,
    // monthlyIncomes,
    // interestServices,
  } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
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
                <Label htmlFor="firstName">Nombre</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  name="firstName"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="lastName">Apellido</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  name="lastName"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" value={email} name="email" />
              </FormGroup>
              <FormGroup className="form__group">
                <Label htmlFor="phoneNumber">Teléfono</Label>
                <Input
                  id="phoneNumber"
                  value={phoneNumber}
                  name="phoneNumber"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <Label>Tipo de Negocio</Label>
                <Select>
                  {types_of_business.map(({ text, value }) => (
                    <Option key={value}>{text}</Option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup className="form__group">
                <Label>Facturación Mensual</Label>
                <Select>
                  {monthly_income.map(({ text, value }) => (
                    <Option key={value}>{text}</Option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup className="form__group">
                <Label>Servicios de Interés</Label>

                {services_of_interest.map(({ name }) => (
                  <div key={name}>
                    <Checkbox id={name} value={name} />
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
