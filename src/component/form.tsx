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
import { useForm } from "../hooks";

interface Props {
  showOverlay: boolean;
}

export default function FormContact({ showOverlay }: Props) {
  const {
    business_name,
    business_type,
    checkedState,
    email,
    first_name,
    last_name,
    market_size,
    phone,
    handleInputChange,
    handleOptionsChange,
    handleServices,
    handleSubmit,
    handleOnChange,
  } = useForm(showOverlay);

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
                  name="business_type"
                  onChange={handleOptionsChange}
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
                  name="market_size"
                  onChange={handleOptionsChange}
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
                      checked={checkedState[index]}
                      onChange={(e) => {
                        handleOnChange(index);
                        handleServices(e);
                      }}
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
