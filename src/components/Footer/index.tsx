import { FooterBenefits } from '../FooterBenefits'
import { FooterNavigation } from '../FooterNavegation'
import { FooterNewsletter } from '../FooterNewsletter'
import { FooterSocialMedia } from '../FooterSocialMedia'
import './Footer.css'

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <FooterNewsletter />
        <FooterNavigation />
        <FooterBenefits />
        <FooterSocialMedia />
      </div>
      <footer>
        <p>© 2023 por Divinas. Orgulhosamente criado com Wix.com</p>
        <address>
          Divinas Ltda. - CPF/CNPJ: 12.345.678/0000-01 - Av. Bernardino de
          Campos, 98 - São Paulo, SP 12345-678
        </address>
        <p>
          <a href="mailto:teste@gmail.com">info@meusite.com</a>
          <a href="tel:113456-7890"> Tel: (11) 3456-7890</a>
        </p>
      </footer>
    </div>
  )
}
