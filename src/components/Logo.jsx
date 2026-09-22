import { Link } from 'react-router-dom';

export default function Logo({ inverted = false }) {
  return (
    <Link className={`brand ${inverted ? 'brand--inverted' : ''}`} to="/" aria-label="Codevias home">
      {/* oxlint-disable-next-line next/no-img-element -- Vite serves this optimized local brand asset. */}
      <img src="/codevias-logo-reference.jpg" alt="Codevias" />
    </Link>
  );
}
