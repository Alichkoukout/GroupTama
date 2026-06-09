import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FiCheck } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'
import { getActivities } from '../data/activityCatalog'
import heroImage from '../images/global.png'

export default function ActivitiesPage() {
  const { t } = useTranslation()
  const ref = useReveal()
  const location = useLocation()
  const translatedActivities = getActivities(t('activities.cards', { returnObjects: true }) || {})

  useEffect(() => {
    if (!location.hash) return

    const timeout = window.setTimeout(() => {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)

    return () => window.clearTimeout(timeout)
  }, [location.hash])

  return (
    <>
      <PageHero
        tag="Secteurs d'intervention"
        title="Nos Activites"
        subtitle="GroupeTama opere dans sept secteurs industriels cles pour transformer les projets en realite."
        image={heroImage}
      />

      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-24">
          {translatedActivities.map(({ key, icon: Icon, color, title, sub, text, conclusion, image, points, sections }, i) => {
            const allPoints = (points && points.length > 0)
              ? points
              : (sections ? sections.flatMap(section => section.points || []) : [])

            return (
              <article
                id={key}
                key={key}
                className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className={`reveal-${i % 2 === 0 ? 'left' : 'right'} relative`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src={image} alt={title} className="w-full h-80 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/45 to-transparent" />
                  </div>
                  <div className={`absolute -bottom-5 ${i % 2 === 0 ? '-right-5' : 'right-5'} w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-xl border-4 border-white`}>
                    <Icon className="text-white text-3xl" />
                  </div>
                </div>

                <div className={`reveal-${i % 2 === 0 ? 'right' : 'left'}`}>
                  <span className="section-tag">{sub}</span>
                  <h2 className="section-title">{title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-4">{text || conclusion}</p>
                  {text && conclusion && (
                    <p className="text-slate-700 leading-relaxed font-semibold mb-7">{conclusion}</p>
                  )}

                  {allPoints.length > 0 && (
                    <ul className="space-y-3">
                      {allPoints.map(pt => (
                        <li key={pt} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                          <span className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                            <FiCheck className="text-amber-600 text-xs" />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
