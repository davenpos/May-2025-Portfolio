'use client';
import useWindowSizeState from '@/hooks/useWindowSizeState';
import SectionTitle from './SectionTitle';
import UnderlineLink from './UnderlineLink';
import Image from 'next/image';

export default function Certifications() {
  const imageSize = useWindowSizeState(150, 200);

  const certifications = [
    {
      title: 'AWS Ultimate Certified Developer',
      link: 'https://www.credly.com/badges/0d014695-5995-4ea1-a01d-b61a9f0ad526/public_url',
      received: new Date(2026, 8, 18),
      expires: new Date(2027, 8, 18),
      image: '/images/certifications/aws_certified_developer.png',
    },
  ];

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section id="certifications" className="mt-16 py-16 bg-white rounded-xl shadow-md">
      <SectionTitle text="Certifications" mb={8} />
      <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-center mx-3 md:mx-8">
        {certifications.map((cert) => (
          <div key={cert.title} className="w-2xs">
            <UnderlineLink text={cert.title} link={cert.link} a={true}>
              <Image
                src={cert.image}
                alt={cert.title}
                width={imageSize}
                height={imageSize}
                className="transition-color duration-300 mx-auto"
              />
            </UnderlineLink>
            <b>Received:</b> {formatter.format(cert.received)}
            <br />
            <b>Expires:</b> {formatter.format(cert.expires)}
          </div>
        ))}
      </div>
    </section>
  );
}
