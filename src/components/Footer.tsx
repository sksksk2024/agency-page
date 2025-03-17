import logo from './../images/logo.svg';
import facebook from './../images/icon-facebook.svg';
import insta from './../images/icon-instagram.svg';
import twitter from './../images/icon-twitter.svg';
import pinterest from './../images/icon-pinterest.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 bg-dark-moderate-cyan p-32P">
      <img
        src={logo}
        className="mix-blend-multiply filter brightness-50 max-w-container-400"
        alt="sunnyside"
      />
      <ul className="flex justify-center items-center gap-10 text-dark-desaturated-cyan font-semibold">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="flex justify-center items-center gap-6">
        <img src={facebook} alt="facebook" />
        <img src={insta} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
      </div>
    </footer>
  );
}
