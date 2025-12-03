import { BentoCard, BentoGrid } from '@repo/ui/components/bento-grid';
import {
  IconBinoculars,
  IconDrone,
  IconHeartbeat,
  IconHelicopter,
  IconSword,
} from '@tabler/icons-react';
import Image from 'next/image';

const specialties = [
  {
    Icon: IconHelicopter,
    name: 'Logistique',
    description:
      "Conduite de blindés, déminage et pilotage d'hélicoptères. Le soutien vital de nos opérations.",
    href: '#',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Image
        src="/gameplay/logistic.png"
        alt="Logistique"
        fill
        className="object-cover object-center transition-all duration-300 ease-out group-hover:scale-105 brightness-75 group-hover:brightness-100"
      />
    ),
  },
  {
    Icon: IconHeartbeat,
    name: 'Evasan',
    description: 'Évacuation sanitaire sous le feu. Sauve tes camarades et ramène-les en sécurité.',
    href: '#',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <Image
        src="/gameplay/group.png"
        alt="Evasan"
        fill
        className="object-cover object-center transition-all duration-300 ease-out group-hover:scale-105 brightness-75 group-hover:brightness-100"
      />
    ),
  },
  {
    Icon: IconSword,
    name: 'Infanterie',
    description:
      "Combat au sol, tactiques d'équipe et coordination. Le cœur de nos opérations militaires.",
    href: '#',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <Image
        src="/gameplay/briefing.png"
        alt="Infanterie"
        fill
        className="object-cover object-center transition-all duration-300 ease-out group-hover:scale-105 brightness-75 group-hover:brightness-100"
      />
    ),
  },
  {
    Icon: IconDrone,
    name: 'Drone',
    description: 'Pilotage de drones de reconnaissance. Les yeux du ciel pour guider nos troupes.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'En savoir plus',
    background: (
      <Image
        src="/gameplay/helipad.png"
        alt="Drone"
        fill
        className="object-cover object-center transition-all duration-300 ease-out group-hover:scale-105 brightness-75 group-hover:brightness-100"
      />
    ),
  },
  {
    Icon: IconBinoculars,
    name: 'Reconnaissance',
    description:
      'Infiltration et collecte de renseignements. Discrétion et précision pour préparer le terrain.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'En savoir plus',
    background: (
      <Image
        src="/gameplay/remise_beret.png"
        alt="Reconnaissance"
        fill
        className="object-cover object-center transition-all duration-300 ease-out group-hover:scale-105 brightness-75 group-hover:brightness-100"
      />
    ),
  },
];

export function BentoGridComponent() {
  return (
    <div className="space-y-6">
      <BentoGrid className="auto-rows-[18rem]">
        {specialties.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
