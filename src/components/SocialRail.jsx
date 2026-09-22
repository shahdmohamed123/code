import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Follow Codevias on social media">
      <span>Follow us</span>
      <a className="social-rail-instagram" href="https://www.instagram.com/codevias_solutions/" target="_blank" rel="noreferrer" aria-label="Follow Codevias on Instagram"><FaInstagram /></a>
      <a className="social-rail-facebook" href="https://www.facebook.com/profile.php?id=61594397583998" target="_blank" rel="noreferrer" aria-label="Follow Codevias on Facebook"><FaFacebookF /></a>
    </aside>
  );
}
