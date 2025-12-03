'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@repo/ui/components/navigation-menu';
import { useIsMobile } from '@repo/ui/hooks/use-mobile';
import { cn } from '@repo/ui/lib/utils';
import { IconBrandDiscordFilled } from '@tabler/icons-react';
import Link from 'next/link';

const menuItems = [
  { title: 'Accueil', href: '/' },
  { title: 'Galerie', href: '/galerie' },
  { title: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
  { title: 'Contact', href: '/contact' },
  {
    title: 'Discord',
    href: 'https://discord.gg/goaf',
    target: '_blank',
    icon: <IconBrandDiscordFilled className="size-5" />,
  },
];

export function NavigationMenuComponent() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap gap-1">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                'text-white/70 hover:text-white hover:bg-white/10 bg-transparent text-sm tracking-wide'
              )}
            >
              <Link href={item.href} className="flex-row items-center gap-2">
                {item.icon}
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
