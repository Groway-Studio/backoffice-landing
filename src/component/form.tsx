// import fbIlus from "./../assets/fb.svg";
// import linkedinIlus from "./../assets/linkedin.svg";
// import igIlus from "./../assets/instagram.svg";
import { ButtonComponent } from "./shared";
import ilusContact from "./../assets/ilus-contact.svg";
import "../sass/component/_form.scss";

import { Form, FormGroup, Label, Input, TextArea } from "./shared/forms";

export default function FormContact() {
  return (
    <div className="formComponent">
      <section className="container">
        <h2 className="titleSection">Lorem Impsum</h2>

        <article className="talkto">
          <aside>
            <img src={ilusContact} alt="" className="ilusContact" />
            <div className="text">
              <h2>Contactar a un asesor</h2>
              <p>
                Déjanos tus datos y un asesor se pondrá en contacto contigo a la
                brevedad
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
            <Form>
              <FormGroup>
                <Label htmlFor="label">¿Cuál es tu nombre?*</Label>
                <Input id="label" />
              </FormGroup>
              <FormGroup>
                <Label>¿Cómo nos contactamos contigo?</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label>Tu mensaje</Label>
                <TextArea />
              </FormGroup>
              <ButtonComponent label="Enviar" />
            </Form>
          </aside>
        </article>
      </section>
    </div>
  );
}
