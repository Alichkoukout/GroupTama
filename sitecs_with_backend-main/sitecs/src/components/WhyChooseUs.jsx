import React from 'react'
import { FaIndustry, FaUsers, FaCogs, FaClock } from 'react-icons/fa'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

const reasons = [
  {
    icon: FaIndustry,
    title: 'Expertise Panafricaine',
    desc: '15+ ans d\'expérience en construction, énergie et services industriels',
    points: ['Présent dans 8 pays africains', '200+ projets livrés avec succès', 'Standards internationaux'],
  },
  {
    icon: FaUsers,
    title: '50+ Experts Qualifiés',
    desc: 'Équipe pluridisciplinaire avec compétences techniques avancées',
    points: ['Ingénieurs certifiés', 'Chefs de projet expérimentés', 'Techniciens spécialisés'],
  },
  {
    icon: FaCogs,
    title: 'Solutions Intégrées',
    desc: 'De la conception à la livraison, nous gérons l\'ensemble du projet',
    points: ['Conception & planification', 'Exécution maîtrisée', 'Suivi post-projet'],
  },
  {
    icon: FaClock,
    title: 'Respect des Délais',
    desc: 'Livraison ponctuelle et qualité garantie sur chaque projet',
    points: ['Planning rigoureux', 'Suivi continu', 'Zéro dépassement'],
  },
]

function FeatureCard({ r, delay, t }) {
  const Icon = r.icon
  return (
    <div className={`reveal delay-${delay} group relative rounded-2xl p-8
                     border border-white/[.08] hover:border-primary-500/30
                     bg-white/[.04] hover:bg-white/[.07]
                     transition-all duration-500`}>

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary-500/0 group-hover:bg-primary-500/[.04]
                      transition-colors duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="relative w-14 h-14 mb-6">
        <div className="absolute inset-0 rounded-2xl bg-primary-500/15 group-hover:bg-primary-500/25
                        transition-colors duration-400" />
        <div className="absolute inset-0 rounded-2xl border border-primary-500/20 group-hover:border-primary-500/50
                        transition-colors duration-400" />
        <Icon className="absolute inset-0 m-auto text-primary-400 text-xl" />
      </div>

      <h3 className="text-white font-black text-lg mb-3 group-hover:text-primary-300 transition-colors">
        {r.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{r.desc}</p>

      {/* Points */}
      <ul className="space-y-2">
        {r.points.map(pt => (
          <li key={pt} className="flex items-center gap-2.5 text-slate-300 text-sm">
            <FiCheck className="text-primary-400 flex-shrink-0 text-base" />
            {pt}
          </li>
        ))}
      </ul>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl
                      bg-gradient-to-r from-transparent via-primary-500 to-transparent
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  )
}

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const ref = useReveal()
  const navigate = useNavigate()

  return (
    <section ref={ref} className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a1628 0%, #0f2144 50%, #0a1628 100%)' }}>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[.04]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

      {/* Radial glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(245,158,11,.05) 0%, transparent 70%)',
        }} />

      <div className="section-wrap relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag !text-primary-400 justify-center">{t('whyChooseUs.section_tag')}</span>
          <h2 className="section-title !text-white text-center">{t('whyChooseUs.title')}</h2>
          <p className="section-body text-slate-400 mx-auto text-center">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {reasons.map((r, i) => (
            <FeatureCard key={r.title} r={r} delay={[0, 100, 200, 300][i]} t={t} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="reveal delay-300 relative rounded-3xl overflow-hidden p-10 md:p-14
                         flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, #0080ff 0%, #00d872 60%, #1fe08e 100%)' }}>

          {/* BG decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white" />
          </div>

          <div className="relative">
            <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">{t('whyChooseUs.cta_label')}</p>
            <h3 className="text-white font-black text-2xl md:text-3xl leading-tight">
              {t('whyChooseUs.cta_title')}
            </h3>
            <p className="text-blue-100/80 text-sm mt-2">
              {t('whyChooseUs.cta_subtitle')}
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="relative flex-shrink-0 inline-flex items-center gap-2.5 bg-white text-primary-700
                        font-black px-8 py-4 rounded-xl hover:bg-primary-950 hover:text-white
                        transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            {t('whyChooseUs.cta_button')} <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
