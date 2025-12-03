import { Button } from '@repo/ui/components/button';
import { ButtonGroup } from '@repo/ui/components/button-group';
import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/ui/components/tooltip';
import { TypographySmall } from '@repo/ui/components/typography';
import { IconGavel } from '@tabler/icons-react';
import Image from 'next/image';
import { NavigationMenuComponent } from './navigation-menu';
export default function Header() {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-4 gap-2 items-center px-3 py-1 justify-between w-full bg-black/30 backdrop-blur-xl">
      <div className="col-span-1">
        <Image src="/goaf_logo.png" alt="logo" width={100} height={100} className="w-12 h-12" />
      </div>
      <div className="col-span-2 flex justify-center">
        <NavigationMenuComponent />
      </div>
      <div className="col-span-1 flex justify-end">
        <ButtonGroup className="[--radius:9999rem]">
          <ButtonGroup>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <IconGavel className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <TypographySmall>Règlement Intérieur</TypographySmall>
              </TooltipContent>
            </Tooltip>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">Connexion</Button>
            <Button variant="outline">Inscription</Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </div>
  );
}
