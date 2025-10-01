import Link from 'next/link';

export default function IconLink({
  Icon,
  link,
  ariaLabel,
  className = 'text-indigo-600 hover:text-indigo-700 transition-all duration-300',
  iconSize = 25,
}) {
  return (
    <>
      {link && (
        <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          <Icon size={iconSize} className={className} />
        </Link>
      )}
    </>
  );
}
