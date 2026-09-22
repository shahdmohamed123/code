import { Link } from 'react-router-dom';

export default function Logo({ inverted = false }) {
  return (
    <Link className={`brand ${inverted ? 'brand--inverted' : ''}`} to="/" aria-label="Codevias home">
      <span className="brand-mark-shell" aria-hidden="true">
        {/* oxlint-disable-next-line next/no-img-element -- Vite serves this local transparent brand asset. */}
        <img className="brand-mark" src="/codevias-mark.svg" alt="" />
      </span>
      <span className="brand-word">codevias</span>
    </Link>
  );
}
