export default function Logo({ inverted = false }) {
  return (
    <a className={`brand ${inverted ? 'brand--inverted' : ''}`} href="#home" aria-label="Codevias home">
      <img src="/codevias-logo-reference.jpg" alt="Codevias" />
    </a>
  );
}
