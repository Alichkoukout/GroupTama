import React from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FiMapPin } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import btpImage from '../images/btp_genie_civil.png'
import energyImage from '../images/energie_solaire.png'
import industryImage from '../images/global.png'
import petroleumImage from '../images/petrole&stockage.png'
import transportImage from '../images/port_transport.png'
import techImage from '../images/tech.png'
import tradingImage from '../images/trading_matiere_premiere.png'

const projects = [
  {
    id: 1,
    slug: 'btp',
    cat: 'G\u00e9nie Civil / BTP',
    color: 'bg-blue-700',
    title: 'Complexe residentiel Malabo Nord',
    location: 'Malabo, Guin\u00e9e \u00c9quatoriale',
    year: '2023',
    desc: "Construction d'un complexe de logements avec voiries, reseaux et finitions adaptees aux standards corporatifs.",
    image: btpImage,
  },
  {
    id: 2,
    slug: 'industry',
    cat: 'Industrie / Sablage',
    color: 'bg-zinc-700',
    title: 'Maintenance et traitement anticorrosion',
    location: 'Bata, Guin\u00e9e \u00c9quatoriale',
    year: '2022',
    desc: "Sablage, peinture industrielle et remise en etat d'equipements exposes aux environnements marins.",
    image: industryImage,
  },
  {
    id: 3,
    slug: 'energy',
    cat: '\u00c9nergie Verte',
    color: 'bg-amber-600',
    title: 'Centrale solaire photovoltaique',
    location: 'Afrique Centrale',
    year: '2023',
    desc: "Conception et deploiement d'une solution solaire pour renforcer l'autonomie energetique de sites strategiques.",
    image: energyImage,
  },
  {
    id: 4,
    slug: 'petroleum',
    cat: 'P\u00e9trole & Stockage',
    color: 'bg-slate-800',
    title: 'Plateforme de stockage petrolier',
    location: 'Zone portuaire',
    year: '2024',
    desc: 'Organisation des capacites de stockage, securisation des flux et maintenance des installations petrolieres.',
    image: petroleumImage,
  },
  {
    id: 5,
    slug: 'transport',
    cat: 'Port / Navire / Transport',
    color: 'bg-cyan-700',
    title: 'Operation logistique portuaire',
    location: 'Golfe de Guin\u00e9e',
    year: '2024',
    desc: 'Coordination portuaire, transport terrestre lourd et affretement pour marchandises industrielles.',
    image: transportImage,
  },
  {
    id: 6,
    slug: 'trading',
    cat: 'Trading',
    color: 'bg-emerald-700',
    title: 'Approvisionnement en matieres premieres',
    location: "Afrique de l'Ouest",
    year: '2023',
    desc: 'Sourcing et distribution de produits petroliers, minerais et engrais avec suivi qualite et logistique.',
    image: tradingImage,
  },
  {
    id: 7,
    slug: 'tech',
    cat: 'Tech / Digital',
    color: 'bg-indigo-700',
    title: 'Systeme digital de supervision',
    location: 'Cameroun',
    year: '2022',
    desc: "Integration d'outils digitaux pour superviser les operations, centraliser les donnees et ameliorer la decision.",
    image: techImage,
  },
]

const categories = [
  { label: 'Tous', value: 'all' },
  { label: 'BTP', value: 'btp' },
  { label: 'Industrie', value: 'industry' },
  { label: '\u00c9nergie', value: 'energy' },
  { label: 'P\u00e9trole', value: 'petroleum' },
  { label: 'Transport', value: 'transport' },
  { label: 'Trading', value: 'trading' },
  { label: 'Tech', value: 'tech' },
]

export default function ProjectsPage() {
  const ref = useReveal()
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = searchParams.get('category') || 'all'
  const activeCategory = categories.some(category => category.value === selected) ? selected : 'all'
  const list = activeCategory === 'all' ? projects : projects.filter(project => project.slug === activeCategory)

  const setCategory = (value) => {
    if (value === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: value })
    }
  }

  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Nos R\u00e9alisations"
        subtitle="Des projets ambitieux livr\u00e9s avec excellence a travers l'Afrique."
        image={industryImage}
      />

      <section ref={ref} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="reveal flex flex-wrap gap-3 justify-center mb-14">
            {categories.map(category => (
              <button
                key={category.value}
                type="button"
                onClick={() => setCategory(category.value)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-250 ${
                  activeCategory === category.value
                    ? 'bg-primary-900 text-white shadow-lg shadow-primary-900/25'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-primary-300 hover:text-primary-800 hover:shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {list.map((p, i) => (
              <article
                id={`project-${p.id}`}
                key={p.id}
                className={`scroll-mt-28 reveal delay-${[0, 100, 200, 0, 100, 200, 0][i]} group card-premium`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-4 left-4 ${p.color} text-white text-[.63rem] font-black uppercase tracking-widest px-3 py-1.5 rounded-full`}>
                    {p.cat}
                  </span>
                  <span className="absolute top-4 right-4 glass text-white text-[.7rem] font-bold px-3 py-1 rounded-full">
                    {p.year}
                  </span>
                  <p className="absolute bottom-3 left-4 text-white/80 text-xs flex items-center gap-1">
                    <FiMapPin className="text-amber-400" /> {p.location}
                  </p>
                </div>

                <div className="p-7">
                  <h3 className="text-base font-black text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>

                <div className="h-[2px] bg-gradient-to-r from-amber-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <div className="text-center py-20 text-slate-400">Aucun projet dans cette categorie.</div>
          )}
        </div>
      </section>
    </>
  )
}
