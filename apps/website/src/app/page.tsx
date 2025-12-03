'use client';
import { BorderTrail } from '@repo/ui/components/border-trail';
import { Button } from '@repo/ui/components/button';
import { GlowEffect } from '@repo/ui/components/glow-effect';
import {
  IconArrowDown,
  IconBrandDiscordFilled,
  IconDeviceDesktop,
  IconDeviceGamepad2,
  IconMapPin,
  IconShield,
  IconTarget,
  IconUserStar,
  IconUsers,
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { BentoGridComponent } from './_components/bento-grid';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />

        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

        {/* Hero image */}
        <div className="absolute right-0 top-0 h-full w-[60%] z-0">
          <Image
            src="/hero-bg.png"
            alt="Soldat"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          {/* Bottom blur on image */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        {/* Language selector - left side */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 text-xs tracking-widest">
          <span className="text-white font-medium">
            <svg
              version="1.1"
              id="Layer_1"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
            >
              <title>France</title>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <rect
                  x="173.419"
                  y="90.839"
                  style={{ fill: '#FFFFFF' }}
                  width="165.161"
                  height="330.323"
                ></rect>{' '}
                <path
                  style={{ fill: '#164FCE' }}
                  d="M173.419,90.839v330.323H45.144c-20.371,0-36.886-16.515-36.886-36.886V127.725 c0-20.371,16.515-36.886,36.886-36.886H173.419z"
                ></path>{' '}
                <path
                  style={{ fill: '#ED1F34' }}
                  d="M503.742,127.725v256.551c0,20.371-16.515,36.886-36.886,36.886H338.581V90.839h128.275 C487.227,90.839,503.742,107.354,503.742,127.725z"
                ></path>{' '}
                <path
                  style={{ fill: '#121B21' }}
                  d="M468.324,82.581H43.676C19.593,82.581,0,102.173,0,126.257v259.487 c0,24.083,19.593,43.675,43.676,43.675h424.648c24.082,0,43.675-19.593,43.675-43.676V126.257 C512,102.173,492.406,82.581,468.324,82.581z M16.516,385.743V126.257c0-14.977,12.183-27.16,27.16-27.16h121.485v313.806H43.676 C28.7,412.903,16.516,400.72,16.516,385.743z M495.484,385.743c0,14.977-12.183,27.16-27.16,27.16H346.839V189.935 c0-4.561-3.696-8.258-8.258-8.258s-8.258,3.697-8.258,8.258v222.968H181.677V99.097h148.645v57.806c0,4.561,3.696,8.258,8.258,8.258 s8.258-3.697,8.258-8.258V99.097h121.485c14.977,0,27.16,12.183,27.16,27.16V385.743z"
                ></path>{' '}
              </g>
            </svg>
          </span>
          <div className="w-px h-4 bg-white/30 mx-auto" />
          <span className="text-white/40 hover:text-white cursor-pointer transition-colors">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 511.999 511.999"
              xmlSpace="preserve"
              fill="#000000"
            >
              <title>Suisse</title>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  style={{ fill: '#ED1F34' }}
                  d="M468.723,421.689H43.341c-19.777,0-35.829-16.052-35.829-35.829V126.009 c0-19.777,16.052-35.829,35.829-35.829h425.381c19.777,0,35.829,16.052,35.829,35.829v259.724 C504.488,405.637,488.564,421.689,468.723,421.689z"
                ></path>{' '}
                <polygon
                  style={{ fill: '#FFFFFF' }}
                  points="360.917,219.24 292.727,219.24 292.727,151.05 219.273,151.05 219.273,219.24 151.083,219.24 151.083,292.695 219.273,292.695 219.273,360.884 292.727,360.884 292.727,292.695 360.917,292.695 "
                ></polygon>{' '}
                <path d="M292.727,368.461h-73.455c-4.109,0-7.512-3.404-7.512-7.512v-60.677h-60.677c-4.109,0-7.512-3.404-7.512-7.512v-73.455 c0-4.109,3.404-7.512,7.512-7.512h60.677v-60.677c0-4.109,3.404-7.512,7.512-7.512h73.455c4.109,0,7.512,3.404,7.512,7.512v60.677 h60.678c4.109,0,7.512,3.404,7.512,7.512v73.455c0,4.109-3.404,7.512-7.512,7.512H300.24v60.677 C300.24,364.993,296.901,368.461,292.727,368.461z M226.785,353.372h58.365v-60.678c0-4.109,3.404-7.512,7.512-7.512h60.677v-58.366 h-60.678c-4.109,0-7.512-3.404-7.512-7.512v-60.677h-58.365v60.677c0,4.109-3.404,7.512-7.512,7.512h-60.677v58.366h60.677 c4.109,0,7.512,3.404,7.512,7.512L226.785,353.372L226.785,353.372z"></path>{' '}
                <path d="M468.98,429.202H43.019C19.262,429.202,0,409.811,0,386.183V125.817c0-23.757,19.391-43.019,43.019-43.019h425.96 c23.757,0,43.019,19.391,43.019,43.019v260.366C512.064,409.876,492.801,429.202,468.98,429.202z M43.019,97.757 c-15.474,0-27.995,12.521-27.995,27.995v260.366c0,15.474,12.521,27.995,27.995,27.995h425.96c15.474,0,27.995-12.521,27.995-27.995 V125.88c0-15.474-12.521-27.995-27.995-27.995H43.019V97.757z"></path>{' '}
              </g>
            </svg>
          </span>
          <div className="w-px h-4 bg-white/30 mx-auto" />
          <span className="text-white/40 hover:text-white cursor-pointer transition-colors">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
            >
              <title>Canada</title>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <rect
                  x="118.366"
                  y="90.839"
                  style={{ fill: '#FFFFFF' }}
                  width="275.269"
                  height="330.323"
                ></rect>{' '}
                <g>
                  {' '}
                  <path
                    style={{ fill: '#ED1F34' }}
                    d="M118.366,90.839v330.323H43.751c-19.602,0-35.493-15.891-35.493-35.493V126.332 c0-19.602,15.891-35.493,35.493-35.493H118.366z"
                  ></path>{' '}
                  <path
                    style={{ fill: '#ED1F34' }}
                    d="M503.742,126.332v259.336c0,19.602-15.891,35.493-35.493,35.493h-74.614V90.839h74.614 C487.851,90.839,503.742,106.729,503.742,126.332z"
                  ></path>{' '}
                  <polygon
                    style={{ fill: '#ED1F34' }}
                    points="349.15,210.847 306.621,213.137 278.607,247.431 284.453,189.43 256,157.738 227.547,189.43 233.393,247.431 205.379,213.137 162.85,210.847 165.14,253.376 207.989,288.378 207.989,310.456 304.011,310.456 304.011,288.378 346.86,253.376 "
                  ></polygon>{' '}
                </g>{' '}
                <path
                  style={{ fill: '#121B21' }}
                  d="M356.108,235.225l1.288-23.933c0.126-2.341-0.749-4.626-2.407-6.284s-3.94-2.526-6.284-2.407 l-23.934,1.288c2.269-3.487,1.595-8.196-1.701-10.89c-3.532-2.885-8.734-2.361-11.62,1.17l-11.221,13.736 c-0.001,0.002-0.003,0.003-0.005,0.006l-10.648,13.037l3.094-30.691l1.779-17.655c0.457-4.538-2.851-8.587-7.388-9.044 c-4.231-0.438-8.042,2.426-8.903,6.497l-16.013-17.835c-1.566-1.744-3.8-2.741-6.145-2.741c-2.344,0-4.578,0.996-6.145,2.741 l-16.013,17.835c-0.862-4.073-4.681-6.936-8.903-6.497c-4.539,0.457-7.845,4.507-7.388,9.044l1.779,17.655l3.094,30.691 l-10.648-13.037c-0.002-0.002-0.003-0.003-0.006-0.006l-11.221-13.736c-2.885-3.531-8.089-4.056-11.62-1.17 c-3.297,2.693-3.97,7.403-1.701,10.89l-23.934-1.288c-2.341-0.124-4.626,0.749-6.283,2.407c-1.658,1.658-2.532,3.943-2.407,6.284 l1.288,23.933c-3.487-2.269-8.198-1.594-10.89,1.701c-2.885,3.532-2.361,8.735,1.172,11.621l13.737,11.221 c0.002,0.001,0.003,0.003,0.004,0.004l39.815,32.524v18.159c0,4.562,3.697,8.258,8.258,8.258h39.754v35.548 c0,4.562,3.697,8.258,8.258,8.258c4.561,0,8.258-3.696,8.258-8.258v-35.548h39.753c4.561,0,8.258-3.696,8.258-8.258v-18.159 l39.815-32.524c0.001-0.001,0.003-0.003,0.004-0.004l13.737-11.221c3.532-2.886,4.056-8.088,1.172-11.621 C364.305,233.631,359.596,232.956,356.108,235.225z M338.81,249.289l-40.023,32.693c-1.92,1.569-3.033,3.917-3.033,6.396v13.818 h-79.508v-13.818c0-2.48-1.114-4.827-3.033-6.396l-40.023-32.693l-1.599-29.702l29.702,1.599l25.706,31.469 c2.306,2.822,6.19,3.802,9.556,2.405c3.367-1.395,5.422-4.832,5.056-8.457l-5.481-54.371L256,170.098l19.871,22.133l-5.481,54.371 c-0.364,3.626,1.689,7.062,5.056,8.457c3.367,1.396,7.251,0.418,9.556-2.405l25.706-31.469l29.702-1.599L338.81,249.289z M468.324,82.581H43.675C19.593,82.581,0,102.174,0,126.257v259.486c0,24.083,19.593,43.676,43.675,43.676h424.648 c24.084,0,43.676-19.594,43.676-43.676V126.257C512,102.174,492.407,82.581,468.324,82.581z M110.108,412.903H43.675 c-14.976,0-27.159-12.183-27.159-27.16V126.257c0-14.977,12.183-27.16,27.159-27.16h66.432V412.903z M495.484,385.743 c0,14.977-12.183,27.16-27.16,27.16h-66.431V167.914c0-4.562-3.697-8.258-8.258-8.258c-4.561,0-8.258,3.696-8.258,8.258v244.989 H126.624V99.097h258.753v35.785c0,4.562,3.697,8.258,8.258,8.258c4.561,0,8.258-3.696,8.258-8.258V99.097h66.431 c14.977,0,27.16,12.183,27.16,27.16V385.743z"
                ></path>{' '}
              </g>
            </svg>
          </span>
          <div className="w-px h-4 bg-white/30 mx-auto" />
          <span className="text-white/40 hover:text-white cursor-pointer transition-colors">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
            >
              <title>Belgique</title>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <rect
                  x="173.419"
                  y="90.839"
                  style={{ fill: '#FFE000' }}
                  width="165.161"
                  height="330.323"
                ></rect>{' '}
                <path
                  style={{ fill: '#ED1F34' }}
                  d="M468.324,90.839H338.581v330.323h129.743c19.561,0,35.418-15.858,35.418-35.418V126.257 C503.742,106.695,487.884,90.839,468.324,90.839z"
                ></path>{' '}
                <path
                  style={{ fill: '#333333' }}
                  d="M43.676,90.839c-19.562,0-35.418,15.857-35.418,35.418v259.487c0,19.561,15.857,35.418,35.418,35.418 h129.743V90.84H43.676V90.839z"
                ></path>{' '}
                <path
                  style={{ fill: '#121B21' }}
                  d="M468.324,82.581H43.675C19.593,82.581,0,102.173,0,126.257v259.487 c0,24.083,19.593,43.675,43.675,43.675h424.648c24.084,0,43.676-19.593,43.676-43.676V126.257 C512,102.173,492.407,82.581,468.324,82.581z M16.516,385.743V126.257c0-14.977,12.183-27.16,27.159-27.16h121.486v313.806H43.675 C28.7,412.903,16.516,400.72,16.516,385.743z M495.484,385.743c0,14.977-12.183,27.16-27.16,27.16H346.839V189.935 c0-4.561-3.697-8.258-8.258-8.258c-4.561,0-8.258,3.697-8.258,8.258v222.968H181.677V99.097h148.645v57.806 c0,4.561,3.697,8.258,8.258,8.258c4.561,0,8.258-3.697,8.258-8.258V99.097h121.485c14.977,0,27.16,12.183,27.16,27.16V385.743z"
                ></path>{' '}
              </g>
            </svg>
          </span>
        </div>

        {/* Main content */}
        <div className="relative z-20 h-[calc(100vh-80px)] flex items-center">
          <div className="px-16 md:px-24 lg:px-32 max-w-3xl">
            {/* Subtitle with line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-white/60" />
              <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-medium">
                Serveur Arma Reforger
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none flex flex-col items-start gap-2">
              <span className="text-white block">G.O.A.F</span>
              <span className="text-[#AD976A] block">ARMÉE FRANÇAISE</span>
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold border border-[#AD976A]/50 text-[#AD976A] rounded-lg bg-[#AD976A]/10">
                Semi-Milsim
              </span>
              <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold border border-[#AD976A]/50 text-[#AD976A] rounded-lg bg-[#AD976A]/10">
                Roleplay
              </span>
              <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold border border-white/30 text-white/80 rounded-lg bg-white/5">
                Armée Française
              </span>
              <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold border border-white/30 text-white/80 rounded-lg bg-white/5">
                <span className="text-[#AD976A]">+900</span> Engagés
              </span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <span className="flex items-center gap-2 w-fit px-3 py-1 text-[10px] tracking-widest uppercase font-bold">
                <IconDeviceGamepad2 className="w-5 h-5" />
                <span className="text-xs tracking-widest uppercase font-medium">Console</span>
              </span>
              <span className="text-white/60 text-xs tracking-widest uppercase">|</span>
              <span className="flex items-center gap-2 w-fit px-3 py-1 text-[10px] tracking-widest uppercase font-bold">
                <IconDeviceDesktop className="w-5 h-5" />
                <span className="text-xs tracking-widest uppercase font-medium">PC</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-white/60 text-base md:text-lg max-w-lg mt-8 leading-relaxed">
              Plonge au cœur d&apos;une expérience militaire authentique sur Arma Reforger. Missions
              tactiques, hiérarchie réaliste et cohésion d&apos;équipe. Rejoins une communauté
              passionnée par le milsim et le roleplay exigeant.
            </p>

            <div className="relative w-fit mt-4">
              <GlowEffect
                colors={['#2E2D2E', '#614F38', '#495D3A', '#A0936D']}
                mode="colorShift"
                blur="soft"
                duration={3}
                className="absolute inset-0"
                scale={1}
              />
              <Button
                className="relative rounded-2xl hover:bg-[#AD976A]/20 bg-background/90 z-10 shadow-none backdrop-blur-sm border-white/10 transition-all duration-300"
                variant="outline"
                size="lg"
                asChild
              >
                <Link href="https://discord.gg/goaf">
                  <IconBrandDiscordFilled className="w-5 h-5" />
                  Rejoindre la communauté
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-18 right-12 z-20 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <IconArrowDown className="w-4 h-4 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* Values Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-24 px-8 md:px-16 lg:px-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#AD976A]/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Section title */}
          <div className="text-center mb-16">
            <span className="text-[#AD976A] text-xs tracking-[0.4em] uppercase font-medium">
              Ce qui nous définit
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
              NOS VALEURS
            </h2>
          </div>

          {/* Values cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discipline */}
            <div className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-lg hover:border-[#AD976A]/30 hover:bg-white/[0.04] transition-all duration-500">
              <BorderTrail
                style={{
                  boxShadow:
                    '0px 0px 60px 30px #AD976A50, 0 0 100px 60px #AD976A50, 0 0 140px 90px #AD976A50',
                }}
                size={100}
              />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AD976A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-lg bg-[#AD976A]/10 border border-[#AD976A]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconTarget className="w-7 h-7 text-[#AD976A]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">DISCIPLINE</h3>

              <p className="text-white/50 leading-relaxed">
                Rigueur et excellence dans chaque mission. Respect des procédures et de la chaîne de
                commandement pour une efficacité optimale sur le terrain.
              </p>
            </div>

            {/* Cohésion */}
            <div className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-lg hover:border-[#AD976A]/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AD976A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-lg bg-[#AD976A]/10 border border-[#AD976A]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconUsers className="w-7 h-7 text-[#AD976A]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">COHÉSION</h3>

              <p className="text-white/50 leading-relaxed">
                L&apos;union fait la force. Ensemble, nous formons une équipe soudée où chaque
                membre compte. La réussite collective avant tout.
              </p>
            </div>

            {/* Loyauté */}
            <div className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-lg hover:border-[#AD976A]/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AD976A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <BorderTrail
                style={{
                  boxShadow:
                    '0px 0px 60px 30px #AD976A50, 0 0 100px 60px #AD976A50, 0 0 140px 90px #AD976A50',
                }}
                size={100}
              />
              <div className="w-14 h-14 rounded-lg bg-[#AD976A]/10 border border-[#AD976A]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconShield className="w-7 h-7 text-[#AD976A]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">LOYAUTÉ</h3>

              <p className="text-white/50 leading-relaxed">
                Fidélité envers la communauté et ses membres. Un engagement sincère qui forge des
                liens durables et une confiance mutuelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Timeline Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-24 px-8 md:px-16 lg:px-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#AD976A]/50 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Section title */}
          <div className="text-center mb-20">
            <span className="text-[#AD976A] text-xs tracking-[0.4em] uppercase font-medium">
              Ce qui nous rend uniques
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
              POURQUOI NOUS REJOINDRE ?
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#AD976A]/50 via-[#AD976A]/30 to-[#AD976A]/50 -translate-x-1/2 hidden md:block" />

            {/* Timeline items */}
            <div className="space-y-16 md:space-y-24">
              {/* Item 1 - Équipe d'animation (Left) */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* Content - Left side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-1/2 md:pr-16 md:text-right order-2 md:order-1"
                >
                  <div className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-[#AD976A]/30 hover:bg-white/[0.04] transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AD976A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center gap-4 mb-4 md:justify-end">
                      <span className="text-[#AD976A] text-5xl font-black opacity-20">01</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                      <div className="w-12 h-12 rounded-xl bg-[#AD976A]/10 border border-[#AD976A]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconUserStar className="w-6 h-6 text-[#AD976A]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        ÉQUIPE D&apos;ANIMATION
                      </h3>
                    </div>

                    <p className="text-white/50 leading-relaxed">
                      Des animateurs compétents et passionnés qui créent des missions immersives et
                      des scénarios captivants pour une expérience de jeu inoubliable.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#AD976A] border-4 border-black z-10 hidden md:block" />

                {/* Empty space - Right side */}
                <div className="w-full md:w-1/2 md:pl-16 order-1 md:order-2" />
              </div>

              {/* Item 2 - Théâtres d'opérations (Right) */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* Empty space - Left side */}
                <div className="w-full md:w-1/2 md:pr-16 hidden md:block" />

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#AD976A] border-4 border-black z-10 hidden md:block" />

                {/* Content - Right side */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-1/2 md:pl-16"
                >
                  <div className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-[#AD976A]/30 hover:bg-white/[0.04] transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AD976A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#AD976A] text-5xl font-black opacity-20">02</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#AD976A]/10 border border-[#AD976A]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconMapPin className="w-6 h-6 text-[#AD976A]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        THÉÂTRES D&apos;OPÉRATIONS
                      </h3>
                    </div>

                    <p className="text-white/50 leading-relaxed">
                      Rotation de cartes variées pour des environnements toujours renouvelés.
                      Forêts, déserts, zones urbaines... chaque mission est unique.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Item 3 - Missions régulières (Left) */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* Content - Left side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-1/2 md:pr-16 md:text-right order-2 md:order-1"
                >
                  <div className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-[#AD976A]/30 hover:bg-white/[0.04] transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AD976A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center gap-4 mb-4 md:justify-end">
                      <span className="text-[#AD976A] text-5xl font-black opacity-20">03</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                      <div className="w-12 h-12 rounded-xl bg-[#AD976A]/10 border border-[#AD976A]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconTarget className="w-6 h-6 text-[#AD976A]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        MISSIONS RÉGULIÈRES
                      </h3>
                    </div>

                    <p className="text-white/50 leading-relaxed">
                      Des opérations planifiées chaque semaine avec briefings détaillés, objectifs
                      stratégiques et débriefings pour progresser ensemble.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#AD976A] border-4 border-black z-10 hidden md:block" />

                {/* Empty space - Right side */}
                <div className="w-full md:w-1/2 md:pl-16 order-1 md:order-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-24 px-8 md:px-16 lg:px-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#AD976A]/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Section title */}
          <div className="text-center mb-12">
            <span className="text-[#AD976A] text-xs tracking-[0.4em] uppercase font-medium">
              Ton expérience de jeu
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
              NOS SPÉCIALITÉS
            </h2>
          </div>
          <BentoGridComponent />
        </div>
      </section>
    </div>
  );
}
