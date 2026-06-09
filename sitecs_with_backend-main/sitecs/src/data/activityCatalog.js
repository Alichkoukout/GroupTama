import {
  MdBuildCircle,
  MdComputer,
  MdConstruction,
  MdFactory,
  MdLocalShipping,
  MdOilBarrel,
  MdSolarPower,
} from 'react-icons/md'

import btpImage from '../images/btp_genie_civil.png'
import energyImage from '../images/energie_solaire.png'
import industryImage from '../images/global.png'
import petroleumImage from '../images/petrole&stockage.png'
import transportImage from '../images/port_transport.png'
import techImage from '../images/tech.png'
import tradingImage from '../images/trading_matiere_premiere.png'

export const activityOrder = [
  'petroleum',
  'transport',
  'industry',
  'btp',
  'energy',
  'trading',
  'tech',
]

export const activityCatalog = {
  petroleum: {
    title: 'P\u00e9trole & Stockage',
    sub: 'Infrastructures p\u00e9trolieres et stockage s\u00e9curis\u00e9',
    text: 'GroupeTama accompagne les op\u00e9rations p\u00e9trolieres avec des solutions de stockage, de manutention et de maintenance adapt\u00e9es aux exigences industrielles.',
    points: [
      'Stockage et gestion de produits p\u00e9troliers',
      "Maintenance d'installations et \u00e9quipements p\u00e9troliers",
      'Services onshore et offshore',
      'Logistique et securisation des flux',
    ],
    conclusion: 'Des solutions fiables pour prot\u00e9ger les actifs et fluidifier les op\u00e9rations \u00e9nerg\u00e9tiques.',
    tags: ['Oil services', 'Stockage', 'Maintenance'],
    icon: MdOilBarrel,
    image: petroleumImage,
    color: 'bg-slate-800',
    gradient: 'from-slate-700 to-slate-950',
    iconBg: 'bg-slate-700/10 border-slate-700/20 text-slate-700',
  },
  transport: {
    title: 'Port / Navire / Transport',
    sub: 'Logistique portuaire, maritime et transport multimodal',
    text: "Nous organisons les flux de marchandises, d'\u00e9quipements et de mat\u00e9riaux entre ports, navires, sites industriels et chantiers.",
    points: [
      'Affretement de navires et barges',
      'Logistique portuaire et offshore',
      'Transport terrestre lourd et exceptionnel',
      'Coordination des operations import-export',
    ],
    conclusion: "Une chaine logistique maitrisee, du quai jusqu'au site final.",
    tags: ['Port', 'Navire', 'Transport'],
    icon: MdLocalShipping,
    image: transportImage,
    color: 'bg-cyan-700',
    gradient: 'from-cyan-700 to-blue-900',
    iconBg: 'bg-cyan-700/10 border-cyan-700/20 text-cyan-700',
  },
  industry: {
    title: 'Industrie / Sablage',
    sub: 'Services industriels, traitement de surface et protection',
    text: 'GroupeTama intervient sur les installations industrielles avec des prestations de sablage, peinture anticorrosion, fabrication et maintenance.',
    points: [
      'Sablage et preparation de surface',
      'Peinture industrielle anticorrosion',
      'Soudure, chaudronnerie et structures metalliques',
      'Maintenance industrielle sur site',
    ],
    conclusion: 'Des interventions robustes pour prolonger la dur\u00e9e de vie des infrastructures.',
    tags: ['Sablage', 'Anticorrosion', 'Maintenance'],
    icon: MdBuildCircle,
    image: industryImage,
    color: 'bg-zinc-700',
    gradient: 'from-zinc-700 to-zinc-950',
    iconBg: 'bg-zinc-700/10 border-zinc-700/20 text-zinc-700',
  },
  btp: {
    title: 'G\u00e9nie Civil / BTP',
    sub: 'Construction, g\u00e9nie civil et travaux publics',
    text: "Nous pilotons des projets de construction et d'infrastructures avec une approche rigoureuse, du dimensionnement technique a la livraison.",
    points: [
      'Routes, plateformes et voiries',
      'Batiments industriels, tertiaires et r\u00e9sidentiels',
      'Fondations, ouvrages beton et structures metalliques',
      "R\u00e9habilitation d'infrastructures existantes",
    ],
    conclusion: 'Construire durablement avec des standards de qualite industriels.',
    tags: ['BTP', 'Genie civil', 'Infrastructure'],
    icon: MdConstruction,
    image: btpImage,
    color: 'bg-blue-700',
    gradient: 'from-blue-700 to-primary-900',
    iconBg: 'bg-blue-700/10 border-blue-700/20 text-blue-700',
  },
  energy: {
    title: '\u00c9nergie Verte / Photovolta\u00efque',
    sub: 'Solutions solaires et \u00e9nergie renouvelable',
    text: "GroupeTama d\u00e9veloppe des solutions photovolta\u00efques et hybrides pour r\u00e9duire les couts \u00e9nerg\u00e9tiques et renforcer l'autonomie des sites.",
    points: [
      '\u00c9tudes et installation de centrales solaires',
      "Systemes hybrides et stockage d'\u00e9nergie",
      'Maintenance et optimisation de performance',
      '\u00c9lectrification de sites isol\u00e9s',
    ],
    conclusion: 'Une \u00e9nergie plus propre, dimensionn\u00e9e pour les r\u00e9alit\u00e9s op\u00e9rationnelles africaines.',
    tags: ['Solaire', 'Photovolta\u00efque', 'Hybride'],
    icon: MdSolarPower,
    image: energyImage,
    color: 'bg-amber-600',
    gradient: 'from-amber-500 to-emerald-700',
    iconBg: 'bg-amber-600/10 border-amber-600/20 text-amber-600',
  },
  trading: {
    title: 'Trading de mati\u00e8res premi\u00e8res',
    sub: 'P\u00e9trole, minerais, engrais et commodit\u00e9s strat\u00e9giques',
    text: "Nous facilitons l'approvisionnement, la n\u00e9gociation et la distribution de mati\u00e8res premi\u00e8res pour les industriels et partenaires institutionnels.",
    points: [
      'Trading p\u00e9trolier et produits d\u00e9riv\u00e9s',
      'Minerais et intrants industriels',
      'Engrais et produits agricoles strategiques',
      'Sourcing, controle qualite et logistique',
    ],
    conclusion: 'Un acces structur\u00e9 aux commodit\u00e9s essentielles, avec tracabilit\u00e9 et maitrise des risques.',
    tags: ['P\u00e9trole', 'Minerais', 'Engrais'],
    icon: MdFactory,
    image: tradingImage,
    color: 'bg-emerald-700',
    gradient: 'from-emerald-700 to-teal-900',
    iconBg: 'bg-emerald-700/10 border-emerald-700/20 text-emerald-700',
  },
  tech: {
    title: 'Tech / Digital',
    sub: 'Digitalisation, automatisation et int\u00e9gration IT',
    text: "GroupeTama modernise les operations par des solutions digitales, des systemes de supervision et des outils d'aide a la decision.",
    points: [
      'Automatisation industrielle et supervision',
      'Integration IT et outils metiers',
      "Modernisation d'\u00e9quipements connect\u00e9s",
      'Conseil, maintenance et support technique',
    ],
    conclusion: 'La technologie au service de la performance, de la s\u00e9curit\u00e9 et du pilotage.',
    tags: ['Digital', 'Automation', 'IT'],
    icon: MdComputer,
    image: techImage,
    color: 'bg-indigo-700',
    gradient: 'from-indigo-700 to-violet-900',
    iconBg: 'bg-indigo-700/10 border-indigo-700/20 text-indigo-700',
  },
}

export function getActivities() {
  return activityOrder.map((key) => ({
    key,
    ...activityCatalog[key],
    image: activityCatalog[key].image,
    icon: activityCatalog[key].icon,
    color: activityCatalog[key].color,
    gradient: activityCatalog[key].gradient,
    iconBg: activityCatalog[key].iconBg,
  }))
}
